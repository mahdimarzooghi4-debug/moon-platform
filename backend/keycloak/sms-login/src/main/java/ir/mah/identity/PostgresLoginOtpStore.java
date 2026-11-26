package ir.mah.identity;

import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.security.GeneralSecurityException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.HexFormat;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.sql.DataSource;

/**
 * Private, shared PostgreSQL store. No network sends occur inside a transaction.
 * Use a dedicated, stable secret across replicas; key changes require coordinated
 * invalidation. This component does not resolve accounts or authenticate users.
 */
public final class PostgresLoginOtpStore {
    private final DataSource source;
    private final byte[] key;

    public PostgresLoginOtpStore(DataSource source, byte[] key) {
        this.source = Objects.requireNonNull(source);
        if (key == null || key.length < 32) throw new IllegalArgumentException("OTP key must be at least 32 bytes");
        this.key = key.clone();
    }

    // Reuses the existing registration limits: 60s cooldown, 5/mobile/hour,
    // 5/source/10min, 50/realm/10min. Source must come from the trusted server.
    public Optional<LoginOtpChallenge.Issued> issue(LoginOtpChallenge.Binding binding, String trustedSource)
        throws SQLException {
        Objects.requireNonNull(binding);
        if (trustedSource == null || trustedSource.isBlank())
            throw new IllegalArgumentException("Trusted source required");
        String realm = hash("realm", binding.realmId());
        String scope = scope(binding);
        String origin = hash("source", binding.realmId(), trustedSource);
        return transaction(realm, (c, now) -> {
            // Expired challenges can never be accepted or resurrected. Keep the
            // separate issuance ledger for the full existing rate-limit window.
            execute(c, "DELETE FROM moon_login_otp_challenge WHERE expires_at<=?", Timestamp.from(now));
            // These records are only operational limit state, not an audit trail.
            execute(c, "DELETE FROM moon_login_otp_send WHERE realm_key=? AND issued_at<=?",
                realm, Timestamp.from(now.minusSeconds(3600)));
            if (count(c, "SELECT count(*) FROM moon_login_otp_send WHERE scope_key=? AND issued_at>?",
                    scope, Timestamp.from(now.minusSeconds(60))) > 0 ||
                count(c, "SELECT count(*) FROM moon_login_otp_send WHERE scope_key=? AND issued_at>?",
                    scope, Timestamp.from(now.minusSeconds(3600))) >= 5 ||
                count(c, "SELECT count(*) FROM moon_login_otp_send WHERE realm_key=? AND source_key=? AND issued_at>?",
                    realm, origin, Timestamp.from(now.minusSeconds(600))) >= 5 ||
                count(c, "SELECT count(*) FROM moon_login_otp_send WHERE realm_key=? AND issued_at>?",
                    realm, Timestamp.from(now.minusSeconds(600))) >= 50)
                return Optional.empty();

            var issued = LoginOtpChallenge.issue(binding, now, key);
            var challenge = issued.challenge();
            execute(c, """
                INSERT INTO moon_login_otp_challenge
                (scope_key,binding_key,challenge_id,expires_at,code_digest,attempts,state)
                VALUES (?,?,?,?,?,?,?)
                ON CONFLICT (scope_key) DO UPDATE SET binding_key=EXCLUDED.binding_key,
                challenge_id=EXCLUDED.challenge_id,expires_at=EXCLUDED.expires_at,
                code_digest=EXCLUDED.code_digest,attempts=EXCLUDED.attempts,state=EXCLUDED.state
                """, scope, bindingKey(binding), challenge.id(), Timestamp.from(challenge.expiresAt()),
                challenge.digestForStorage(), challenge.attempts(), challenge.state().name());
            execute(c, "INSERT INTO moon_login_otp_send (challenge_id,realm_key,scope_key,source_key,issued_at) VALUES (?,?,?,?,?)",
                challenge.id(), realm, scope, origin, Timestamp.from(now));
            return Optional.of(issued);
        });
    }

    public boolean deliveryAccepted(LoginOtpChallenge.Binding binding, UUID id) throws SQLException {
        return transaction(hash("realm", binding.realmId()), (c, now) -> {
            var current = load(c, binding, id);
            if (current == null || current.state() != LoginOtpChallenge.State.PENDING_DELIVERY) return false;
            var next = current.deliveryAccepted(now);
            save(c, next);
            return next.state() == LoginOtpChallenge.State.READY;
        });
    }

    public void deliveryFailed(LoginOtpChallenge.Binding binding, UUID id) throws SQLException {
        transaction(hash("realm", binding.realmId()), (c, now) -> {
            var current = load(c, binding, id);
            if (current != null && current.state() == LoginOtpChallenge.State.PENDING_DELIVERY)
                save(c, current.invalidate());
            return null;
        });
    }

    // Success is returned only after durable consumption. An uncertain commit
    // throws and must never be converted into a successful Keycloak login.
    public boolean verify(LoginOtpChallenge.Binding binding, UUID id, String code) throws SQLException {
        return transaction(hash("realm", binding.realmId()), (c, now) -> {
            var current = load(c, binding, id);
            if (current == null) return false;
            var verification = current.verify(binding, code, now, key);
            if (verification.challenge() != current) save(c, verification.challenge());
            return verification.result() == LoginOtpChallenge.Result.VERIFIED;
        });
    }

    private LoginOtpChallenge load(Connection c, LoginOtpChallenge.Binding binding, UUID id) throws SQLException {
        if (id == null) return null;
        try (var statement = prepare(c, """
            SELECT challenge_id,expires_at,code_digest,attempts,state
            FROM moon_login_otp_challenge WHERE scope_key=? AND binding_key=? AND challenge_id=? FOR UPDATE
            """, scope(binding), bindingKey(binding), id);
             var row = statement.executeQuery()) {
            if (!row.next()) return null;
            return LoginOtpChallenge.restore(row.getObject(1, UUID.class), binding, row.getTimestamp(2).toInstant(),
                row.getString(3), row.getInt(4), LoginOtpChallenge.State.valueOf(row.getString(5)));
        }
    }

    private static void save(Connection c, LoginOtpChallenge next) throws SQLException {
        if (execute(c, "UPDATE moon_login_otp_challenge SET attempts=?,state=? WHERE challenge_id=?",
                next.attempts(), next.state().name(), next.id()) != 1)
            throw new SQLException("OTP transition lost");
    }

    private String scope(LoginOtpChallenge.Binding b) { return hash("mobile", b.realmId(), b.mobile()); }
    private String bindingKey(LoginOtpChallenge.Binding b) {
        return hash("binding", b.realmId(), b.clientId(), b.authSessionId(), b.subject(), b.mobile());
    }

    private String hash(String... parts) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(key, "HmacSHA256"));
            mac.update("moon-otp-store-v1".getBytes(StandardCharsets.UTF_8));
            for (String part : parts) {
                byte[] bytes = part.getBytes(StandardCharsets.UTF_8);
                mac.update(ByteBuffer.allocate(4).putInt(bytes.length).array());
                mac.update(bytes);
            }
            return HexFormat.of().formatHex(mac.doFinal());
        } catch (GeneralSecurityException e) {
            throw new IllegalStateException("OTP store cryptography unavailable", e);
        }
    }

    @FunctionalInterface private interface Work<T> { T run(Connection c, Instant now) throws SQLException; }

    private <T> T transaction(String realm, Work<T> work) throws SQLException {
        try (Connection c = source.getConnection()) {
            c.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
            c.setAutoCommit(false);
            try {
                // All issue/consume/ack operations in a realm serialize across replicas.
                // Lock precedes the clock read and all rate/transition reads.
                try (var lock = prepare(c, "SELECT pg_advisory_xact_lock(hashtextextended(?,0))", realm)) {
                    lock.execute();
                }
                Instant now;
                try (var clock = c.prepareStatement("SELECT clock_timestamp()");
                     ResultSet row = clock.executeQuery()) {
                    if (!row.next()) throw new SQLException("OTP database clock unavailable");
                    now = row.getTimestamp(1).toInstant();
                }
                T result = work.run(c, now);
                c.commit();
                return result;
            } catch (SQLException | RuntimeException e) {
                try { c.rollback(); } catch (SQLException rollback) { e.addSuppressed(rollback); }
                throw e;
            }
        }
    }

    private static PreparedStatement prepare(Connection c, String sql, Object... args) throws SQLException {
        PreparedStatement s = c.prepareStatement(sql);
        try {
            for (int i = 0; i < args.length; i++) s.setObject(i + 1, args[i]);
            return s;
        } catch (SQLException e) { s.close(); throw e; }
    }
    private static int execute(Connection c, String sql, Object... args) throws SQLException {
        try (var s = prepare(c, sql, args)) { return s.executeUpdate(); }
    }
    private static long count(Connection c, String sql, Object... args) throws SQLException {
        try (var s = prepare(c, sql, args); var row = s.executeQuery()) {
            if (!row.next()) throw new SQLException("OTP rate state unavailable");
            return row.getLong(1);
        }
    }
}
