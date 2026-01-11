import { DataTable } from "../table/DataTable";
import { guarantorColumns } from "@/features/guarantorColumns";
import { useState } from "react";
import EmptyState from "../EmptyState";
import Button from "@/components/ui/Button";
import BaseDirectories from "@/baseDir/baseDirectories";
import { useNavigate } from "react-router-dom";
import DeleteGuarantorModal from "./DeleteGuarantorModal";
import SuccessModal from "./SuccessModal";
import type { Guarantor } from "@/types/guarantor";

// Mock data - replace with actual data from your API
const mockGuarantors: Guarantor[] = [
  {
    id: "G001",
    fullName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "08012345678",
    status: "approved",
    gender: "Male",
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

export default function GuarantorTable() {
  const [guarantors, setGuarantors] = useState<Guarantor[]>(mockGuarantors);
  const [selectedGuarantor, setSelectedGuarantor] = useState<Guarantor | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

 const handleViewGuarantor = (guarantor: Guarantor) => {
    navigate(`/dashboard/guarantors/${guarantor.id}`);
  };

  const handleDeleteGuarantor = (guarantor: Guarantor) => {
    setSelectedGuarantor(guarantor);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedGuarantor) return;

    setIsDeleting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Remove guarantor from list
      setGuarantors(prev => prev.filter(g => g.id !== selectedGuarantor.id));
      
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
      setSuccessMessage(`${selectedGuarantor.fullName} has been successfully deleted.`);
      setIsSuccessModalOpen(true);
      setSelectedGuarantor(null);
    }, 1000);
  };

const handleAddGuarantor = () => {
  navigate("/dashboard/guarantors/add");
};

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setSuccessMessage("");
  };

  // Show empty state when there are no guarantors
  if (guarantors.length === 0) {
    return (
      <EmptyState
        title="No guarantors yet"
        imageSrc={`${BaseDirectories.IMAGES_DIR}/dashboard/empty.png`}
        message="You haven't added any guarantors. Add a guarantor to see them listed here."
        actionButton={
          <Button
            content="Add Guarantor"
            classes="primary-btn btn-md"
            onClick={handleAddGuarantor}
          />
        }
      />
    );
  }

  return (
    <div>
      <DataTable
        data={guarantors}
        columns={guarantorColumns(handleViewGuarantor, handleDeleteGuarantor)}
        pageSize={10}
      />
       {/* Delete Confirmation Modal */}
      {/* Delete Confirmation Modal */}
      <DeleteGuarantorModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        guarantor={selectedGuarantor}
        isDeleting={isDeleting}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        title="Guarantor Deleted"
        message={successMessage}
      />
    </div>
  );
}