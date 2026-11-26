package ir.mah.identity;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;

public final class SmsIrLoginSenderTest {
    private record Reply(int status, String body, long delay) {}
    public static void main(String[] args) throws Exception {
        var reply = new AtomicReference<>(new Reply(200, "{\"status\":1,\"data\":{}}",0));
        var calls = new AtomicInteger();
        var redirected = new AtomicInteger();
        var correctRequest = new AtomicReference<Boolean>(false);
        var server = HttpServer.create(new InetSocketAddress("127.0.0.1",0),0);
        server.createContext("/verify", exchange -> {
            try {
                calls.incrementAndGet();
                var body = new ObjectMapper().readTree(exchange.getRequestBody());
                correctRequest.set(exchange.getRequestMethod().equals("POST") &&
                    "fake-ci-key".equals(exchange.getRequestHeaders().getFirst("X-API-KEY")) &&
                    body.path("mobile").asText().equals("09120000000") &&
                    body.path("templateId").asInt() == 743974 &&
                    body.path("parameters").get(0).path("name").asText().equals("CODE") &&
                    body.path("parameters").get(0).path("value").asText().equals("012345"));
                var r = reply.get();
                if (r.delay()>0) try { Thread.sleep(r.delay()); }
                    catch (InterruptedException e) { Thread.currentThread().interrupt(); return; }
                if(r.status()==302) exchange.getResponseHeaders().set("Location","/redirected");
                var bytes=r.body().getBytes(StandardCharsets.UTF_8);
                exchange.sendResponseHeaders(r.status(),bytes.length);
                exchange.getResponseBody().write(bytes);
            } finally { exchange.close(); }
        });
        server.createContext("/redirected", exchange -> { redirected.incrementAndGet(); exchange.close(); });
        server.start();
        try {
            URI uri=URI.create("http://127.0.0.1:"+server.getAddress().getPort()+"/verify");
            var sender=new SmsIrLoginSender("fake-ci-key",743974,"CODE",uri,Duration.ofSeconds(3));
            check(sender.send("09120000000","012345")==LoginSmsSender.Result.ACCEPTED,"accepted");
            check(correctRequest.get(),"exact request contract");
            for (var r:new Reply[]{
                new Reply(200,"{\"status\":0}",0),new Reply(401,"{\"status\":1}",0),
                new Reply(500,"{\"status\":1}",0),new Reply(200,"not json",0),
                new Reply(200,"{\"status\":\"1\"}",0),new Reply(200,"{\"status\":1.0}",0),
                new Reply(200,"{\"status\":4294967297}",0),new Reply(200,"{}",0),
                new Reply(200,"{\"status\":1,\"status\":0}",0),
                new Reply(200,"{\"status\":1} {}",0),new Reply(200,"{\"status\":1,\"data\":\""+"x".repeat(20000)+"\"}",0),
                new Reply(302,"{\"status\":1}",0)}) {
                reply.set(r);
                check(sender.send("09120000000","012345")==LoginSmsSender.Result.NOT_ACCEPTED,"reject invalid or failed response");
            }
            check(redirected.get()==0,"no redirect");
            int before=calls.get();
            check(sender.send("0912000000x","012345")==LoginSmsSender.Result.NOT_ACCEPTED,"invalid mobile");
            check(sender.send("09120000000","12345")==LoginSmsSender.Result.NOT_ACCEPTED,"invalid code");
            check(calls.get()==before,"no invalid requests");
            reply.set(new Reply(200,"{\"status\":1}",1200));
            var shortTimeout=new SmsIrLoginSender("fake-ci-key",743974,"CODE",uri,Duration.ofMillis(200));
            check(shortTimeout.send("09120000000","012345")==LoginSmsSender.Result.NOT_ACCEPTED,"timeout fails closed");
            try { new SmsIrLoginSender("",743974,"CODE"); throw new AssertionError("missing key accepted"); }
            catch (IllegalArgumentException expected) { }
            try { new SmsIrLoginSender("fake-ci-key",0,"CODE"); throw new AssertionError("invalid template accepted"); }
            catch (IllegalArgumentException expected) { }
        } finally { server.stop(0); }
        System.out.println("SMS.ir transport contract tests passed");
    }
    private static void check(boolean condition,String label) {
        if(!condition) throw new AssertionError(label);
    }
}
