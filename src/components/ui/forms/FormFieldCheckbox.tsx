
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import type { Control, FieldValues, Path } from "react-hook-form"
import { Select, SelectItem, SelectLabel } from "../select"

type FormFieldCheckboxProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: React.ReactNode
}

export function FormFieldCheckbox<T extends FieldValues>({
  control,
  name,
  label,
}: FormFieldCheckboxProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-start gap-2">
          <FormControl>
            <Select>
             <SelectLabel>  Choose an option</SelectLabel>
             <SelectItem value={field.value}>Option 1</SelectItem>
             <SelectItem value={field.value}>Option 2</SelectItem>

             </Select>
          </FormControl>

          <label className="text-sm">{label}</label>

          <FormMessage name={name} />
        </FormItem>
      )}
    />
  )
}
