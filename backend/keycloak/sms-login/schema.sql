-- Dedicated private Moon login database/schema; not the Keycloak internal schema.
CREATE TABLE IF NOT EXISTS moon_login_otp_challenge (
    scope_key char(64) PRIMARY KEY,
    binding_key char(64) NOT NULL,
    challenge_id uuid NOT NULL UNIQUE,
    expires_at timestamptz NOT NULL,
    code_digest char(64) NOT NULL,
    attempts integer NOT NULL CHECK (attempts BETWEEN 0 AND 5),
    state text NOT NULL CHECK (state IN ('PENDING_DELIVERY','READY','CONSUMED','INVALIDATED')),
    CHECK (state <> 'READY' OR attempts < 5)
);
CREATE TABLE IF NOT EXISTS moon_login_otp_send (
    challenge_id uuid PRIMARY KEY,
    realm_key char(64) NOT NULL,
    scope_key char(64) NOT NULL,
    source_key char(64) NOT NULL,
    issued_at timestamptz NOT NULL
);
CREATE INDEX IF NOT EXISTS moon_login_otp_send_realm_time ON moon_login_otp_send (realm_key, issued_at);
CREATE INDEX IF NOT EXISTS moon_login_otp_send_scope_time ON moon_login_otp_send (scope_key, issued_at);
CREATE INDEX IF NOT EXISTS moon_login_otp_send_source_time ON moon_login_otp_send (realm_key, source_key, issued_at);
