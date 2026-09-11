import { Link } from "react-router-dom";
import "./StageLifecycleFlow.css";

type StageLifecycleFlowProps = {
  mode: "approved" | "released";
  fundReleasePath?: string;
};

const approvedSteps = [
  { number: "۱", title: "ارسال گزارش", status: "انجام شده", state: "done" },
  { number: "۲", title: "ارزیابی آینه", status: "تأیید شده", state: "done" },
  { number: "۳", title: "اعلام نتیجه مرحله", status: "تأیید شده", state: "done" },
  { number: "۴", title: "آزادسازی وجه مرحله", status: "در انتظار کمیته امداد", state: "waiting" },
] as const;

const releasedSteps = [
  { number: "۱", title: "ارسال گزارش", status: "انجام شده", state: "done" },
  { number: "۲", title: "ارزیابی آینه", status: "تأیید شده", state: "done" },
  { number: "۳", title: "اعلام نتیجه مرحله", status: "تأیید شده", state: "done" },
  { number: "۴", title: "آزادسازی وجه مرحله", status: "انجام شده", state: "done" },
] as const;

export function StageLifecycleFlow({ mode, fundReleasePath }: StageLifecycleFlowProps) {
  const steps = mode === "approved" ? approvedSteps : releasedSteps;

  return (
    <div className={`startup-stage-lifecycle-flow is-${mode}`}>
      {steps.map((step, index) => {
        const content = (
          <>
            <span className="startup-stage-lifecycle-number">{step.number}</span>
            <span className="startup-stage-lifecycle-copy">
              <strong>{step.title}</strong>
              <small>{step.status}</small>
            </span>
          </>
        );

        if (mode === "approved" && index === 3 && fundReleasePath) {
          return (
            <Link
              className="startup-stage-lifecycle-step is-waiting"
              key={step.number}
              to={fundReleasePath}
            >
              {content}
            </Link>
          );
        }

        return (
          <div className={`startup-stage-lifecycle-step is-${step.state}`} key={step.number}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
