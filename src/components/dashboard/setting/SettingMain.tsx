import { motion } from "framer-motion";
import { useState } from "react";
import SettingsTabs from "./SettingsTabs";
import AccountProfile from "./AccountProfile";
import SecuritySection from "./SecuritySection";
import PinSection from "./PinSection";
import NotificationSection from "./NotificationSection";

type SettingsTab = "account" | "security" | "pin" | "notification" | "delete";

export default function SettingMain() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("account");

  return (
    <>
      <motion.div
        initial={{ x: 20 }}
        transition={{ duration: 0.1 }}
        animate={{ x: 0 }}
        className="bg-[#F3E8FF] min-h-screen"
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-4">
          <h1 className="text-2xl font-bold text-brand-purple">Settings</h1>
        </div>

        {/* Settings Navigation Tabs */}
        <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="border-t-4 border-brand-purple mb-6"></div>

        {/* Tab Content */}
        {activeTab === "account" && <AccountProfile />}
        {activeTab === "security" && <SecuritySection />}
        {activeTab === "pin" && <PinSection />}
        {activeTab === "notification" && <NotificationSection />}
        
        {activeTab !== "account" && activeTab !== "security" && activeTab !== "pin" && activeTab !== "notification" && (
          <div className="px-4 sm:px-6">
            <div className="text-center py-12">
              <p className="text-gray-500 capitalize">{activeTab} settings coming soon...</p>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}