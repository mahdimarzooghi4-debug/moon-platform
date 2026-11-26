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
        System.out.println("PostgreSQL OTP integration tests passed");
    }
    private static LoginOtpChallenge.Binding binding(String session,String subject,String mobile) {
        return new LoginOtpChallenge.Binding("moon","moon-web",session,subject,mobile);
    }
    private static void check(boolean condition,String label) {
        if(!condition) throw new AssertionError(label);
    }
}
