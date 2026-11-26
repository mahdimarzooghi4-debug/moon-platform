package ir.mah.identity;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonParser;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.ByteBuffer;
import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Flow;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

/** SMS.ir verify adapter, using the same request contract as the existing Moon backend. */
public final class SmsIrLoginSender implements LoginSmsSender {
    private static final URI ENDPOINT = URI.create("https://api.sms.ir/v1/send/verify");
    private static final int MAX_RESPONSE = 16384;
    private static final ObjectMapper JSON = new ObjectMapper()
        .enable(JsonParser.Feature.STRICT_DUPLICATE_DETECTION)
        .enable(DeserializationFeature.FAIL_ON_TRAILING_TOKENS);
    private final HttpClient client;
    private final URI endpoint;
    private final Duration timeout;
    private final String apiKey;
    private final int templateId;
    private final String parameter;

    public SmsIrLoginSender(String apiKey, int templateId, String parameter) {
        this(apiKey, templateId, parameter, ENDPOINT, Duration.ofSeconds(15));
    }

    // Package-private test seam. Production configuration cannot override the destination.
    SmsIrLoginSender(String apiKey, int templateId, String parameter, URI endpoint, Duration timeout) {
        if (apiKey == null || !apiKey.matches("[!-~]+") || templateId <= 0 ||
            parameter == null || !parameter.matches("[A-Za-z][A-Za-z0-9_]{0,63}"))
            throw new IllegalArgumentException("SMS.ir configuration is invalid");
        if (timeout == null || timeout.isNegative() || timeout.isZero())
            throw new IllegalArgumentException("SMS.ir timeout is invalid");
        this.apiKey = apiKey;
        this.templateId = templateId;
        this.parameter = parameter;
        this.endpoint = Objects.requireNonNull(endpoint);
        this.timeout = timeout;
        this.client = HttpClient.newBuilder().followRedirects(HttpClient.Redirect.NEVER)
            .connectTimeout(timeout).build();
    }

    @Override public Result send(String mobile, String code) throws InterruptedException {
        if (mobile == null || !mobile.matches("09[0-9]{9}") || code == null || !code.matches("[0-9]{6}"))
            return Result.NOT_ACCEPTED;
        CompletableFuture<HttpResponse<byte[]>> pending = null;
        try {
            byte[] body = JSON.writeValueAsBytes(Map.of("mobile", mobile, "templateId", templateId,
                "parameters", List.of(Map.of("name", parameter, "value", code))));
            var request = HttpRequest.newBuilder(endpoint).timeout(timeout)
                .header("X-API-KEY", apiKey).header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofByteArray(body)).build();
            pending = client.sendAsync(request, ignored -> new BoundedBody());
            var response = pending.get(timeout.toMillis(), TimeUnit.MILLISECONDS);
            if (response.statusCode() < 200 || response.statusCode() >= 300)
                return Result.NOT_ACCEPTED;
            var node = JSON.readTree(response.body());
            var status = node == null ? null : node.get("status");
            return node != null && node.isObject() && status != null &&
                status.isIntegralNumber() && status.canConvertToInt() && status.intValue() == 1
                ? Result.ACCEPTED : Result.NOT_ACCEPTED;
        } catch (IOException | ExecutionException | TimeoutException | RuntimeException e) {
            // Do not log request, response, exception, mobile, API key or OTP.
            return Result.NOT_ACCEPTED;
        } finally {
            if (pending != null && !pending.isDone()) pending.cancel(true);
        }
    }

    private static final class BoundedBody implements HttpResponse.BodySubscriber<byte[]> {
        private final CompletableFuture<byte[]> result = new CompletableFuture<>();
        private final java.io.ByteArrayOutputStream bytes = new java.io.ByteArrayOutputStream();
        private Flow.Subscription subscription;
        @Override public CompletionStage<byte[]> getBody() { return result; }
        @Override public void onSubscribe(Flow.Subscription value) {
            subscription = value;
            value.request(1);
        }
        @Override public void onNext(List<ByteBuffer> chunks) {
            for (var chunk : chunks) {
                if (chunk.remaining() > MAX_RESPONSE - bytes.size()) {
                    subscription.cancel();
                    result.completeExceptionally(new IOException("SMS response too large"));
                    return;
                }
                byte[] part = new byte[chunk.remaining()];
                chunk.get(part);
                bytes.writeBytes(part);
            }
            subscription.request(1);
        }
        @Override public void onError(Throwable error) { result.completeExceptionally(error); }
        @Override public void onComplete() { result.complete(bytes.toByteArray()); }
    }
}
