package ir.mah.identity;

import java.sql.SQLException;
import java.util.UUID;
import java.util.function.Supplier;
import org.keycloak.authentication.AuthenticationFlowContext;
import org.keycloak.authentication.AuthenticationFlowError;
import org.keycloak.authentication.Authenticator;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;
import org.keycloak.protocol.oidc.OIDCLoginProtocol;

/**
 * Standalone REQUIRED browser execution, intended only for moon-web in realm moon.
 * The browser never chooses a subject or role. Keycloak performs required actions
 * and issues the normal authorization code after successful atomic consumption.
 */
public final class MoonSmsAuthenticator implements Authenticator {
    private static final String MOBILE = "moon.sms.mobile";
    private static final String CHALLENGE = "moon.sms.challenge";
    private static final String FORM = "moon-sms-login.ftl";
    private final Supplier<LoginOtpService> service;

    MoonSmsAuthenticator(Supplier<LoginOtpService> service) { this.service = service; }

    @Override public void authenticate(AuthenticationFlowContext context) {
        if (!allowed(context)) { fail(context); return; }
        String mobile = context.getAuthenticationSession().getAuthNote(MOBILE);
        if (validMobile(mobile)) { form(context, mobile, true, null); return; }
        String hint = normalize(context.getAuthenticationSession().getClientNote(OIDCLoginProtocol.LOGIN_HINT_PARAM));
        form(context, validMobile(hint) ? hint : "", false, null);
    }

    @Override public void action(AuthenticationFlowContext context) {
        if (!allowed(context)) { fail(context); return; }
        var data = context.getHttpRequest().getDecodedFormParameters();
        if (data.containsKey("cancel")) { clear(context); context.cancelLogin(); return; }
        String action = data.getFirst("moonAction");
        String mobile = context.getAuthenticationSession().getAuthNote(MOBILE);
        if ("edit".equals(action)) {
            clear(context);
            form(context, validMobile(mobile) ? mobile : "", false, null);
            return;
        }
        try {
            if ("send".equals(action) && mobile == null) {
                String entered = normalize(data.getFirst("mobile"));
                if (!validMobile(entered)) { form(context, "", false, "شماره موبایل معتبر وارد کنید."); return; }
                send(context, entered);
                return;
            }
            if ("resend".equals(action) && validMobile(mobile)) { send(context, mobile); return; }
            if ("verify".equals(action) && validMobile(mobile)) {
                String code = normalize(data.getFirst("code"));
                verify(context, mobile, code);
                return;
            }
            form(context, validMobile(mobile) ? mobile : "", validMobile(mobile), "درخواست معتبر نیست.");
        } catch (SQLException | RuntimeException e) {
            // No request payload, exception text, phone, OTP or secret is logged.
            fail(context);
        }
    }

    private void send(AuthenticationFlowContext context, String mobile) throws SQLException {
        var auth = context.getAuthenticationSession();
        String previous = auth.getAuthNote(CHALLENGE);
        UserModel user = eligible(context, mobile);
        // Unknown/disabled accounts get exactly the same form but never an SMS.
        // They are subject to shared send budgets as well; no account creation.
        String source = context.getConnection().getRemoteAddr();
        if (source == null || source.isBlank()) throw new IllegalStateException("Missing connection source");
        var binding = binding(context, mobile, user == null ? "moon-unresolved-subject" : user.getId());
        var issued = service.get().requestDelivery(binding, source, user != null);
        if (issued.isPresent())
            auth.setAuthNote(CHALLENGE, issued.orElseThrow().toString());
        else if (previous == null || !mobile.equals(auth.getAuthNote(MOBILE)))
            auth.removeAuthNote(CHALLENGE);
        auth.setAuthNote(MOBILE, mobile);
        form(context, mobile, true, null);
    }

    private void verify(AuthenticationFlowContext context, String mobile, String code) throws SQLException {
        String challenge = context.getAuthenticationSession().getAuthNote(CHALLENGE);
        UserModel user = eligible(context, mobile);
        var binding = binding(context, mobile, user == null ? "moon-unresolved-subject" : user.getId());
        boolean verified = challenge != null &&
            service.get().verify(binding, UUID.fromString(challenge), code);
        if (verified && user != null) {
            // Re-resolve account after consumption. Never promote a stale subject or a
            // user whose canonical mobile or enabled/lockout state changed.
            UserModel current = eligible(context, mobile);
            if (current != null && current.getId().equals(user.getId())) {
                clear(context);
                context.setUser(current);
                context.success("moon-sms-otp");
                return;
            }
            clear(context);
        }
        form(context, mobile, true, "کد تأیید نامعتبر یا منقضی است.");
    }

    private static UserModel eligible(AuthenticationFlowContext context, String mobile) {
        UserModel user = context.getSession().users().getUserByUsername(context.getRealm(), mobile);
        if (user == null || !user.isEnabled() || !mobile.equals(user.getUsername())) return null;
        if (context.getRealm().isBruteForceProtected() &&
            (context.getProtector().isTemporarilyDisabled(context.getSession(), context.getRealm(), user) ||
             context.getProtector().isPermanentlyLockedOut(context.getSession(), context.getRealm(), user)))
            return null;
        return user;
    }

    private static LoginOtpChallenge.Binding binding(AuthenticationFlowContext context, String mobile, String subject) {
        var auth = context.getAuthenticationSession();
        String root = auth.getParentSession().getId();
        String tab = auth.getTabId();
        return new LoginOtpChallenge.Binding(context.getRealm().getId(), auth.getClient().getId(),
            root.length() + ":" + root + tab, subject, mobile);
    }

    private static boolean allowed(AuthenticationFlowContext context) {
        return "moon".equals(context.getRealm().getName()) &&
            "moon-web".equals(context.getAuthenticationSession().getClient().getClientId()) &&
            context.getUser() == null;
    }
    private static void clear(AuthenticationFlowContext context) {
        var auth = context.getAuthenticationSession();
        auth.removeAuthNote(MOBILE);
        auth.removeAuthNote(CHALLENGE);
    }
    private static void fail(AuthenticationFlowContext context) {
        clear(context);
        context.failure(AuthenticationFlowError.INTERNAL_ERROR,
            context.form().setAttribute("moonError", "در حال حاضر امکان ورود وجود ندارد. دوباره تلاش کنید.")
                .setAttribute("moonMobile", "").setAttribute("moonOtp", false).createForm(FORM));
    }

    private static void form(AuthenticationFlowContext context, String mobile, boolean otp, String error) {
        var form = context.form().setAttribute("moonMobile", mobile).setAttribute("moonOtp", otp);
        if (error != null) form.setAttribute("moonError", error);
        context.challenge(form.createForm(FORM));
    }
    private static boolean validMobile(String mobile) { return mobile != null && mobile.matches("09[0-9]{9}"); }
    static String normalize(String input) {
        if (input == null) return null;
        StringBuilder result = new StringBuilder();
        for (char ch : input.strip().toCharArray()) {
            if (ch >= '\u06f0' && ch <= '\u06f9') result.append((char)('0' + ch - '\u06f0'));
            else if (ch >= '\u0660' && ch <= '\u0669') result.append((char)('0' + ch - '\u0660'));
            else result.append(ch);
        }
        return result.toString();
    }

    @Override public boolean requiresUser() { return false; }
    @Override public boolean configuredFor(KeycloakSession session, RealmModel realm, UserModel user) { return false; }
    @Override public void setRequiredActions(KeycloakSession session, RealmModel realm, UserModel user) { }
    @Override public void close() { }
}
