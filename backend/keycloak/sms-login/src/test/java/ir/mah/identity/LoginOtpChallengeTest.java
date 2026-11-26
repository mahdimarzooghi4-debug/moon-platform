package ir.mah.identity;

import java.time.Instant;
import java.security.SecureRandom;
import java.util.Arrays;

public final class LoginOtpChallengeTest {
    private static final Instant NOW = Instant.parse("2026-11-26T12:00:00Z");
    private static final byte[] KEY = new byte[32];
    private static final LoginOtpChallenge.Binding BINDING =
        new LoginOtpChallenge.Binding("moon", "moon-web", "session-1", "subject-1", "09120000000");

    public static void main(String[] args) {
        new SecureRandom().nextBytes(KEY);
        var issued = LoginOtpChallenge.issue(BINDING, NOW, KEY);
        var challenge = issued.challenge();
        check(issued.code().matches("[0-9]{6}"), "six digits");
        check(challenge.expiresAt().equals(NOW.plusSeconds(120)), "120 seconds");
        rejected(challenge.verify(BINDING, issued.code(), NOW, KEY), "no delivery acknowledgement");
        var ready = challenge.deliveryAccepted(NOW);
        var verified = ready.verify(BINDING, issued.code(), NOW.plusSeconds(119), KEY);
        check(verified.result() == LoginOtpChallenge.Result.VERIFIED, "valid code");
        check(verified.challenge().state() == LoginOtpChallenge.State.CONSUMED, "consumption");
        rejected(verified.challenge().verify(BINDING, issued.code(), NOW.plusSeconds(119), KEY), "replay");
        rejected(ready.verify(BINDING, issued.code(), NOW.plusSeconds(120), KEY), "exact expiration");
        rejected(challenge.deliveryAccepted(NOW.plusSeconds(120)).verify(BINDING, issued.code(), NOW.plusSeconds(120), KEY), "late delivery");
        rejected(ready.invalidate().verify(BINDING, issued.code(), NOW, KEY), "invalidated or replaced");
        for (var wrongBinding : new LoginOtpChallenge.Binding[]{
            new LoginOtpChallenge.Binding("other", "moon-web", "session-1", "subject-1", "09120000000"),
            new LoginOtpChallenge.Binding("moon", "other", "session-1", "subject-1", "09120000000"),
            new LoginOtpChallenge.Binding("moon", "moon-web", "session-2", "subject-1", "09120000000"),
            new LoginOtpChallenge.Binding("moon", "moon-web", "session-1", "subject-2", "09120000000"),
            new LoginOtpChallenge.Binding("moon", "moon-web", "session-1", "subject-1", "09120000001")}) {
            rejected(ready.verify(wrongBinding, issued.code(), NOW, KEY), "binding isolation");
        }
        byte[] wrongKey = Arrays.copyOf(KEY, KEY.length);
        wrongKey[0] ^= 1;
        rejected(ready.verify(BINDING, issued.code(), NOW, wrongKey), "wrong signing key");
        String wrong = issued.code().equals("000000") ? "000001" : "000000";
        var exhausted = ready;
        for (int n = 1; n <= LoginOtpChallenge.MAX_ATTEMPTS; n++) {
            var attempt = exhausted.verify(BINDING, wrong, NOW, KEY);
            rejected(attempt, "wrong code");
            exhausted = attempt.challenge();
            check(exhausted.attempts() == n, "attempt counted");
        }
        check(exhausted.state() == LoginOtpChallenge.State.INVALIDATED, "attempt limit");
        rejected(exhausted.verify(BINDING, issued.code(), NOW, KEY), "no unlock by correct code");
        var malformed = ready.verify(BINDING, "۱۲۳۴۵۶", NOW, KEY);
        rejected(malformed, "noncanonical code");
        check(malformed.challenge().attempts() == 1, "malformed attempt counted");
        check(!issued.toString().contains(issued.code()), "redacted issue");
        try {
            LoginOtpChallenge.issue(BINDING, NOW, new byte[1]);
            throw new AssertionError("weak key accepted");
        } catch (IllegalArgumentException expected) { }
        System.out.println("Login OTP challenge policy tests passed");
    }

    private static void rejected(LoginOtpChallenge.Verification verification, String label) {
        check(verification.result() == LoginOtpChallenge.Result.REJECTED, label);
    }
    private static void check(boolean condition, String label) {
        if (!condition) throw new AssertionError(label);
    }
}
