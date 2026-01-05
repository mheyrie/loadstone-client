import { mdiEye } from "@mdi/js";
import Icon from "@mdi/react";

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
  value: string;
  subtitle?: string;
  action?: React.ReactNode;
  variant?: "one" | "two" | "three" ;
};

export default function StatCard({
  title,
  value,
  subtitle,
  action,
  variant = "one",
}: StatCardProps) {
  return (  
    // before:absolute before:inset-0 before:content-['']
    <div
      className={`
        relative overflow-hidden rounded-2xl p-6 shadow-sm
        ${variantStyles[variant].base}
   
         before:absolute before:w-66 before:h-66 before:content-['']
        before:rounded-full
        before:scale-[1.4]
        ${variantStyles[variant].before}
        ${variantStyles[variant].position}
      `}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium opacity-80">{title}</h4>
          <button className="opacity-70 hover:opacity-100"><Icon path={mdiEye} size={1}/></button>
        </div>

        <p className="text-2xl font-extrabold mb-4">{value}</p>

        {subtitle && (
          <p className="text-xs opacity-70 mb-4">{subtitle}</p>
        )}

        {action}
      </div>
    </div>
  );
}
