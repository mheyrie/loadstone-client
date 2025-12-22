"use client"

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import type { Control, FieldValues, Path } from "react-hook-form"

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
            <input
              type="checkbox"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          </FormControl>

          <label className="text-sm">{label}</label>

          <FormMessage name={name} />
        </FormItem>
      )}
    />
  )
}
