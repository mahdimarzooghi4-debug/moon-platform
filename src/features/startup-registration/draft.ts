export const registrationDraft: Record<string, string> = {};
export const registrationFiles: Partial<Record<"pitchDeck" | "logo" | "legalDocument" | "identityDocument", File>> = {};
export const registrationDetails: Record<string, string> = {};

export const registrationMobileVerification = { required: false, mobile: "", token: "" };
