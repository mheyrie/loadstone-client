export type SignupStep = "account" | "personal" | "verification" | "success";

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