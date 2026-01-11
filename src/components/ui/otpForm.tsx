import OtpInput from "react-otp-input";

interface OtpFormProps {
  value: string;
  onChange: (otp: string) => void;
  numInputs?: number;
  separator?: string | React.ReactElement;
  inputClassName?: string;
  containerClassName?: string;
  placeholder?: string;
  shouldAutoFocus?: boolean;
  inputType?: "text" | "number" | "password" | "tel";
}

export default function OtpForm({
  value,
  onChange,
  numInputs = 4,
  separator = <span>-</span>,
  inputClassName = "",
  containerClassName = "",
  placeholder = "",
  shouldAutoFocus = true,
  inputType = "number",
}: OtpFormProps) {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={numInputs}
      renderSeparator={separator}
      renderInput={(props) => (
        <input
          {...props}
          className={inputClassName}
          placeholder={placeholder}
        />
      )}
      containerStyle={containerClassName}
      shouldAutoFocus={shouldAutoFocus}
      inputType={inputType}
    />
  );
}
