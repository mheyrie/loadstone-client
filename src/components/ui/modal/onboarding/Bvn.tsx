import BaseDirectories from "@/baseDir/baseDirectories";
import Button from "../../Button";

export default function Bvn() {
  return (
   <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <img src={`${BaseDirectories.ICONS_DIR}/call.png`} alt="Auth Key" />
        <small className="text-gray-500 text-md">Email verification Successful</small>
      </div>{" "}
      <h3 className="text-2xl text-gray-100 font-extrabold">
        Enter Your Phone Number
      </h3>
      <p className="text-gray-500 mt-6 flex items-start!">
        Mobile number
      </p>
      
      <Button
        content="Validate BVN"
        classes="primary-btn btn-md my-6 !w-full"
        type="submit"
      />
    </div>
  )
}