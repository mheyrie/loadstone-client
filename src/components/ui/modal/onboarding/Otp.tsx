import OTPInput from "react-otp-input";
import Button from "../../Button";
import { useState } from "react";

export default function Otp() {
   const [otp, setOtp] = useState('');
  return (
     <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col items-center mb-6 md:mt-12">
      <h3 className="">OTP</h3>
        <small className="text-gray-500 text-md">We’ve sent you OTP code to your phone</small>
      </div>{" "}
      <h3 className="text-2xl text-gray-100 font-extrabold">
        Enter OTP
      </h3>
     <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
     
      <Button
        content="Proceed"
        classes="primary-btn btn-md my-6 !w-full"
        type="submit"
      />
    </div>
  )
}