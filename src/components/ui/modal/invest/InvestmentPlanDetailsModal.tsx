import Modal from "../Modal";
import Button from "../../Button";
import BaseDirectories from "@/baseDir/baseDirectories";
import { mdiMenuDown } from "@mdi/js";
import Icon from "@mdi/react";

interface InvestmentPlan {
  type: "basic" | "classic" | "elite" | "diamond";
  title: string;
  description: string;
  percent: string;
  duration: string;
  priceRange: string;
  minAmount: number;
  maxAmount: number;
}

interface InvestmentPlanDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLend?: () => void;
  plan?: InvestmentPlan | null;
  onNext?: () => void;
}

export default function InvestmentPlanDetailsModal({
  isOpen,
  onClose,
  onLend,
  plan,
}: InvestmentPlanDetailsModalProps) {
  if (!plan) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="4xl"
      useBackgroundImage={false}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Investment Plan Details
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/*  Graph */}
          <div className="bg-gray-50 rounded-lg p-6">
            <img
              src={`${BaseDirectories.IMAGES_DIR}/dashboard/graph.png`}
              alt="Loadstone"
            />
          </div>

          {/*  Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-brand-purple capitalize mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {plan.description} {plan.priceRange} at {plan.duration} minimum
                tenor and {plan.percent} rate per annum
              </p>{" "}
            </div>
            <div className="flex">
              Tenor returns{" "}
              <span className="bg-green-200 flex rounded-2xl px-4 ml-2">
                {" "}
                <span className="">
                  <Icon
                    path={mdiMenuDown}
                    size={1}
                    className=" text-green-400 group-hover:text-brand-purple transition"
                  />
                </span>{" "}
                <span> {plan.percent}</span>
              </span>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 space-y-3 text-start max-w-lg">
              <span className="text-gray-600 font-medium">
                Duration:{plan.duration}
              </span>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 space-y-3 text-start">
              <span className="text-brand-purple font-medium">
                Amount:{plan.priceRange}
              </span>
            </div>

            <div className="w-full">
              <Button
                content="Lend"
                classes="primary-btn btn-md !w-full mt-4"
                onClick={onLend}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
