import type { Sign } from "crypto";
import type { SignupFormData, SignupStep } from "../../types/onboarding";
import { useState } from "react";
import Account from "../../components/ui/modal/onboarding/Account";

const initialData: SignupFormData = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  dateOfBirth: "",
  businessName: "",
  businessType: "",
  verificationCode: "",
};
export default function Signup({
  onClose,
  onSwitchToLogin,
}: {
  onClose: () => void;
  onSwitchToLogin: () => void;
}) {
  const [step, setStep] = useState<SignupStep>("account");
  const [data, setData] = useState<SignupFormData>(initialData);
  const [error, setError] = useState("");

  const next = () =>
    setStep((s) =>
      s === "account"
        ? "personal"
        : s === "personal"
        ? "verification"
        : "success"
    );
  const back = () =>
    setStep((s) => (s === "verification" ? "personal" : "account"));
  return (
    <div className="w-full max-w-md rounded-xl bg-amber-500 p-6">
      {step === "account" && (
        <Account
          data={data}
          setData={setData}
          onNext={next}
          error={error}
          setError={setError}
          onSwitchToLogin={onSwitchToLogin}
        />
      )}
    </div>
  );
}
