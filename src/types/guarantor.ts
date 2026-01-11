export type Guarantor = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  status: "approved" | "pending" | "inactive";
  gender: "Male" | "Female" | "Other";
  dob?: string;
  address?: string;
  occupation?: string;
  relationship?: string;
  bvn?: string;
  nin?: string;
  employerOrCompanyName?: string;
  dateAdded?: string;
  lga?: string;
  state?: string;
  country?: string;
};