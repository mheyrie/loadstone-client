import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileSubTabs from "./ProfileSubTabs";
import PersonalInfoForm from "./PersonalInfoForm";
import NextOfKinSection from "./NextOfKinSection";
import DocumentsSection from "./DocumentsSection";

type ProfileTab = "personal" | "nextOfKin" | "documents";

export default function AccountProfile() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("personal");

  return (
    <div className="px-4 sm:px-6">
      <ProfileHeader />
      <ProfileSubTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "personal" && <PersonalInfoForm />}
      {activeTab === "nextOfKin" && <NextOfKinSection />}
      {activeTab === "documents" && <DocumentsSection />}
    </div>
  );
}
