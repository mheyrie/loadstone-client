import type { SignupFormData } from "@/types/onboarding";
import type { Control } from "react-hook-form";
import Button from "../../Button";
import { Label } from "../../label";
import { Checkbox } from "../../checkbox";
import { Link } from "react-router";
import { useState } from "react";
import SmallSpinner from "../../SmallSpinner";
import { FormFieldPassword } from "../../forms/FormFieldPassword";

export default function Password({
  control,
  error,
  setError,
  // onNext,
  // onBack,
  onSwitchToLogin,
}: {
  control: Control<SignupFormData>;
  error: string;
  setError: (error: string) => void;
  onNext: () => void;
  onBack: () => void;
  onSwitchToLogin: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setIsLoading(true);
  };

  return (
    <div>
      <h3 className="text-xl text-brand-white text-start font-semibold mb-6">
        Create an Account
      </h3>
      <div className="">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="">
          <p className="">Choose authentication method</p>
          <div className="flex gap-4">
            
          </div>
        </div>
        <div className="">
          {" "}
          <FormFieldPassword
            control={control}
            name="password"
            label="Password"
            placeholder="••••••••"
            className=""
            required
          />{" "}
          <small className="text-gray-500 mt-0">
            Your username must contain only letters (a-z) and numbers (0-9)
          </small>
        </div>
      </div>
      {isLoading ? (
        <SmallSpinner />
      ) : (
        <Button
          content="Sign Up"
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
          classes="primary-btn btn-md mb-2"
        />
      )}
      <div className="flex items-center gap-3 text-gray-500">
        <Checkbox id="terms" required />
        <Label htmlFor="terms">
          Receive our newsletter & marketing communication
        </Label>
      </div>{" "}
      <small className="text-gray-500">
        By creating av account, you agree with our{" "}
        <Link
          to="/terms-of-service"
          className="text-brand-purple hover:underline"
        >
          Terms of Service
        </Link>
      </small>
      <div className="text-sm text-center mt-6 text-brand-white">
        Already have an account?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-brand-purple hover:underline cursor-pointer"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
