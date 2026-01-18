import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import InvestTable from "./InvestTable";
import SavingsTable from "./SavingsTable";
import { Tab, Tabs } from "@mui/material";

const InvestMainSkeleton = () => (
  <div className="bg-white shadow-2xl">
    <div className="flex items-center justify-between px-6 py-4">
      <Skeleton width={100} height={24} />
      <Skeleton width={150} height={40} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 px-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 bg-gray-50 rounded-lg">
          <Skeleton height={20} width="60%" className="mb-2" />
          <Skeleton height={28} width="80%" />
        </div>
      ))}
    </div>
    <div className="px-6">
      <Skeleton height={40} width="100%" className="mb-4" />
    </div>
    <div className="px-6 pb-6">
      <Skeleton height={400} width="100%" />
    </div>
  </div>
);

type TabType = "invest" | "save";

export default function AllTable() {
  const [activeTab, setActiveTab] = useState<TabType>("invest");
  const [isLoading] = useState(false);

  if (isLoading) {
    return <InvestMainSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-2xl"
    >
      {/* Tabs */}
      <div className="px-4 sm:px-6 border-b border-gray-200">
        <div className="flex gap-4">
          <Tabs value={activeTab === "invest" ? 0 : 1} onChange={(_, value) => setActiveTab(value === 0 ? "invest" : "save")}>
            <Tab
              label="Investments"
              className={
                activeTab === "invest"
                  ? "text-brand-purple border-b-2 border-brand-purple"
                  : "text-gray-500 hover:text-gray-700"
              }
            />
            <Tab
              label="Savings"
              className={
                activeTab === "save"
                  ? "text-brand-purple border-b-2 border-brand-purple"
                  : "text-gray-500 hover:text-gray-700"
              }
            />
          </Tabs>
        </div>
      </div>

      {/* Table Content */}
      <div className="px-4 sm:px-6 pb-6">
        {activeTab === "invest" ? <InvestTable /> : <SavingsTable />}
      </div>
    </motion.div>
  );
}
