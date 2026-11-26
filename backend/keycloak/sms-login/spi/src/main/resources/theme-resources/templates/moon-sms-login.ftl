<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=false displayMessage=false; section>
  <#if section = "header">
    ورود پیامکی سامانه ماه
  <#elseif section = "form">
    <div dir="rtl" lang="fa">
      <#if moonError??><p role="alert">${moonError}</p></#if>
      <form method="post" action="${url.loginAction}">
        <#if moonOtp?? && moonOtp>
          <p>اگر شماره واردشده واجد شرایط باشد، کد تأیید ارسال می‌شود. اعتبار کد ۱۲۰ ثانیه است.</p>
          <label for="moon-code">کد شش‌رقمی</label>
          <input id="moon-code" name="code" dir="ltr" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required>
          <button type="submit" name="moonAction" value="verify">تأیید و ورود</button>
          <button type="submit" name="moonAction" value="resend" formnovalidate>ارسال مجدد کد</button>
          <button type="submit" name="moonAction" value="edit" formnovalidate>ویرایش شماره</button>
        <#else>
          <label for="moon-mobile">شماره موبایل</label>
          <input id="moon-mobile" name="mobile" dir="ltr" type="tel" inputmode="tel" autocomplete="tel"
                 maxlength="11" value="${moonMobile!''}" required>
          <button type="submit" name="moonAction" value="send">دریافت کد تأیید</button>
        </#if>
        <button type="submit" name="cancel" value="true" formnovalidate>انصراف</button>
      </form>
    </div>
  </#if>
</@layout.registrationLayout>
