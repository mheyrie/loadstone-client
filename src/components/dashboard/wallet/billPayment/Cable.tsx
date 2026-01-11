import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import type { BillPaymentForm } from "@/types/wallet";
import { useForm } from "react-hook-form";

export default function Cable() {
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
  const cableProviderOptions = [
    { value: "dstv", label: "DSTV" },
    { value: "gotv", label: "GOTV" },
    { value: "startimes", label: "Startimes" },
  ];

  const cablePackageOptions = [
    { value: "compact", label: "Compact - ₦10,500" },
    { value: "premium", label: "Premium - ₦24,500" },
    { value: "compactplus", label: "Compact Plus - ₦16,200" },
  ];
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-brand-purple">
        Cable Subscription
      </h3>
      <div className="space-y-3">
        <FormFieldSelect
          control={form.control}
          name="provider"
          label="Select Provider"
          options={cableProviderOptions}
          placeholder="Choose provider"
        />
        <FormFieldText
          control={form.control}
          name="smartCardNumber"
          label="Smart Card Number"
          type="text"
          placeholder="Enter smart card number"
        />
        <FormFieldSelect
          control={form.control}
          name="package"
          label="Select Package"
          options={cablePackageOptions}
          placeholder="Choose package"
        />
      </div>
    </div>
  );
}
