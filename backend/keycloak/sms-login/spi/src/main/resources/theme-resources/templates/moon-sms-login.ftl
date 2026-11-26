<#-- Moon's existing OTP visual design, rendered inside the real Keycloak session.
     Keep all form actions, field names and server-side validation unchanged. -->
<#assign otp = moonOtp?? && moonOtp>
<!doctype html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ورود امن | سامانه ماه</title>
  <link rel="stylesheet" href="${url.resourcesPath}/moon-fonts/fonts.css">
  <style>
    :root { color-scheme:light; font-family:Vazirmatn,Tahoma,Arial,sans-serif; color:#1a202c; background:#f7fafc; }
    * { box-sizing:border-box; }
    body { margin:0; min-height:100vh; min-height:100dvh; display:flex; flex-direction:column; }
    button,input { font:inherit; }
    .moon-header { min-height:80px; padding:16px clamp(20px,8.3vw,120px); background:white; border-bottom:1px solid #e5ebf2; display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .moon-logo { width:137px; height:46px; object-fit:contain; }
    .moon-back { color:#4a5568; font-size:14px; text-decoration:none; }
    .moon-main { flex:1; display:flex; align-items:flex-start; justify-content:center; padding:48px 16px 32px; }
    .moon-card { width:100%; max-width:540px; padding:36px; border:1px solid #e4ebf1; border-radius:20px; background:#fff; box-shadow:0 4px 10px rgba(0,0,0,.04); text-align:center; }
    .moon-icon { width:64px; height:64px; margin:0 auto 20px; border-radius:50%; background:#eaf5fd; display:grid; place-items:center; color:#1476b9; }
    h1 { font-size:24px; line-height:1.6; margin:0 0 8px; font-weight:700; }
    p { margin:0; line-height:1.9; }
    .moon-muted { font-size:14px; color:#526275; }
    .moon-form { display:grid; gap:20px; margin-top:24px; }
    .moon-field { display:grid; gap:8px; text-align:right; }
    label { font-size:14px; font-weight:600; color:#2d3748; }
    input { width:100%; min-width:0; min-height:50px; padding:12px 16px; border:1px solid #cbd5e1; border-radius:12px; background:white; color:#1a202c; }
    #moon-mobile { text-align:left; font-variant-numeric:tabular-nums; }
    #moon-code { height:64px; text-align:center; font-family:monospace; font-size:clamp(22px,5vw,28px); font-weight:700; letter-spacing:.48em; padding-inline-start:calc(12px + .48em); font-variant-numeric:tabular-nums; }
    input::placeholder { color:#748397; opacity:1; }
    button { cursor:pointer; }
    button:focus-visible,input:focus-visible,a:focus-visible { outline:3px solid #1476b9; outline-offset:3px; }
    .moon-primary { min-height:50px; width:100%; border:0; border-radius:12px; padding:12px 16px; font-size:16px; font-weight:700; color:white; background:linear-gradient(100deg,#126ba8,#087e69); box-shadow:0 4px 6px rgba(32,148,227,.18); }
    .moon-primary:hover { filter:brightness(.94); }
    .moon-link { border:0; padding:8px; background:transparent; color:#126ba8; font-size:14px; font-weight:600; text-decoration:underline; text-underline-offset:3px; }
    .moon-cancel { color:#526275; }
    .moon-actions { display:flex; justify-content:center; flex-wrap:wrap; gap:8px 16px; }
    .moon-alert { border:1px solid #f0b8b8; border-radius:10px; background:#fff5f5; color:#a02626; font-size:14px; padding:12px; margin-top:18px; }
    .moon-safety { margin-top:22px; padding-top:18px; border-top:1px solid #e4ebf1; color:#526275; font-size:12px; }
    .moon-footer { padding:16px 20px 32px; text-align:center; font-size:12px; color:#526275; }
    .moon-footer a { color:#526275; text-underline-offset:3px; }
    @media(max-width:480px) { .moon-header { min-height:68px; padding:12px 16px; } .moon-logo { width:116px; height:40px; } .moon-main { padding-top:24px; } .moon-card { padding:24px 18px; } h1 { font-size:21px; } }
  </style>
</head>
<body>
  <header class="moon-header">
    <img class="moon-logo" src="data:image/png;base64,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" alt="سامانه ماه">
    <span class="moon-back">ورود امن با کد یک‌بارمصرف</span>
  </header>
  <main class="moon-main">
    <section class="moon-card" aria-labelledby="moon-title">
      <div class="moon-icon" aria-hidden="true">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      </div>
      <#if otp>
        <h1 id="moon-title">کد تأیید را وارد کنید</h1>
        <p class="moon-muted">اگر شماره واردشده واجد شرایط باشد، کد تأیید ارسال می‌شود. اعتبار کد ۱۲۰ ثانیه است.</p>
        <#if moonMobile?? && moonMobile?length == 11>
          <p class="moon-muted" dir="ltr"><bdi>${moonMobile?substring(0,4)}•••${moonMobile?substring(7,11)}</bdi></p>
        </#if>
      <#else>
        <h1 id="moon-title">ورود پیامکی سامانه ماه</h1>
        <p class="moon-muted">شماره موبایل حساب کاربری خود را برای دریافت کد تأیید بررسی کنید.</p>
      </#if>
      <#if moonError??><p class="moon-alert" role="alert">${moonError}</p></#if>
      <form class="moon-form" method="post" action="${url.loginAction}">
        <#if otp>
          <div class="moon-field">
            <label for="moon-code">کد شش‌رقمی</label>
            <input id="moon-code" name="code" dir="ltr" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="------" required>
          </div>
          <button class="moon-primary" type="submit" name="moonAction" value="verify">تأیید و ورود</button>
          <div class="moon-actions">
            <button class="moon-link" type="submit" name="moonAction" value="resend" formnovalidate>ارسال مجدد کد</button>
            <button class="moon-link" type="submit" name="moonAction" value="edit" formnovalidate>ویرایش شماره</button>
          </div>
        <#else>
          <div class="moon-field">
            <label for="moon-mobile">شماره موبایل</label>
            <input id="moon-mobile" name="mobile" dir="ltr" type="tel" inputmode="tel" autocomplete="tel" maxlength="11" value="${moonMobile!''}" placeholder="09xxxxxxxxx" required>
          </div>
          <button class="moon-primary" type="submit" name="moonAction" value="send">دریافت کد تأیید</button>
        </#if>
        <button class="moon-link moon-cancel" type="submit" name="cancel" value="true" formnovalidate>انصراف و بازگشت به ورود</button>
      </form>
      <p class="moon-safety">کد تأیید محرمانه است؛ آن را در اختیار دیگران قرار ندهید.</p>
    </section>
  </main>
  <footer class="moon-footer">
    <p>ورود شما با کد یک‌بارمصرف و بدون رمز عبور انجام می‌شود.</p>
    <p><a href="/privacy-policy">حریم خصوصی</a> &nbsp; | &nbsp; <a href="/terms">قوانین و مقررات</a></p>
  </footer>
</body>
</html>
