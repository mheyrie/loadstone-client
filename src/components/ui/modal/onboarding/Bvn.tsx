import BaseDirectories from "@/baseDir/baseDirectories";
import Button from "../../Button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../input";

export default function Bvn() {
  return (
   <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col items-center mb-6 md:mt-12">
        <img src={`${BaseDirectories.ICONS_DIR}/call.png`} alt="Auth Key" />
        <p className="text-gray-500 text-md">Phone verification Successful</p>
      </div>{" "}
      <h3 className="text-2xl text-gray-100 font-extrabold">
      BVN VALIDATION
      </h3>
      <p className="text-gray-500 mt-6 flex items-start!">
      Industry regulation requires us to collect this information to verify your identity.
      </p>
      <div className="w-full">
        <Label className="text-gray-500 mt-6 mb-2 flex items-start!">BVN (Bank Verification Number) <span className="text-red-500">*</span></Label>
        <Input type="text" placeholder="Enter your bank verification number" className="w-80 md:w-96" />
      </div>
      <div className="w-full">
        <Label className="text-gray-500 mt-6 mb-2 flex items-start!">NIN (National Identity Number *<span className="text-red-500">*</span></Label>
        <Input type="text" placeholder="National Identity number" className="w-80 md:w-96" />
      </div>
      <Button
        content="Validate BVN"
        classes="primary-btn btn-md my-6 !w-full"
        type="button"
      />
    </div>
  )
}