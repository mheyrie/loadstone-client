"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import type { Control, FieldValues, Path } from "react-hook-form";

type FormFieldTextProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
  className?: string;
};

export function FormFieldText<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
}: FormFieldTextProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`${className} text-start text-brand-white `}>
          <FormLabel >{label}</FormLabel>

          <FormControl>
            <input type={type} placeholder={placeholder} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
