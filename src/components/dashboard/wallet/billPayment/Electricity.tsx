import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import type { BillPaymentForm } from "@/types/wallet";
import { useForm } from "react-hook-form";


export default function Electricity() {
  const form = useForm<BillPaymentForm>({
    defaultValues: {
    //   network: "",
    //   phoneNumber: "",
      amount: "",
    //   dataPlan: "",
    //   provider: "",
    //   smartCardNumber: "",
    //   package: "",
      disco: "",
      meterNumber: "",
    },
  });
  const discoOptions = [
    { value: "ikedc", label: "IKEDC" },
    { value: "ekedc", label: "EKEDC" },
    { value: "aedc", label: "AEDC" },
    { value: "phed", label: "PHED" },
  ];
  return (
    <div className="space-y-3">
      <FormFieldSelect
        control={form.control}
        name="disco"
        label="Select Disco"
        options={discoOptions}
        placeholder="Choose disco"
        className="text-gray-600"
      />
      <FormFieldText
        control={form.control}
        name="meterNumber"
        label="Meter Number"
        type="text"
        placeholder="Enter meter number"
        className="text-gray-600"
      />
      <FormFieldText
        control={form.control}
        name="amount"
        label="Amount"
        type="text"
        placeholder="Enter amount"
        className="text-gray-600"
      />
    </div>
  );
}
