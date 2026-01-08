import { Tabs, Tab } from '@mui/material';
import { useState } from "react";

export default function LoanTable() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
  return (
    <div>
        <div className="border-b border-gray-200">
            <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                variant="fullWidth"
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
                    },
                    '& .Mui-selected': {
                        color: '#000000 !important', // Black text for active tab
                    },
                    '& .MuiTabs-flexContainer': {
                        borderBottom: 'none',
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
                <div>
                    {/* All Loans Table */}
                    <div className="h-60">ztest gbkj</div>
                </div>
            )}
            {activeTab === 1 && (
                <div>
                    {/* Approved Loans Table */}
                </div>)}
            {activeTab === 2 && (
                <div>
                    {/* Unapproved Loans Table */}
                </div>)}
        </div>
    </div>
  )
}