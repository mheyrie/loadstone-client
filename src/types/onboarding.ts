export type SignupStep =
  | "account"
  | "password"
  | "verification"
  | "success"
  | "phoneVerification"
  | "pinVerification"
  | "bvnVerification"
  | "pinSetup";

  export const SIGNUP_FLOW: SignupStep[] = [
  "account",
  "password",
  "verification",
  "phoneVerification",
  "pinSetup",
  "success",
];


export interface SignupFormData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  dateOfBirth: string;
  businessName: string;
  businessType: string;
  verificationCode: string;
}

export interface LoginFormData {
  emailOrUsername: string;
  password: string;
}

export type AuthOption = "password" | "passkey";
