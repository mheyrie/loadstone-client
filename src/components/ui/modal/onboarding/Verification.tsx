import BaseDirectories from "@/baseDir/baseDirectories";
import Button from "../../Button";

export default function Verification() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {" "}
      <div>
        <img src={`${BaseDirectories.ICONS_DIR}/success.png`} alt="Auth Key" />
        <h2 className="">Signup Successful</h2>
      </div>
      <small className="">We’ve sent you an email to complete your registration</small>
      <Button content="Resend Verification Email" classes="primary-btn btn" />
    </div>
  );
}
