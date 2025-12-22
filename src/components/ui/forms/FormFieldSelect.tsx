"use client"

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import type { Control, FieldValues, Path } from "react-hook-form"
import OtpInput from "react-otp-input"
import { Input } from "../input"

type FormFieldOTPProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  length?: number
}

export function FormFieldSelect<T extends FieldValues>({
  control,
  name,
  label,
  length = 6,
}: FormFieldOTPProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <OtpInput
              value={field.value || ""}
              onChange={field.onChange}
              numInputs={length}
              inputType="tel"
              shouldAutoFocus
              renderInput={(props) => (
                <Input
                  {...props}
                  className="h-12 w-12 rounded-md border text-center focus:border-brand-purple focus:outline-none"
                />
              )}
              containerStyle="flex gap-2"
            />
          </FormControl>

          <FormMessage name={name} />
        </FormItem>
      )}
    />
  )
}
