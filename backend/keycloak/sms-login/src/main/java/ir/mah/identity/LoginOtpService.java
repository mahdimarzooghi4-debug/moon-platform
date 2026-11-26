package ir.mah.identity;

import java.sql.SQLException;
import java.util.Objects;
import java.util.UUID;

/** Orchestrates issuance, provider acceptance and atomic verification. No token issuance. */
public final class LoginOtpService {
    public enum SendState { ACCEPTED, NOT_AVAILABLE }
    public record SendResult(SendState state, UUID challengeId) {}
    private final PostgresLoginOtpStore store;
    private final LoginSmsSender sender;

    public LoginOtpService(PostgresLoginOtpStore store, LoginSmsSender sender) {
        this.store = Objects.requireNonNull(store);
        this.sender = Objects.requireNonNull(sender);
    }

    public SendResult send(LoginOtpChallenge.Binding binding, String trustedSource)
        throws SQLException, InterruptedException {
        var pending = store.issue(binding, trustedSource);
        if (pending.isEmpty()) return unavailable();
        var issued = pending.orElseThrow();
        UUID id = issued.challenge().id();
        // Do not retry automatically: a network failure can mean the provider accepted
        // the SMS but the response was lost. Pending/invalidated codes cannot authenticate.
        LoginSmsSender.Result result;
        try {
            result = sender.send(binding.mobile(), issued.code());
        } catch (InterruptedException e) {
            try { store.deliveryFailed(binding, id); }
            catch (SQLException failure) { e.addSuppressed(failure); }
            throw e;
        } catch (RuntimeException e) {
            // Deliberately discard transport exception details; they may contain secrets.
            store.deliveryFailed(binding, id);
            return unavailable();
        }
        if (result != LoginSmsSender.Result.ACCEPTED) {
            store.deliveryFailed(binding, id);
            return unavailable();
        }
        if (!store.deliveryAccepted(binding, id)) return unavailable();
        return new SendResult(SendState.ACCEPTED, id);
    }

    /** Reserve the same budgets for an unresolved account without contacting SMS.ir. */
    public void discardUnresolved(LoginOtpChallenge.Binding binding, String trustedSource) throws SQLException {
        var issued = store.issue(binding, trustedSource);
        if (issued.isPresent()) store.deliveryFailed(binding, issued.orElseThrow().challenge().id());
    }

    public boolean verify(LoginOtpChallenge.Binding binding, UUID challengeId, String code) throws SQLException {
        return store.verify(binding, challengeId, code);
    }

    private static SendResult unavailable() {
        return new SendResult(SendState.NOT_AVAILABLE, null);
    }
}
