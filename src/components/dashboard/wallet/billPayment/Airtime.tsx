import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import type { BillPaymentForm } from "@/types/wallet";
import { useForm } from "react-hook-form";

export default function Airtime() {
  const form = useForm<BillPaymentForm>({
    defaultValues: {
      network: "",
      phoneNumber: "",
      amount: "",
      dataPlan: "",
      provider: "",
      smartCardNumber: "",
      package: "",
      disco: "",
      meterNumber: "",
    },
  });

  const networkOptions = [
    { value: "mtn", label: "MTN" },
    { value: "airtel", label: "Airtel" },
    { value: "glo", label: "Glo" },
    { value: "9mobile", label: "9mobile" },
  ];
  return (
    <div className="space-y-3">
      <FormFieldSelect
        control={form.control}
        name="network"
        label="Select Network"
        options={networkOptions}
        placeholder="Choose network"
      />
      <FormFieldText
        control={form.control}
        name="phoneNumber"
        label="Phone Number"
        type="text"
        placeholder="080XXXXXXXX"
        className="text-gray-700"
      />
      <FormFieldText
        control={form.control}
        name="amount"
        label="Amount"
        type="text"
        placeholder="Enter amount"
        className="text-gray-500"
      />
    </div>
  );
}
