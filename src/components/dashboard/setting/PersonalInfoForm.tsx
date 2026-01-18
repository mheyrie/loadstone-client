import { useState } from "react";
import Button from "@/components/ui/Button";

interface FieldData {
  label: string;
  key: string;
  value: string;
  type?: string;
}

interface FieldItemProps {
  label: string;
  value: string;
  type?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

function FieldItem({ label, value, type = "text", readOnly = false, onChange }: FieldItemProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
          readOnly 
            ? "bg-gray-100 border-gray-200 cursor-not-allowed text-gray-600" 
            : "bg-white border-gray-300 focus:ring-2 focus:ring-brand-purple"
        }`}
      />
    </div>
  );
}

export default function PersonalInfoForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "Mr",
    fullName: "Zion Imago-Dei",
    email: "zion@example.com",
    position: "CEO",
    share: "60%",
    dateOfBirth: "03/03/2000",
    gender: "Male",
    bvn: "00223867403",
    identificationType: "NIN",
    identificationNumber: "00223867403",
    address: "Kale dean road, Ikeja Lagos",
    lga: "Ikeja",
    state: "Lagos",
    country: "Nigeria",
  });

  const fields: FieldData[] = [
    { label: "Title", key: "title", value: formData.title },
    { label: "Full name", key: "fullName", value: formData.fullName },
    { label: "Email Address", key: "email", value: formData.email, type: "email" },
    { label: "Position in company", key: "position", value: formData.position },
    { label: "Share in the company", key: "share", value: formData.share },
    { label: "Date of birth", key: "dateOfBirth", value: formData.dateOfBirth },
    { label: "Gender", key: "gender", value: formData.gender },
    { label: "BVN", key: "bvn", value: formData.bvn },
    { label: "Identification type", key: "identificationType", value: formData.identificationType },
    { label: "identification number", key: "identificationNumber", value: formData.identificationNumber },
    { label: "Address", key: "address", value: formData.address },
    { label: "LGA", key: "lga", value: formData.lga },
    { label: "State", key: "state", value: formData.state },
    { label: "Country", key: "country", value: formData.country },
  ];

  const handleFieldChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // TODO: Save data to backend
    setIsEditing(false);
    console.log("Saving data:", formData);
  };

  const handleCancel = () => {
    // Reset to original values if needed
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {fields.map((field) => (
          <FieldItem
            key={field.key}
            label={field.label}
            value={field.value}
            type={field.type}
            readOnly={!isEditing}
            onChange={(value) => handleFieldChange(field.key, value)}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-end">
        {!isEditing ? (
          <Button
            content="Edit Profile"
            classes="primary-btn btn-md"
            onClick={() => setIsEditing(true)}
          />
        ) : (
          <>
            <Button
              content="Cancel"
              classes="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition btn-md"
              onClick={handleCancel}
            />
            <Button
              content="Save Changes"
              classes="primary-btn btn-md"
              onClick={handleSave}
            />
          </>
        )}
      </div>
    </div>
  );
}
