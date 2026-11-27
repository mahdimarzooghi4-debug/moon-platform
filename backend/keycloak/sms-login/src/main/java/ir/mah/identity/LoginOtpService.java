package ir.mah.identity;

import java.sql.SQLException;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/** Browser requests never wait on SMS transport. Only committed acknowledgement permits verification.
 * Bounded volatile work queue: no persistent plaintext, automatic retries, or synthetic acknowledgement. */
public final class LoginOtpService implements AutoCloseable {
    private final PostgresLoginOtpStore store;
    private final LoginSmsSender sender;
    private final ThreadPoolExecutor delivery;

    public LoginOtpService(PostgresLoginOtpStore store, LoginSmsSender sender) {
        this.store = Objects.requireNonNull(store);
        this.sender = Objects.requireNonNull(sender);
        // Local engineering resource bound, not a new account or rate policy.
        delivery = new ThreadPoolExecutor(4, 4, 0L, TimeUnit.MILLISECONDS,
            new ArrayBlockingQueue<>(50), Thread.ofPlatform().daemon().name("moon-otp-delivery-",0).factory(),
            new ThreadPoolExecutor.AbortPolicy());
    }

    /** Same issuance path for resolved and unresolved accounts; issuance is not delivery. */
    public Optional<UUID> requestDelivery(LoginOtpChallenge.Binding binding, String trustedSource,
                                           boolean resolved) throws SQLException {
        var pending = store.issue(binding, trustedSource);
        if (pending.isEmpty()) return Optional.empty();
        var issued = pending.orElseThrow();
        UUID id = issued.challenge().id();
        try {
            delivery.execute(() -> deliver(binding, issued, resolved));
        } catch (RejectedExecutionException e) {
            // Never run transport on the caller. Pending remains unusable and expires.
            // The original rate budget is retained even on overload or shutdown.
        }
        return Optional.of(id);
    }

    private void deliver(LoginOtpChallenge.Binding binding, LoginOtpChallenge.Issued issued,
                         boolean resolved) {
        UUID id = issued.challenge().id();
        try {
            if (!store.isPending(binding, id)) return;
            if (!resolved) {
                store.deliveryFailed(binding, id);
                return;
            }
            if (sender.send(binding.mobile(), issued.code()) == LoginSmsSender.Result.ACCEPTED)
                store.deliveryAccepted(binding, id);
            else
                store.deliveryFailed(binding, id);
        } catch (InterruptedException e) {
            invalidatePending(binding, id);
            Thread.currentThread().interrupt();
        } catch (SQLException | RuntimeException e) {
            invalidatePending(binding, id);
        }
    }

    private void invalidatePending(LoginOtpChallenge.Binding binding, UUID id) {
        try { store.deliveryFailed(binding, id); }
        catch (SQLException | RuntimeException ignored) {
            // No details logged; pending remains unusable. Never retry ambiguous delivery.
        }
    }

    public boolean verify(LoginOtpChallenge.Binding binding, UUID challengeId, String code) throws SQLException {
        return store.verify(binding, challengeId, code);
    }

    @Override public void close() { delivery.shutdownNow(); }
}
