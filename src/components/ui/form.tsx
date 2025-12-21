import * as React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldValues,
  type FieldPath,
} from "react-hook-form";
import { Label } from "./label";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   <Form />                                 */
/* -------------------------------------------------------------------------- */

export function Form(props: React.ComponentProps<typeof FormProvider>) {
  return <FormProvider {...props} />;
}

/* -------------------------------------------------------------------------- */
/*                              Form Field Context                             */
/* -------------------------------------------------------------------------- */

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(
  null
);

FormField.displayName = "FormField";

/* -------------------------------------------------------------------------- */
/*                                <FormField />                                */
/* -------------------------------------------------------------------------- */

export function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(props: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Form Item Context                              */
/* -------------------------------------------------------------------------- */

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

/* -------------------------------------------------------------------------- */
/*                                 <FormItem />                                */
/* -------------------------------------------------------------------------- */

export function FormItem({ children, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div {...props}>{children}</div>
    </FormItemContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                              useFormField Hook                              */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line react-refresh/only-export-components
export function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField must be used within <FormField>");
  }

  if (!itemContext) {
    throw new Error("useFormField must be used within <FormItem>");
  }

  const error = formState.errors?.[fieldContext.name];

  return {
    name: fieldContext.name,
    error,
    inputId: itemContext.id,
    messageId: `${itemContext.id}-error`,
  };
}

/* -------------------------------------------------------------------------- */
/*                                 <FormLabel />                               */
/* -------------------------------------------------------------------------- */

export function FormLabel({
//   children,
  className,
  ...props
}: React.ComponentProps<"label">) {
  const { inputId, error } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={inputId}
      {...props}
    />
    // <label
    //   htmlFor={inputId}
    //   style={{ color: error ? "red" : "inherit" }}
    //   {...props}
    // >
    //   {children}
    // </label>
  );
}

/* -------------------------------------------------------------------------- */
/*                                <FormControl />                              */
/* -------------------------------------------------------------------------- */

export function FormControl({ children, className }: { children: React.ReactElement, className?: string }) {
  const { inputId, error, messageId } = useFormField();

  return React.cloneElement(children, {
    id: inputId,
    className: cn("w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-destructive data-[error=true]:focus:ring-destructive", className),
    "aria-invalid": !!error,
    "aria-describedby": error ? messageId : undefined,
  } as React.HTMLAttributes<HTMLElement>);
}

/* -------------------------------------------------------------------------- */
/*                                <FormMessage />                              */
/* -------------------------------------------------------------------------- */

export function FormMessage({ children, className, ...props }: React.ComponentProps<"p">) {
  const { error, messageId } = useFormField();

  if (!error && !children) return null;

  return (
    <p id={messageId} className={cn("text-destructive text-sm", className)} {...props}>
      {error ? String(error.message) : children}
    </p>
  );
}
