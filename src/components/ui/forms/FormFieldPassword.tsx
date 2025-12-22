"use client"

import * as React from "react"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import type{ Control, FieldValues, Path } from "react-hook-form"
import { Input } from "@/components/ui/input"

type FormFieldPasswordProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
}

export function FormFieldPassword<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: FormFieldPasswordProps<T>) {
  const [show, setShow] = React.useState(false)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <div className="relative">
              <Input
                type={show ? "text" : "password"}
                placeholder={placeholder}
                {...field}
              />

              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground"
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </FormControl>

          <FormMessage name={name} />
        </FormItem>
      )}
    />
  )
}
