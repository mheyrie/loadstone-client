import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const variantStyles = {
  one: {
    base: "bg-white text-gray-900",
    before: "before:bg-[#EDE9FE]",
    position: "before:translate-y-1/2 before:-translate-y-1/4",
  },
  two: {
    base: "bg-[#5B3CC4] text-white",
    before: "before:bg-[#7C5CF5]",
    position: "before:-translate-y-2/4 before:-translate-x-1/8",
  },
  three: {
    base: "bg-[#FACC15] text-gray-900",
    before: "before:bg-[#FDE68A]",
    position: "before:-translate-x-1/6 before:translate-y-1/4",
  },
};

type StatCardProps = {
  title: string;
  icon?: string;
  value: string;
  title2?: string;
  value2?: string;
  icon2?: string;
  action?: React.ReactNode;
  variant?: "one" | "two" | "three";
};

export default function StatCard({
  title,
  value,
  action,
  icon,
  title2,
  value2,
  icon2,
  variant = "one",
}: StatCardProps) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    // before:absolute before:inset-0 before:content-['']
    <div
      className={`
        relative overflow-hidden rounded-2xl h-[264px] p-6 shadow-sm
        ${variantStyles[variant].base}
   
         before:absolute before:w-66 before:h-66 before:content-['']
        before:rounded-full
        before:scale-[1.4]
        ${variantStyles[variant].before}
        ${variantStyles[variant].position}
      `}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center space-x-2">
            {icon && (
              <Icon path={icon} size={1} className="text-brand-purple" />
            )}
            <h4 className="text-sm font-medium opacity-80">{title}</h4>
          </div>
          <button
            onClick={toggleVisibility}
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Icon path={isVisible ? mdiEyeOff : mdiEye} size={1} />
          </button>
        </div>

        <p className="text-2xl font-extrabold mb-4">
          {isVisible ? value : "••••••"}
        </p>
        <div className="flex justify-between items-center">
          <div className="">{action}</div>
          <div className="flex flex-col space-y-1 items-end">
            {title2 && <span className="text-gray-600 font-semibold">{title2}</span>}
            <div className="flex items-center gap-2">
              {value2 && <span className="">{value2}</span>}
              {icon2 && (
                <button className="opacity-70 hover:opacity-100 transition-opacity">
                  <Icon path={icon2} size={0.8} className="text-brand-purple" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
