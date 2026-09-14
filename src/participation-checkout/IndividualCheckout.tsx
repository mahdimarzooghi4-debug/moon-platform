import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CheckoutSidebar from "./CheckoutSidebar";
import ParticipantInfoCard, { type ParticipantIdentity } from "./ParticipantInfoCard";
import CheckoutFormCards from "./CheckoutFormCards";
import { CheckoutFooter, CheckoutHeader } from "./CheckoutChrome";
import { parseAmount } from "./checkout-utils";
import { createIndividualParticipation } from "../shared/individual-participations";

const projectMeta: Record<string, { title: string; startupName: string }> = {
  "sustainable-agriculture": { title: "اشتغال زنان روستایی", startupName: "راهکار سبز" },
  "rural-women": { title: "اشتغال زنان روستایی", startupName: "راهکار سبز" },
  "rural-women-employment": { title: "اشتغال زنان روستایی", startupName: "راهکار سبز" },
};

export default function IndividualCheckout() {
  const navigate = useNavigate();
  const { projectId = "sustainable-agriculture" } = useParams();
  const [searchParams] = useSearchParams();
  const amount = useMemo(() => parseAmount(searchParams.get("amount")), [searchParams]);
  const [participant, setParticipant] = useState<ParticipantIdentity>({ mobile: "", name: "", verified: false });
  const createdParticipationId = useRef("");

  const projectPath = `/projects/${projectId}`;
  const companyPath = `/panel/company/projects/${projectId}/participate`;
  const meta = projectMeta[projectId] ?? { title: projectId, startupName: "" };

  const handleParticipantChange = useCallback((identity: ParticipantIdentity) => {
    setParticipant(identity);
  }, []);

  const handlePay = () => {
    if (!participant.verified || !/^09\d{9}$/.test(participant.mobile)) {
      window.alert("لطفاً قبل از ادامه شماره موبایل را تأیید کنید.");
      return;
    }

    let participationId = createdParticipationId.current;
    if (!participationId) {
      const record = createIndividualParticipation({
        participantName: participant.name,
        mobile: participant.mobile,
        projectId,
        projectTitle: meta.title,
        startupName: meta.startupName,
        amount,
      });
      participationId = record.id;
      createdParticipationId.current = record.id;
    }

    navigate(`/projects/${projectId}/participate/redirecting?type=individual&amount=${amount}&participationId=${encodeURIComponent(participationId)}`);
  };

  return (
    <div className="main-container mx-auto flex w-[1440px] max-w-full flex-col items-center bg-[#fcfbf8] text-right text-[#17324d]" dir="rtl">
      <CheckoutHeader onBack={() => navigate(projectPath)} />
      <main className="flex w-full items-start gap-8 px-[120px] pb-24" dir="ltr">
        <CheckoutSidebar amount={amount} onProject={() => navigate(projectPath)} onCompany={() => navigate(companyPath)} />
        <div className="flex w-[798px] shrink-0 flex-col gap-6 text-right" dir="rtl">
          <ParticipantInfoCard onChange={handleParticipantChange} />
          <CheckoutFormCards
            amount={amount}
            onEditAmount={() => navigate(projectPath)}
            onHowItWorks={() => navigate("/how-it-works")}
            onTerms={() => navigate("/terms")}
            onPrivacy={() => navigate("/privacy-policy")}
            onPay={handlePay}
            onBack={() => navigate(projectPath)}
          />
        </div>
      </main>
      <CheckoutFooter navigateTo={(path) => navigate(path)} />
    </div>
  );
}
