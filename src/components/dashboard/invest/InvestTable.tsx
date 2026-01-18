import { DataTable } from "../table/DataTable";
import { investmentColumns } from "@/features/investmentColumns";
import { useState } from "react";
import EmptyState from "../EmptyState";
import Button from "@/components/ui/Button";
import BaseDirectories from "@/baseDir/baseDirectories";
import type { Investment } from "@/types/invest";

// Mock data - replace with actual data from your API
const mockInvestments: Investment[] = [
  {
    id: "INV001",
    interest: 8,
    amount: 500000,
    duration: "12 months",
    returns: 575000,
    startDate: "2024-01-15",
    maturityDate: "2025-01-15",
    status: "active",
  },
  {
    id: "INV002",
    interest: 16,
    amount: 250000,
    duration: "6 months",
    returns: 280000,
    startDate: "2024-06-01",
    maturityDate: "2024-12-01",
    status: "matured",
  },
];

export default function InvestTable() {
  const [investments] = useState<Investment[]>(mockInvestments);

  const handleAddInvestment = () => {
    console.log("Add new investment");
    // TODO: Open modal to add new investment
  };

  // Show empty state when there are no investments
  if (investments.length === 0) {
    return (
      <EmptyState
        title="No investments yet"
        imageSrc={`${BaseDirectories.IMAGES_DIR}/dashboard/okay.png`}
        message="You haven't made any investments. Start investing to grow your wealth."
        actionButton={
          <Button
            content="Start Investing"
            classes="primary-btn btn-md"
            onClick={handleAddInvestment}
          />
        }
      />
    );
  }

  return (
    <div className="overflow-x-scroll">
      <DataTable data={investments} columns={investmentColumns} pageSize={10} />
    </div>
  );
}
