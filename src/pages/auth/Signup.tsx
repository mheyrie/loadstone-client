import {
  SIGNUP_FLOW,
  type AuthOption,
  type SignupFormData,
} from "../../types/onboarding";
import { useState } from "react";
import Verification from "../../components/ui/modal/onboarding/Verification";
// import Password from "../../components/ui/modal/onboarding/Password";
// import Success from "../../components/ui/modal/onboarding/Success";
import Account from "../../components/ui/modal/onboarding/Account";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import AuthMethod from "@/components/ui/modal/onboarding/AuthMethod";
import PhoneNo from "@/components/ui/modal/onboarding/PhoneNo";
import Otp from "@/components/ui/modal/onboarding/Otp";

export default function Signup({
  // onClose,
  onSwitchToLogin,
}: {
  onClose: () => void;
  onSwitchToLogin: () => void;
}) {
  const [authMethod, setAuthMethod] = useState<AuthOption>("password");
  const [stepIndex, setStepIndex] = useState(0);
  const step = SIGNUP_FLOW[stepIndex];
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
   setStepIndex((index)=> Math.min(index + 1, SIGNUP_FLOW.length -1))
  // const back = () =>
  //   setStep((s) => (s === "verification" ? "password" : "account"));
  return (
    <>
      <title> Signup - Loadstone Financial</title>
      <meta name="description" content="Signup to Loadstone" />
      <Form form={form}>
        <form onSubmit={form.handleSubmit(next)} data-aos="fade-right">
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
            <AuthMethod
              control={form.control}
              value={authMethod}
              onChange={setAuthMethod}
              error={error}
              setError={setError}
              onSwitchToLogin={onSwitchToLogin}
            />
          )}

          {step === "verification" && (
            <Verification
            // control={form.control}
            // error={error}
            // setError={setError}
            />
          )}
          {step === "phoneVerification" && <PhoneNo />}
          {step === "pinSetup" && <Otp />}

          {/* {step === "success" && <Success onClose={onClose} />} */}
        </form>
      </Form>
    </>
  );
}
