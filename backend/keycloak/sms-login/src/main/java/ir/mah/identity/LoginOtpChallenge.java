package ir.mah.identity;

import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.security.GeneralSecurityException;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.time.Duration;
import java.time.Instant;
import java.util.HexFormat;
import java.util.Locale;
import java.util.Objects;
import java.util.UUID;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

/**
 * Role-independent transition policy. Not a session store or an authenticator.
 * The caller must persist each transition atomically before acting on it.
 */
public final class LoginOtpChallenge {
    public static final Duration VALIDITY = Duration.ofSeconds(120);
    public static final int MAX_ATTEMPTS = 5;
    private static final SecureRandom RANDOM = new SecureRandom();

    public enum State { PENDING_DELIVERY, READY, CONSUMED, INVALIDATED }
    public enum Result { VERIFIED, REJECTED }

    public record Binding(String realmId, String clientId, String authSessionId,
                          String subject, String mobile) {
        public Binding {
            for (String field : new String[]{realmId, clientId, authSessionId, subject}) {
                if (field == null || field.isBlank()) throw new IllegalArgumentException("Missing identity binding");
            }
            if (mobile == null || !mobile.matches("09[0-9]{9}"))
                throw new IllegalArgumentException("Noncanonical mobile");
        }
        @Override public String toString() { return "Binding[redacted]"; }
    }

    public record Issued(LoginOtpChallenge challenge, String code) {
        @Override public String toString() { return "Issued[redacted]"; }
    }

    public record Verification(LoginOtpChallenge challenge, Result result) {}

    private final UUID id;
    private final Binding binding;
    private final Instant expiresAt;
    private final String digest;
    private final int attempts;
    private final State state;

    private LoginOtpChallenge(UUID id, Binding binding, Instant expiresAt,
                              String digest, int attempts, State state) {
        this.id = id;
        this.binding = binding;
        this.expiresAt = expiresAt;
        this.digest = digest;
        this.attempts = attempts;
        this.state = state;
    }

    public static Issued issue(Binding binding, Instant now, byte[] key) {
        Objects.requireNonNull(binding);
        Objects.requireNonNull(now);
        UUID id = UUID.randomUUID();
        String code = String.format(Locale.ROOT, "%06d", RANDOM.nextInt(1_000_000));
        Instant expiry = now.plus(VALIDITY);
        String digest = HexFormat.of().formatHex(mac(key, id, binding, expiry, code));
        return new Issued(new LoginOtpChallenge(id, binding, expiry, digest, 0,
            State.PENDING_DELIVERY), code);
    }

    public UUID id() { return id; }
    public Instant expiresAt() { return expiresAt; }
    public State state() { return state; }
    public int attempts() { return attempts; }

    public LoginOtpChallenge deliveryAccepted(Instant now) {
        Objects.requireNonNull(now);
        if (state != State.PENDING_DELIVERY) return this;
        return copy(attempts, now.isBefore(expiresAt) ? State.READY : State.INVALIDATED);
    }

    public LoginOtpChallenge invalidate() {
        if (state == State.CONSUMED || state == State.INVALIDATED) return this;
        return copy(attempts, State.INVALIDATED);
    }

    public Verification verify(Binding expected, String code, Instant now, byte[] key) {
        Objects.requireNonNull(now);
        if (state != State.READY || !binding.equals(expected))
            return new Verification(this, Result.REJECTED);
        if (!now.isBefore(expiresAt) || attempts >= MAX_ATTEMPTS)
            return new Verification(invalidate(), Result.REJECTED);

        int next = attempts + 1;
        boolean correct = code != null && code.matches("[0-9]{6}") &&
            MessageDigest.isEqual(HexFormat.of().parseHex(digest),
                mac(key, id, binding, expiresAt, code));
        if (correct) return new Verification(copy(next, State.CONSUMED), Result.VERIFIED);
        return new Verification(copy(next, next >= MAX_ATTEMPTS ? State.INVALIDATED : State.READY),
            Result.REJECTED);
    }

    private LoginOtpChallenge copy(int nextAttempts, State nextState) {
        return new LoginOtpChallenge(id, binding, expiresAt, digest, nextAttempts, nextState);
    }

    private static byte[] mac(byte[] key, UUID id, Binding binding, Instant expiry, String code) {
        if (key == null || key.length < 32) throw new IllegalArgumentException("OTP HMAC key must be at least 32 bytes");
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(key, "HmacSHA256"));
            for (String part : new String[]{"moon-login-otp-v1", id.toString(), binding.realmId(),
                binding.clientId(), binding.authSessionId(), binding.subject(), binding.mobile(),
                expiry.toString(), code}) {
                byte[] bytes = part.getBytes(StandardCharsets.UTF_8);
                mac.update(ByteBuffer.allocate(4).putInt(bytes.length).array());
                mac.update(bytes);
            }
            return mac.doFinal();
        } catch (GeneralSecurityException e) {
            throw new IllegalStateException("OTP cryptography unavailable", e);
        }
    }
}
