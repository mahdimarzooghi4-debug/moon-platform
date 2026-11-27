package ir.mah.identity;

import java.sql.DriverManager;
import java.util.ArrayList;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executors;
import java.security.SecureRandom;
import org.postgresql.ds.PGSimpleDataSource;

public final class PostgresLoginOtpStoreTest {
    public static void main(String[] args) throws Exception {
        var ds = new PGSimpleDataSource();
        ds.setURL(System.getenv("OTP_TEST_JDBC"));
        ds.setUser(System.getenv("OTP_TEST_USER"));
        ds.setPassword(System.getenv("OTP_TEST_PASSWORD"));
        byte[] key = new byte[32];
        new SecureRandom().nextBytes(key);
        var a = new PostgresLoginOtpStore(ds, key);
        var b = new PostgresLoginOtpStore(ds, key);
        var binding = binding("session1", "subject1", "09120000000");
        var issued = a.issue(binding, "source1").orElseThrow();
        var id = issued.challenge().id();
        check(!b.verify(binding,id,issued.code()), "pending delivery");
        check(a.deliveryAccepted(binding,id), "delivery accepted");
        check(!b.deliveryAccepted(binding,id), "duplicate ack");
        check(!b.verify(binding("session2","subject1","09120000000"),id,issued.code()), "other session");
        check(!b.verify(binding("session1","subject2","09120000000"),id,issued.code()), "other subject");
        check(!b.verify(binding("session1","subject1","09120000001"),id,issued.code()), "other mobile");
        check(b.issue(binding("session2","subject1","09120000000"),"source2").isEmpty(), "shared cooldown");
        var gate = new CountDownLatch(1);
        try (var pool = Executors.newFixedThreadPool(8)) {
            var futures = new ArrayList<java.util.concurrent.Future<Boolean>>();
            for (int i=0;i<8;i++) {
                var store = i%2==0?a:b;
                futures.add(pool.submit(() -> { gate.await(); return store.verify(binding,id,issued.code()); }));
            }
            gate.countDown();
            int wins=0;
            for (var future:futures) if(future.get()) wins++;
            check(wins==1, "only one committed consumption");
        }
        check(!a.verify(binding,id,issued.code()), "replay after commit");
        var failedBinding=binding("session3","subject3","09120000003");
        var failed=a.issue(failedBinding,"source3").orElseThrow();
        a.deliveryFailed(failedBinding,failed.challenge().id());
        check(!b.deliveryAccepted(failedBinding,failed.challenge().id()),"failed delivery cannot activate");
        check(!b.verify(failedBinding,failed.challenge().id(),failed.code()),"failed delivery cannot verify");
        var limited=binding("session4","subject4","09120000004");
        var first=a.issue(limited,"source4").orElseThrow();
        check(a.deliveryAccepted(limited,first.challenge().id()),"ready");
        String wrong=first.code().equals("000000")?"000001":"000000";
        for(int i=0;i<5;i++) check(!b.verify(limited,first.challenge().id(),wrong),"wrong");
        check(!a.verify(limited,first.challenge().id(),first.code()),"exhausted");
        try(var c=DriverManager.getConnection(System.getenv("OTP_TEST_JDBC"),System.getenv("OTP_TEST_USER"),System.getenv("OTP_TEST_PASSWORD"));
            var s=c.prepareStatement("UPDATE moon_login_otp_send SET issued_at=issued_at-interval '61 seconds' WHERE challenge_id=?")) {
            s.setObject(1,first.challenge().id()); s.executeUpdate();
        }
        var replacement=b.issue(limited,"source4").orElseThrow();
        check(!a.deliveryAccepted(limited,first.challenge().id()),"stale acknowledgement");
        check(!a.verify(limited,first.challenge().id(),first.code()),"replaced challenge");
        check(b.deliveryAccepted(limited,replacement.challenge().id()),"replacement ack");
        check(a.verify(limited,replacement.challenge().id(),replacement.code()),"replacement valid");
        for(int i=10;i<15;i++) {
            var next=binding("session"+i,"subject"+i,"091200000"+i);
            check(a.issue(next,"shared-source").isPresent(),"source allowance");
        }
        check(b.issue(binding("session15","subject15","09120000015"),"shared-source").isEmpty(),"source limit across accounts");
        var serviceBinding=binding("service-session","service-subject","09120000020");
        var captured=new java.util.concurrent.atomic.AtomicReference<String>();
        var entered=new CountDownLatch(1);
        var release=new CountDownLatch(1);
        try(var service=new LoginOtpService(a,(mobile,code)->{
            captured.set(code);
            check(mobile.equals(serviceBinding.mobile()),"correct service destination");
            entered.countDown();
            if (!release.await(20,java.util.concurrent.TimeUnit.SECONDS))
                throw new IllegalStateException("test gate timeout");
            return LoginSmsSender.Result.ACCEPTED;
        })) {
            var send=service.requestDelivery(serviceBinding,"service-source",true).orElseThrow();
            check(entered.await(10,java.util.concurrent.TimeUnit.SECONDS),"worker entered transport");
            check(!service.verify(serviceBinding,send,captured.get()),"pending transport cannot authenticate");
            var dummy=binding("dummy-session","moon-unresolved-subject","09120000023");
            var dummyId=service.requestDelivery(dummy,"service-source",false).orElseThrow();
            awaitState(ds,dummyId,"INVALIDATED");
            check(!service.verify(dummy,dummyId,"123456"),"unresolved denied");
            release.countDown();
            awaitState(ds,send,"READY");
            check(service.verify(serviceBinding,send,captured.get()),"service verification");
            check(!service.verify(serviceBinding,send,captured.get()),"service replay");
        } finally { release.countDown(); }
        var denied=binding("failed-session","failed-subject","09120000021");
        try(var failureService=new LoginOtpService(a,(mobile,code)->LoginSmsSender.Result.NOT_ACCEPTED)) {
            var failure=failureService.requestDelivery(denied,"service-source",true).orElseThrow();
            awaitState(ds,failure,"INVALIDATED");
            check(!failureService.verify(denied,failure,"123456"),"service failure");
        }
        var exceptional=binding("exception-session","exception-subject","09120000022");
        try(var exceptionalService=new LoginOtpService(a,(mobile,code)->{throw new IllegalStateException("synthetic failure");})) {
            var failure=exceptionalService.requestDelivery(exceptional,"service-source",true).orElseThrow();
            awaitState(ds,failure,"INVALIDATED");
        }
        var stopped=binding("stopped-session","stopped-subject","09120000024");
        var stoppedService=new LoginOtpService(a,(mobile,code)->{throw new AssertionError("closed executor dispatched");});
        stoppedService.close();
        var stoppedId=stoppedService.requestDelivery(stopped,"stopped-source",true).orElseThrow();
        awaitState(ds,stoppedId,"PENDING_DELIVERY");
        check(!stoppedService.verify(stopped,stoppedId,"123456"),"rejected task cannot authenticate");
        check(stoppedService.requestDelivery(stopped,"stopped-source",true).isEmpty(),"rejected task preserves cooldown");
        var expiredPending = binding("cleanup-pending","cleanup-subject-p","09120000030");
        var expiredReady = binding("cleanup-ready","cleanup-subject-r","09120000031");
        var retainedReady = binding("cleanup-live","cleanup-subject-l","09120000032");
        var pending = a.issue(expiredPending,"cleanup-source").orElseThrow();
        var ready = a.issue(expiredReady,"cleanup-source").orElseThrow();
        var live = a.issue(retainedReady,"cleanup-source").orElseThrow();
        check(a.deliveryAccepted(expiredReady,ready.challenge().id()),"cleanup ready setup");
        check(a.deliveryAccepted(retainedReady,live.challenge().id()),"cleanup live setup");
        try (var c=ds.getConnection();
             var s=c.prepareStatement("UPDATE moon_login_otp_challenge SET expires_at=clock_timestamp()-interval '1 second' WHERE challenge_id IN (?,?)")) {
            s.setObject(1,pending.challenge().id()); s.setObject(2,ready.challenge().id());
            check(s.executeUpdate()==2,"expired fixture");
        }
        check(b.issue(expiredPending,"cleanup-source").isEmpty(),"cleanup does not reset resend cooldown");
        check(!a.deliveryAccepted(expiredPending,pending.challenge().id()),"late ack after cleanup denied");
        check(!b.verify(expiredReady,ready.challenge().id(),ready.code()),"expired ready after cleanup denied");
        try (var c=ds.getConnection();
             var s=c.prepareStatement("SELECT count(*) FROM moon_login_otp_challenge WHERE challenge_id IN (?,?)")) {
            s.setObject(1,pending.challenge().id()); s.setObject(2,ready.challenge().id());
            try(var rows=s.executeQuery()) { check(rows.next() && rows.getInt(1)==0,"expired scopes physically removed"); }
        }
        try (var c=ds.getConnection();
             var s=c.prepareStatement("SELECT count(*) FROM moon_login_otp_send WHERE challenge_id IN (?,?)")) {
            s.setObject(1,pending.challenge().id()); s.setObject(2,ready.challenge().id());
            try(var rows=s.executeQuery()) { check(rows.next() && rows.getInt(1)==2,"rate history retained"); }
        }
        check(b.verify(retainedReady,live.challenge().id(),live.code()),"unexpired challenge retained");
        System.out.println("PostgreSQL OTP integration tests passed");
    }
    private static void awaitState(PGSimpleDataSource ds, java.util.UUID id, String expected) throws Exception {
        long deadline=System.nanoTime()+java.util.concurrent.TimeUnit.SECONDS.toNanos(15);
        do {
            try(var c=ds.getConnection();
                var s=c.prepareStatement("SELECT state FROM moon_login_otp_challenge WHERE challenge_id=?")) {
                s.setObject(1,id);
                try(var r=s.executeQuery()) { if(r.next() && expected.equals(r.getString(1))) return; }
            }
            Thread.sleep(25);
        } while(System.nanoTime()<deadline);
        throw new AssertionError("delivery did not reach "+expected);
    }
    private static LoginOtpChallenge.Binding binding(String session,String subject,String mobile) {
        return new LoginOtpChallenge.Binding("moon","moon-web",session,subject,mobile);
    }
    private static void check(boolean condition,String label) {
        if(!condition) throw new AssertionError(label);
    }
}
