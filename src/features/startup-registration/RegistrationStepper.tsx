import React from "react";
import "./registration-stepper.css";

const labels = ["اطلاعات پایه", "محصول و تیم", "اثر اجتماعی و مدارک", "بازبینی و ارسال"];
const digits = ["۱", "۲", "۳", "۴"];

export default function RegistrationStepper({ current, stepLabels = labels }: { current: 1 | 2 | 3 | 4; stepLabels?: readonly string[] }) {
  return (
    <nav aria-label="مراحل ثبت‌نام" className="mah-startup-progress" dir="rtl">
      {stepLabels.map((label, index) => {
        const step = index + 1;
        return (
          <React.Fragment key={label}>
            {index > 0 && <div aria-hidden="true" className="mah-progress-line" data-complete={step < current} />}
            <div className="mah-progress-step" data-state={step < current ? "complete" : step === current ? "active" : "pending"} aria-current={step === current ? "step" : undefined}>
              <span className="mah-progress-number">{step < current ? "✓" : digits[index]}</span>
              <span className="mah-progress-label">{label}</span>
            </div>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
