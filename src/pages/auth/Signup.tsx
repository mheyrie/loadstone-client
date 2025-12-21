import type { SignupFormData, SignupStep } from "../../types/onboarding";
import { useState } from "react";
// import Verification from "../../components/ui/modal/onboarding/Verification";
// import Personal from "../../components/ui/modal/onboarding/Personal";
// import Success from "../../components/ui/modal/onboarding/Success";
import Account from "../../components/ui/modal/onboarding/Account";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

export default function Signup({
  // onClose,
  onSwitchToLogin,
}: {
  onClose: () => void;
  onSwitchToLogin: () => void;
}) {
  const [step, setStep] = useState<SignupStep>("account");
  const [error, setError] = useState("");
  const form = useForm<SignupFormData>({
    defaultValues: {
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
    },
  });

  const next = () =>
    setStep((s) =>
      s === "account"
        ? "personal"
        : s === "personal"
        ? "verification"
        : "success"
    );
  // const back = () =>
  //   setStep((s) => (s === "verification" ? "personal" : "account"));
  return (
    <Form {...form}>
      <div className=" ">
        {step === "account" && (
          <Account
            control={form.control}
            onNext={next}
            error={error}
            setError={setError}
            onSwitchToLogin={onSwitchToLogin}
          />
        )}

        {/* {step === "personal" && (
        <Personal
          data={data}
          setData={setData}
          error={error}
          setError={setError}
          onNext={next}
          onBack={back}
        />
      )}

      {step === "verification" && (
        <Verification
          data={data}
          setData={setData}
          error={error}
          setError={setError}
          onNext={next}
          onBack={back}
        />
      )} */}

        {/* {step === "success" && <Success onClose={onClose} />} */}
      </div>
    </Form>
  );
}
