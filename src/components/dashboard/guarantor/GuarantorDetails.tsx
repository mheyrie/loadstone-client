import { useNavigate, useParams } from "react-router-dom";
import Button from "@/components/ui/Button";
import { StatusBadge } from "../table/StatusBadge";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiAccountCircle } from "@mdi/js";
import type { Guarantor } from "@/types/guarantor";


// Mock data - in a real app, fetch this based on the ID
const mockGuarantors: Guarantor[] = [
  {
    id: "G001",
    fullName: "John Doe",
    gender: "Male",
    email: "john.doe@example.com",
    phoneNumber: "08012345678",
    status: "approved",
    dob: "1990-01-01",
    address: "123 Main St, Lagos, Nigeria",
    occupation: "Software Engineer",
    relationship: "Friend",
    bvn: "12345678901",
    nin: "ABC123456D",
    employerOrCompanyName: "Tech Solutions Ltd",
    dateAdded: "2023-01-15",
    lga: "Ikeja",
    state: "Lagos",
    country: "Nigeria",
  },
  {
    id: "G002",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "08087654321",
    status: "pending",
    gender: "Female",
  },
  {
    id: "G003",
    fullName: "Michael Johnson",
    email: "michael.j@example.com",
    phoneNumber: "08098765432",
    status: "approved",
    gender: "Male",
  },
  {
    id: "G004",
    fullName: "Sarah Williams",
    email: "sarah.w@example.com",
    phoneNumber: "08076543210",
    status: "inactive",
    gender: "Female",
  },
];

type DetailItemProps = {
  label: string;
  value: string | undefined;
};

const DetailItem = ({ label, value }: DetailItemProps) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <p className="text-gray-900 font-medium">{value || "N/A"}</p>
  </div>
);

export default function GuarantorDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the guarantor by ID
  const guarantor = mockGuarantors.find((g) => g.id === id);

  if (!guarantor) {
    return (
      <div className="bg-white shadow-2xl rounded-lg p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Guarantor Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The guarantor you're looking for doesn't exist.
          </p>
          <Button
            content="Back to Guarantors"
            classes="primary-btn btn-md"
            onClick={() => navigate("/dashboard/guarantors")}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-2xl rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/dashboard/guarantors")}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Back to guarantors"
          >
            <Icon path={mdiArrowLeft} size={1} className="text-gray-700" />
          </button>
          <h3 className="font-bold text-brand-purple text-lg">
            Guarantor Details
          </h3>
        </div>
        <StatusBadge status={guarantor.status} />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
            <Icon
              path={mdiAccountCircle}
              size={3}
              className="text-brand-purple"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {guarantor.fullName}
            </h2>
            <p className="text-gray-500">ID: {guarantor.id}</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailItem label="Full Name" value={guarantor.fullName} />
            <DetailItem label="Gender" value={guarantor.gender} />
            <DetailItem label="Date of Birth" value={guarantor.dob} />
            <DetailItem label="Relationship" value={guarantor.relationship} />
            <DetailItem label="Email Address" value={guarantor.email} />
            <DetailItem label="Phone Number" value={guarantor.phoneNumber} />
            <DetailItem label="Address" value={guarantor.address} />
            <DetailItem label="LGA" value={guarantor.lga} />
            <DetailItem label="State" value={guarantor.state} />
            <DetailItem label="Country" value={guarantor.country} />
            <DetailItem label="Occupation" value={guarantor.occupation} />
            <DetailItem
              label="Employer/Company Name"
              value={guarantor.employerOrCompanyName}
            />

            <DetailItem label="BVN" value={guarantor.bvn} />
            <DetailItem label="NIN" value={guarantor.nin} />
            <DetailItem label="Status" value={guarantor.status} />
            <DetailItem label="Date Added" value={guarantor.dateAdded} />
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            content="Edit Guarantor"
            classes="primary-btn btn-md flex-1"
            onClick={() => console.log("Edit guarantor:", guarantor)}
          />
          <Button
            content="Delete Guarantor"
            classes="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition btn-md flex-1"
            onClick={() => console.log("Delete guarantor:", guarantor)}
          />
        </div> */}
      </div>
    </div>
  );
}
