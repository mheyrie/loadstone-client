import SearchInput from "@/components/_shared/SearchInput";
import Button from "@/components/ui/Button";
import GuarantorTable from "./GuarantorTable";
import { useNavigate } from "react-router-dom";


export default function GuarantorMain() {
  const navigate = useNavigate();
 

const handleAddGuarantor = () => {
  navigate("/dashboard/guarantors/add");
};

  return (
    <div className="bg-white shadow-2xl">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        <h3 className="font-bold text-brand-purple text-sm sm:text-base">Guarantor</h3>
        <Button
          content="Add Guarantor"
          classes="primary-btn btn-sm sm:btn-md"
          onClick={handleAddGuarantor}
        />
      </div>
      <div className="px-4 sm:px-6">
        <SearchInput />
      </div>
      <div className="px-4 sm:px-6 py-4">
      <GuarantorTable />
      </div>
    </div>
  );
}
