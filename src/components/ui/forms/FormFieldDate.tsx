"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../input";

type FormFieldDateProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean | string;
  min?: string;
  max?: string;
};

export function FormFieldDate<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  className,
  required,
  min,
  max,
}: FormFieldDateProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      rules={{
        required:
          required === true
            ? `${label} is required`
            : required || false,
      }}
      render={({ field }) => (
        <FormItem className={`${className} text-start text-brand-white`}>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input 
              type="date" 
              placeholder={placeholder} 
              min={min}
              max={max}
              {...field} 
            />
          </FormControl>

          <FormMessage name={name} />
        </FormItem>
      )}
    />
  );
}
