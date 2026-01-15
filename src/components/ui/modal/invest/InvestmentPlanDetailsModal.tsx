import Modal from "../Modal";
import Button from "../../Button";
import Icon from "@mdi/react";
import { mdiChartLine } from "@mdi/js";

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
  onLend: () => void;
  plan: InvestmentPlan;
}

export default function InvestmentPlanDetailsModal({
  isOpen,
  onClose,
  onLend,
  plan,
}: InvestmentPlanDetailsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl" useBackgroundImage={false}>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Investment Plan Details
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left side - Graph */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Performance Overview</h3>
            <div className="flex items-center justify-center h-64 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <Icon path={mdiChartLine} size={3} className="text-brand-purple mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Investment Growth Chart</p>
                <p className="text-xs text-gray-400 mt-1">Historical performance data</p>
              </div>
            </div>
          </div>

          {/* Right side - Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-brand-purple capitalize mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center border-b border-purple-200 pb-2">
                <span className="text-gray-600 font-medium">Investment Range:</span>
                <span className="text-gray-900 font-semibold">{plan.priceRange}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-purple-200 pb-2">
                <span className="text-gray-600 font-medium">Returns:</span>
                <span className="text-brand-purple font-bold text-lg">{plan.percent}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Duration:</span>
                <span className="text-gray-900 font-semibold">{plan.duration}</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span>Guaranteed returns at {plan.percent} interest rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span>Flexible investment duration of {plan.duration}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span>Secure and regulated investment platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span>Easy withdrawal at maturity</span>
                </li>
              </ul>
            </div>

            <Button
              content="Lend"
              classes="primary-btn btn-md w-full mt-4"
              onClick={onLend}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            content="Cancel"
            classes="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition btn-md"
            onClick={onClose}
          />
        </div>
      </div>
    </Modal>
  );
}
