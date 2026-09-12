import React, { useMemo } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CheckoutSidebar from "./CheckoutSidebar";
import ParticipantInfoCard from "./ParticipantInfoCard";
import CheckoutFormCards from "./CheckoutFormCards";
import { CheckoutFooter, CheckoutHeader } from "./CheckoutChrome";
import { parseAmount } from "./checkout-utils";

export default function IndividualCheckout() {
  const navigate = useNavigate();
  const { projectId = "sustainable-agriculture" } = useParams();
  const [searchParams] = useSearchParams();
  const amount = useMemo(() => parseAmount(searchParams.get("amount")), [searchParams]);

  const projectPath = `/projects/${projectId}`;
  const companyPath = `/panel/company/projects/${projectId}/participate`;
  const paymentPath = `/projects/${projectId}/participate/redirecting?type=individual&amount=${amount}`;

  return (
    <div className="main-container mx-auto flex w-[1440px] max-w-full flex-col items-center bg-[#fcfbf8] text-right text-[#17324d]" dir="rtl">
      <CheckoutHeader onBack={() => navigate(projectPath)} />
      <main className="flex w-full items-start gap-8 px-[120px] pb-24" dir="ltr">
        <CheckoutSidebar amount={amount} onProject={() => navigate(projectPath)} onCompany={() => navigate(companyPath)} />
        <div className="flex w-[798px] shrink-0 flex-col gap-6 text-right" dir="rtl">
          <ParticipantInfoCard />
          <CheckoutFormCards
            amount={amount}
            onEditAmount={() => navigate(projectPath)}
            onHowItWorks={() => navigate("/how-it-works")}
            onTerms={() => navigate("/terms")}
            onPrivacy={() => navigate("/privacy")}
            onPay={() => navigate(paymentPath)}
            onBack={() => navigate(projectPath)}
          />
        </div>
      </main>
      <CheckoutFooter navigateTo={(path) => navigate(path)} />
    </div>
  );
}
