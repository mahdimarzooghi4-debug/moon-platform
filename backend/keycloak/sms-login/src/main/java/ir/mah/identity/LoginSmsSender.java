package ir.mah.identity;

/** Server-only SMS transport. ACCEPTED means the provider accepted the request, not that a handset received it. */
public interface LoginSmsSender {
    enum Result { ACCEPTED, NOT_ACCEPTED }
    Result send(String mobile, String code) throws InterruptedException;
}
