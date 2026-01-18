import { DataTable } from "../table/DataTable";

import { useState } from "react";
import EmptyState from "../EmptyState";
import Button from "@/components/ui/Button";
import BaseDirectories from "@/baseDir/baseDirectories";
import type { Savings } from "@/types/invest";
import { savingsColumns } from "@/features/savingsColumns";

// Mock data - replace with actual data from your API
const mockSavings: Savings[] = [
  {
    id: "SAV001",
    name: "Emergency Fund",
    amount: 150000,
    targetAmount: 500000,
    duration: "12 months",
    interest: 10,
    startDate: "2024-01-01",
    maturityDate: "2025-01-01",
    status: "active",
  },
  {
    id: "SAV002",
    name: "Vacation Savings",
    amount: 200000,
    targetAmount: 200000,
    duration: "6 months",
    interest: 8,
    startDate: "2024-06-01",
    maturityDate: "2024-12-01",
    status: "completed",
  },
];

export default function SavingsTable() {
  const [savings] = useState<Savings[]>(mockSavings);

  const handleViewSavings = (saving: Savings) => {
    console.log("View savings:", saving);
    // TODO: Navigate to savings details or open modal
  };

  const handleAddSavings = () => {
    console.log("Add new savings");
    // TODO: Open modal to add new savings
  };

  // Show empty state when there are no savings
  if (savings.length === 0) {
    return (
      <EmptyState
        title="No savings yet"
        imageSrc={`${BaseDirectories.IMAGES_DIR}/dashboard/okay.png`}
        message="You haven't started any savings plan. Start saving today to achieve your goals."
        actionButton={
          <Button
            content="Start Saving"
            classes="primary-btn btn-md"
            onClick={handleAddSavings}
          />
        }
      />
    );
  }

  return (
    <div>
      <DataTable
        data={savings}
        columns={savingsColumns(handleViewSavings)}
        pageSize={10}
      />
    </div>
  );
}