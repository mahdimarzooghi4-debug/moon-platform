-- Operator-only maintenance in the dedicated OTP database; no audit or identity data.
-- Run with ON_ERROR_STOP. Uses existing validity and longest rate window, not a new retention policy.
BEGIN;
DELETE FROM moon_login_otp_challenge WHERE expires_at <= CURRENT_TIMESTAMP;
DELETE FROM moon_login_otp_send WHERE issued_at <= CURRENT_TIMESTAMP - interval '3600 seconds';
COMMIT;
