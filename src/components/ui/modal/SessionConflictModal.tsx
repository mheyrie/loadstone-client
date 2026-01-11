import { useState } from "react";
import BaseDirectories from "../../../baseDir/baseDirectories";
import Button from "../Button";
import { X } from "lucide-react";

export default function SessionConflictModal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="">
      <X className="" size={2} onClick={closeModal} />
      <div className="">
        {" "}
        <img src={`${BaseDirectories.ICONS_DIR}/alert.png`} alt="Alert icon" />
      </div>

      <div className="">
        <h4 className="text-brand-purple">
          YOU ARE LOGGED INTO LOANSTONE ON ANOTHER DEVICE
        </h4>
        <div className="my-4">
          <p>
            To prevent losing any of you log history, please sign out of the
            other device before continuing
          </p>
        </div>
        <Button
          url="/login"
          classes="primary-btn btn-lg"
          content="Return to Login"
        />
        <p className="text-xl text-brand-purple-light font-medium">Continue Anyway</p>
      </div>
    </div>
  );
}
