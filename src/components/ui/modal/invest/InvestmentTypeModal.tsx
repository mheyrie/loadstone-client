import Modal from "../Modal";
import Button from "../../Button";
import Icon from "@mdi/react";
import { mdiMenuDown, mdiFlowerTulipOutline, mdiArrowLeft } from "@mdi/js";

export interface InvestmentPlan {
  type: "basic" | "classic" | "elite" | "diamond";

  title: string;
  description: string;
  color: string;

  percent: string;
  duration: string;
  priceRange: string;
  minAmount: number;
  maxAmount: number;
}

interface InvestmentTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (plan: InvestmentPlan) => void;
}

export default function InvestmentTypeModal({
  isOpen,
  onClose,
  onSelectType,
}: InvestmentTypeModalProps) {
  const investmentTypes: InvestmentPlan[] = [
    {
      type: "basic" as const,
      title: "Basic lend Invest",
      description: "The Basic Lend investment plan ranges between",
      color: "bg-purple-100 text-purple-600",
      percent: "8%",
      duration: "6 months",
      priceRange: "₦50,000 - ₦500,000",
      minAmount: 50000,
      maxAmount: 500000,
    },
    {
      type: "classic" as const,

      title: "Classic lend Invest",
      description: "Fixed income securities with lower risk",
      color: "bg-purple-100 text-purple-600",
      percent: "10%",
      duration: "12 months",
      priceRange: "₦100,000 - ₦1,000,000",
      minAmount: 100000,
      maxAmount: 1000000,
    },
    {
      type: "elite" as const,

      title: "Elite lend Invest",
      description: "Property investment with steady returns",
      color: "bg-purple-100 text-purple-600",
      percent: "12%",
      duration: "18 months",
      priceRange: "₦200,000 - ₦2,000,000",
      minAmount: 200000,
      maxAmount: 2000000,
    },
    {
      type: "diamond" as const,

      title: "Diamond lend Invest",
      description: "Diversified portfolio managed by experts",
      color: "bg-purple-100 text-purple-600",
      percent: "15%",
      duration: "24 months",
      priceRange: "₦500,000 - ₦5,000,000",
      minAmount: 500000,
      maxAmount: 5000000,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="lg"
      useBackgroundImage={false}
    >
         <span className="flex cursor-pointer items-start text-start" onClick={onClose}>
              <Icon path={mdiArrowLeft} size={1} className="text-gray-500" /> Back
            </span>
      <div className="p-6">
        <h4 className="text-2xl text-start font-bold text-gray-900 mb-2">
          Lending Plans
        </h4>

        <div className="grid grid-rows-1 gap-4 justify-center items-center">
          {investmentTypes.map((item) => (
            <button
              key={item.type}
              onClick={() => onSelectType(item)}
              className="flex px-6 border-2 justify-center items-center hover:border-gray-200 rounded-lg border-brand-purple hover:shadow-lg transition-all text-left group"
            >
              <div
                className={`w-12 h-12 rounded-2xl mr-2 ${item.color} flex items-center justify-center my-4 border-2`}
              >
                <Icon
                  path={mdiFlowerTulipOutline}
                  size={1.2}
                  className="bg-purple-100 text-purple-600"
                />
              </div>
              <h3 className="font-bold text-brand-purple mb-2 text-md group-hover:text-brand-purple transition">
                {item.title}
              </h3>
              <Icon
                path={mdiMenuDown}
                size={1}
                className="ml-auto text-green-400 group-hover:text-brand-purple transition"
              />
              <p className="text-green-400 text-sm"> {item.percent}</p>-
              <p className="text-gray-600 text-sm">{item.duration}</p>
              <div className="ml-4 flex gap-2">
                {" "}
                <p className="text-gray-600 text-sm"> {item.priceRange}</p>
              </div>
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
