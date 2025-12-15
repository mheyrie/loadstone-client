import {  useState } from "react";
import BaseDirectories from "../../../baseDir/baseDirectories";
import Button from "../Button";
import { X } from "lucide-react";

export default function SessionConflictModal() {
    const [isOpen, setIsOpen] = useState(true);
  
const closeModal = () => {
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (  
    <div className="">
      <X className="" size={2} onClick={closeModal} />
      <div className="">
        {" "}
        <img src={`${BaseDirectories.ICONS_DIR}/alert.png`} alt="Alert icon" />
      </div>

      <div className="">
        <h4 className="text-red-700">Alert</h4>
        <div className="my-4">
          <p>
            We detected another device login. <br /> As such you have been
            logged out of this device
          </p>
        </div>
        <Button
          url="/login"
          classes="primary-btn btn-lg"
          content="Return to Login"
        />
      </div>
    </div>
  );
}
