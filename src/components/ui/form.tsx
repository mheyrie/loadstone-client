/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
} from "react-hook-form";

/* -------------------------------------------------------------------------- */
/*                                   <Form />                                 */
/* -------------------------------------------------------------------------- */

export function Form({
  children,
  form,
  className,
}: {
  children: React.ReactNode;
  form: any;
  className?: string;
}) {
  return (
    <FormProvider {...form}>
      <div className={className}>{children}</div>
    </FormProvider>
  );
}

/* -------------------------------------------------------------------------- */
/*                                <FormField />                                */
/* -------------------------------------------------------------------------- */

export function FormField(props: ControllerProps<any, any>) {
  return <Controller {...props} />;
}

/* -------------------------------------------------------------------------- */
/*                                 <FormItem />                                */
/* -------------------------------------------------------------------------- */

export function FormItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`space-y-1 ${className}`}>{children}</div>;
}

/* -------------------------------------------------------------------------- */
/*                                <FormLabel />                                */
/* -------------------------------------------------------------------------- */

export function FormLabel({
  children,
  htmlFor,
  className,
}: {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}

/* -------------------------------------------------------------------------- */
/*                               <FormControl />                               */
/* -------------------------------------------------------------------------- */

export function FormControl({
  children,
  className,
}: {
  children: React.ReactElement;
  className?: string;
}) {
  return React.cloneElement(children, {
    className: cn(
      (children as React.ReactElement<any>).props.className,
      className
    ),
  } as any);
}

/* -------------------------------------------------------------------------- */
/*                               <FormMessage />                               */
/* -------------------------------------------------------------------------- */

export function FormMessage({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[name as keyof typeof errors];

  if (!error) return null;
  return (
    <p className={cn("text-sm text-red-500", className)}>
      {String(error.message)}
    </p>
  );
}
