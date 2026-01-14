import Modal from "../Modal";
import Button from "../../Button";
import Icon from "@mdi/react";
import { mdiChartLine, mdiPiggyBank, mdiBriefcase, mdiMenuDown } from "@mdi/js";


interface InvestmentTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: "basic" | "classic" | "elite" | "diamond") => void;
}

export default function InvestmentTypeModal({
  isOpen,
  onClose,
  onSelectType,
}: InvestmentTypeModalProps) {
  const investmentTypes = [
    {
      type: "basic" as const,
      icon: mdiChartLine,
      title: "Basic",
      description: "Invest in company shares with high growth potential",
      color: "bg-purple-100 text-purple-600",
      icon2: mdiMenuDown,
      percent: '8%',
      duration: '6 months',
      priceRange: '₦50,000 - ₦500,000',
    },
    {
      type: "classic" as const,
      icon: mdiBriefcase,
      title: "Classic",
      description: "Fixed income securities with lower risk",
      color: "bg-blue-100 text-blue-600",
      icon2: mdiMenuDown,
      percent: '10%',
      duration: '12 months',
      priceRange: '₦100,000 - ₦1,000,000',
    },
    {
      type: "elite" as const,
      icon: mdiPiggyBank,
      title: "Elite",
      description: "Property investment with steady returns",
      color: "bg-green-100 text-green-600",
      icon2: mdiMenuDown,
      percent: '12%',
      duration: '18 months',
      priceRange: '₦200,000 - ₦2,000,000',
    },
    {
      type: "diamond" as const,
      icon: mdiChartLine,
      title: "Diamond",
      description: "Diversified portfolio managed by experts",
      color: "bg-orange-100 text-orange-600",
      icon2: mdiMenuDown,
      percent: '15%',
      duration: '24 months',
      priceRange: '₦500,000 - ₦5,000,000',
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="lg" useBackgroundImage={false}>
      <div className="p-6">
        <h4 className="text-2xl text-start font-bold text-gray-900 mb-2">
          Lending Plans
        </h4>
      

        <div className="grid grid-rows-1 gap-4">
          {investmentTypes.map((item) => (
            <button
              key={item.type}
              onClick={() => onSelectType(item.type)}
              className="flex p-6 border-2 border-gray-200 rounded-lg hover:border-brand-purple hover:shadow-lg transition-all text-left group"
            >
              <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                <Icon path={item.icon} size={1.2} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-brand-purple transition">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <Button
            content="Cancel"
            classes="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition btn-md w-full"
            onClick={onClose}
          />
        </div>
      </div>
    </Modal>
  );
}