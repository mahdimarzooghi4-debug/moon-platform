package ir.mah.identity;

import java.util.List;
import java.util.Base64;
import org.keycloak.Config;
import org.keycloak.authentication.Authenticator;
import org.keycloak.authentication.AuthenticatorFactory;
import org.keycloak.models.AuthenticationExecutionModel;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;
import org.keycloak.provider.ProviderConfigProperty;
import org.postgresql.ds.PGSimpleDataSource;

/** No realm/flow changes occur when the provider is installed. */
public final class MoonSmsAuthenticatorFactory implements AuthenticatorFactory {
    public static final String ID = "moon-sms-login";
    private volatile LoginOtpService service;

    @Override public Authenticator create(KeycloakSession session) {
        return new MoonSmsAuthenticator(this::service);
    }

    private LoginOtpService service() {
        var current = service;
        if (current != null) return current;
        synchronized (this) {
            if (service != null) return service;
            String jdbc = required("MOON_LOGIN_OTP_JDBC_URL");
            if (!jdbc.startsWith("jdbc:postgresql://"))
                throw new IllegalArgumentException("OTP database configuration invalid");
            var ds = new PGSimpleDataSource();
            ds.setURL(jdbc);
            ds.setUser(required("MOON_LOGIN_OTP_DB_USER"));
            ds.setPassword(required("MOON_LOGIN_OTP_DB_PASSWORD"));
            ds.setConnectTimeout(5);
            ds.setSocketTimeout(10);
            byte[] key = Base64.getDecoder().decode(required("MOON_LOGIN_OTP_HMAC_KEY"));
            try {
                var store = new PostgresLoginOtpStore(ds, key);
                var sender = new SmsIrLoginSender(required("MOON_SMS_IR_API_KEY"),
                    Integer.parseInt(required("MOON_SMS_IR_STARTUP_TEMPLATE_ID")),
                    required("MOON_SMS_IR_STARTUP_CODE_PARAMETER"));
                service = new LoginOtpService(store, sender);
                return service;
            } finally {
                java.util.Arrays.fill(key, (byte)0);
            }
        }
    }
    private static String required(String name) {
        String value = System.getenv(name);
        if (value == null || value.isBlank())
            throw new IllegalStateException("Missing Moon OTP configuration: " + name);
        return value;
    }

    @Override public String getId() { return ID; }
    @Override public String getDisplayType() { return "Moon SMS login (OTP)"; }
    @Override public String getReferenceCategory() { return "moon-sms-otp"; }
    @Override public String getHelpText() { return "Verify a registered mobile using SMS.ir before Keycloak issues a session."; }
    @Override public boolean isConfigurable() { return false; }
    @Override public boolean isUserSetupAllowed() { return false; }
    @Override public List<ProviderConfigProperty> getConfigProperties() { return List.of(); }
    @Override public AuthenticationExecutionModel.Requirement[] getRequirementChoices() {
        return new AuthenticationExecutionModel.Requirement[]{AuthenticationExecutionModel.Requirement.REQUIRED};
    }
    @Override public void init(Config.Scope config) { }
    @Override public void postInit(KeycloakSessionFactory factory) { }
    @Override public void close() { }
}
