# Build context: backend/keycloak/sms-login after the Maven package step.
# This candidate image installs the provider but does not bind an authentication flow.
FROM python:3.13-alpine AS font-assets
WORKDIR /work
COPY package-login-fonts.py .
COPY target/moon-sms-login-1.0.0.jar moon-sms-login.jar
RUN python package-login-fonts.py moon-sms-login.jar

FROM quay.io/keycloak/keycloak:26.7.3 AS builder
ENV KC_DB=postgres KC_HEALTH_ENABLED=true KC_HTTP_RELATIVE_PATH=/identity
COPY --from=font-assets --chown=1000:0 /work/moon-sms-login.jar /opt/keycloak/providers/moon-sms-login.jar
RUN /opt/keycloak/bin/kc.sh build
FROM quay.io/keycloak/keycloak:26.7.3
ENV KC_DB=postgres KC_HEALTH_ENABLED=true KC_HTTP_RELATIVE_PATH=/identity
COPY --from=builder /opt/keycloak/ /opt/keycloak/
