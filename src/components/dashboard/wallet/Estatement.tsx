import Button from "@/components/ui/Button";
import { Form } from "@/components/ui/form";
import { FormFieldDate } from "@/components/ui/forms/FormFieldDate";
import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import type { EStatementForm } from "@/types/wallet";
import { useForm } from "react-hook-form";

export default function Estatement() {
  const formatOptions = [
    { value: "pdf", label: "PDF" },
    { value: "csv", label: "CSV" },
    { value: "excel", label: "Excel" },
  ];
  const eStatementForm = useForm<EStatementForm>({
    defaultValues: {
      startDate: "",
      endDate: "",
      format: "pdf",
    },
  });

  const onEStatementSubmit = (data: EStatementForm) => {
    console.log("E-statement request submitted:", data);
    handleCloseModal();
  };
  const handleCloseModal = () => {
    eStatementForm.reset();
  };

  return (
    <Form form={eStatementForm}>
      <form
        onSubmit={eStatementForm.handleSubmit(onEStatementSubmit)}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold text-brand-purple">
          Generate E-Statement
        </h3>
        <div className="space-y-3">
          <FormFieldDate
            control={eStatementForm.control}
            name="startDate"
            label="Start Date"
            placeholder="Select start date"
            className="text-gray-500"
          />
          <FormFieldDate
            control={eStatementForm.control}
            name="endDate"
            label="End Date"
            placeholder="Select end date"
            className="text-gray-500"
          />
          <FormFieldSelect
            control={eStatementForm.control}
            name="format"
            label="File Format"
            options={formatOptions}
            placeholder="Choose format"
            className="text-gray-500"
          />
        </div>
        <div className="flex gap-3 justify-end mt-6">
          <Button
            content="Cancel"
            classes="secondary-btn btn-md"
            onClick={handleCloseModal}
            type="button"
          />
          <Button
            content="Generate"
            classes="primary-btn btn-md"
            type="submit"
          />
        </div>
      </form>
    </Form>
  );
}
