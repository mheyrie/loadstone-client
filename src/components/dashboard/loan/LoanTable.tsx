
import { Tabs, Tab } from '@mui/material';
import { useState } from "react";
import EmptyState from "./EmptyState";
import Button from "@/components/ui/Button";

export default function LoanTable() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
  return (
    <div className="px-2 sm:px-4">
        <div className="border-b border-gray-200 overflow-x-auto">
            <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: '#000000', // Black indicator
                    }
                }}
                sx={{
                    '& .MuiTab-root': {
                        color: '#6B7280 !important', // Gray text for inactive tabs
                        textTransform: 'none',
                        fontWeight: 700,
                        minWidth: { xs: '80px', sm: '120px' },
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                    },
                    '& .Mui-selected': {
                        color: '#000000 !important', // Black text for active tab
                    },
                    '& .MuiTabs-flexContainer': {
                        borderBottom: '1px solid #E5E7EB', // Light gray bottom border
                    },
                }}
            >
                <Tab label="All " />
                <Tab label="Approved" />
                <Tab label="Unapproved" />
                <Tab label="Paid" />
                <Tab label="Unpaid" />
            </Tabs>
            {/* Table content here */}
            {activeTab === 0 && (
                <EmptyState 
                    title="No loans yet"
                    message="You haven't applied for any loans. Start by applying for a loan to see it here."
                    // imageSrc={`${BaseDirectories.IMAGES_DIR}/403.png`}
                    actionButton={
                        <Button content="Apply for Loan" classes="primary-btn btn-md" />
                    }
                />
            )}
            {activeTab === 1 && (
                <EmptyState 
                    title="No approved loans"
                    message="You don't have any approved loans at the moment."
                />
            )}
            {activeTab === 2 && (
                <EmptyState 
                    title="No unapproved loans"
                    message="You don't have any pending loan applications."
                />
            )}
            {activeTab === 3 && (
                <EmptyState 
                    title="No paid loans"
                    message="You haven't fully paid off any loans yet."
                />
            )}
            {activeTab === 4 && (
                <EmptyState 
                    title="No unpaid loans"
                    message="All your loans are paid up. Great job!"
                />
            )}
        </div>
    </div>
  )
}