
import BaseDirectories from "@/baseDir/baseDirectories";
import Button from "../../Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNo() {
  this.state = {
    phone: "",
  };
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <img src={`${BaseDirectories.ICONS_DIR}/mail2.png`} alt="Auth Key" />
        <small className="text-gray-500">Email verification Successful</small>
      </div>{" "}
      <h2 className="text-2xl text-gray-100 font-extrabold">
        Enter Your Phone Number
      </h2>
      <p className="text-gray-500 mb-6 max-w-104 flex text-center">
        Mobile number
      </p>
      <PhoneInput
        country={"ng"}
        value={this.state.phone}
        onChange={(phone) => this.setState({ phone })}
      />
      <Button
        content="Proceed"
        classes="primary-btn btn-md my-6 !w-full"
        type="submit"
      />
    </div>
  );
}
