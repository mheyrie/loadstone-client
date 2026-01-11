
import { DataTable } from "../table/DataTable";
import { guarantorColumns, type Guarantor } from "@/features/guarantorColumns";
import { useState } from "react";

  // Mock data - replace with actual data from your API
  const mockGuarantors: Guarantor[] = [
    {
      id: "G001",
      fullName: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "08012345678",
      status: "approved",
    },
    {
      id: "G002",
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      phoneNumber: "08087654321",
      status: "pending",
    },
    {
      id: "G003",
      fullName: "Michael Johnson",
      email: "michael.j@example.com",
      phoneNumber: "08098765432",
      status: "approved",
    },
    {
      id: "G004",
      fullName: "Sarah Williams",
      email: "sarah.w@example.com",
      phoneNumber: "08076543210",
      status: "inactive",
    },
  ];

  export default function GuarantorTable() {
    const [guarantors] = useState<Guarantor[]>(mockGuarantors);

    const handleViewGuarantor = (guarantor: Guarantor) => {
      console.log("View guarantor:", guarantor);
      // TODO: Open modal or navigate to guarantor details
    };

    const handleDeleteGuarantor = (guarantor: Guarantor) => {
      console.log("Delete guarantor:", guarantor);
      // TODO: Show confirmation dialog and delete guarantor
    };

    return (
      <div>
        {" "}
        <DataTable
          data={guarantors}
          columns={guarantorColumns(handleViewGuarantor, handleDeleteGuarantor)}
          pageSize={10}
        />
      </div>
    );
  }

