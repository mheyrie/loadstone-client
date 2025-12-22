import type { SignupFormData, SignupStep } from "../../types/onboarding";
import { useState } from "react";
// import Verification from "../../components/ui/modal/onboarding/Verification";
// import Password from "../../components/ui/modal/onboarding/Password";
// import Success from "../../components/ui/modal/onboarding/Success";
import Account from "../../components/ui/modal/onboarding/Account";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import Password from "@/components/ui/modal/onboarding/Password";

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
        ? "password"
        : s === "password"
        ? "verification"
        : "success"
    );
  const back = () =>
    setStep((s) => (s === "verification" ? "password" : "account"));
  return (
    <Form form={form}>
      <form onSubmit={form.handleSubmit(next)}>
        {step === "account" && (
          <Account
            control={form.control}
            // onNext={next}
            error={error}
            setError={setError}
            onSwitchToLogin={onSwitchToLogin}
          />
        )}

        {step === "password" && (
        <Password
         control={form.control} 
          error={error}
          setError={setError}
          onNext={next}
          onBack={back}
          onSwitchToLogin={onSwitchToLogin}
        />
      )}

     {/*  {step === "verification" && (
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
      </form>
    </Form>
  );
}
