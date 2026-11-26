# Build context: backend/keycloak/sms-login after the Maven package step.
# This candidate image installs the provider but does not bind an authentication flow.
FROM quay.io/keycloak/keycloak:26.7.3 AS builder
ENV KC_DB=postgres KC_HEALTH_ENABLED=true KC_HTTP_RELATIVE_PATH=/identity
COPY --chown=1000:0 target/moon-sms-login-1.0.0.jar /opt/keycloak/providers/moon-sms-login.jar
RUN /opt/keycloak/bin/kc.sh build
FROM quay.io/keycloak/keycloak:26.7.3
ENV KC_DB=postgres KC_HEALTH_ENABLED=true KC_HTTP_RELATIVE_PATH=/identity
COPY --from=builder /opt/keycloak/ /opt/keycloak/
