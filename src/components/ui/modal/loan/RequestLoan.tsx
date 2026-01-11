import type { Control } from "react-hook-form";
import { FormFieldText } from "../../forms/FormFieldText";
import { FormFieldSelect } from "../../forms/FormFieldSelect";
import type { LoanRequestForm } from "@/types/loan";
import { durationOptions, loanTypeOptions, reasonOptions } from "@/data/dashboard";



export default function RequestLoan({
  control,
}: {
  control: Control<LoanRequestForm>;
}) {
  return (
    <div>
      <div className="text-2xl font-bold mb-6">Request New Loan</div>

      <div className="space-y-4">
        <div className="text-start">
          {/* NOTE - return user email from db */}
          <FormFieldText
            className="text-gray-500"
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
          />
          <small className="text-gray-500 mt-1">
            Your email must be a valid email address
          </small>
        </div>

        <div className="text-start">
          <FormFieldText
            className="text-gray-600"
            control={control}
            name="amount"
            label="Loan Amount"
            type="text"
            placeholder="Enter loan amount"
          />
        </div>

        <div className="text-start">
          <FormFieldSelect
            control={control}
            name="loanType"
            label="Loan Type"
            options={loanTypeOptions}
            placeholder="Select loan type"
          />
        </div>

        <div className="text-start">
          <FormFieldSelect
            control={control}
            name="duration"
            label="Loan Duration"
            options={durationOptions}
            placeholder="Select duration"
          />
        </div>

        <div className="text-start">
          <FormFieldSelect
            control={control}
            name="reason"
            label="Reason for Loan"
            options={reasonOptions}
            placeholder="Why do you need this loan?"
          />
        </div>

        <div className="text-start">
          <FormFieldText
            className="text-gray-700"
            control={control}
            name="note"
            label="Additional Notes"
            type="text"
            placeholder="Any additional information (optional)"
          />
        </div>
      </div>
    </div>
  );
}
