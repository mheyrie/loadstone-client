import OTPInput from "react-otp-input";
import Button from "../../Button";
import { useState } from "react";

export default function Otp() {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <h2 className=" text-brand-white">OTP</h2>
        <small className="text-gray-500 text-md">
          We’ve sent you OTP code to your phone
        </small>
      </div>{" "}
      <h3 className="text-2xl text-gray-100 font-extrabold border-b border-gray-300 mb-4 pb-4">
        Enter OTP
      </h3>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        containerStyle="flex justify-center gap-4"
        renderInput={(props) => <input {...props} placeholder="*" />}
        inputStyle="pin-style rounded-md border border-gray-300 text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition"
        renderSeparator={<span className="hidden" />}
      />
      <Button
        content="Proceed"
        classes="primary-btn btn-md my-6 !w-full"
        type="submit"
      />
    </div>
  );
}
