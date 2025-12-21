import Button from "../../Button";
import { Checkbox } from "../../checkbox";
import { FormFieldText } from "../../forms/FormFieldText";
import { Label } from "../../label";

export default function Account({
  control,
  error,
  setError,
  onNext,
  onSwitchToLogin,
}) {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl text-brand-white text-start font-semibold mb-6">Create an Account</h3>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="space-y-4 my-4">
        <div className="flex justify-between gap-4">
          {" "}
          <FormFieldText
            control={control}
            name="firstName"
            label="First Name"
            placeholder="John" className=""
          />
          <FormFieldText
            control={control}
            name="lastName"
            label="Last Name"
            placeholder="Doe"
          />
        </div>

        <FormFieldText
          control={control}
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
        />
        <FormFieldText
          control={control}
          name="userName"
          label="Username"
          placeholder="johndoe"
        />
      </div>
      {/* <FormFieldText control={control} name="password" label="Password" type="password" placeholder="••••••••" />
      <FormFieldText control={control} name="confirmPassword" label="Confirm Password" type="password" placeholder="••••••••" /> */}
      <Button content="Next" onClick={onNext} classes="primary-btn" />
      <div className="flex items-center gap-3 text-gray-500">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>{" "}
      <div className="text-sm text-center mt-4 text-brand-white">
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="text-brand-purple hover:underline cursor-pointer">
          Log in
        </button>
      </div>
    </div>
  );
}
