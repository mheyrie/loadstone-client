 const variantStyles = {
  wallet: {
    base: "bg-white text-gray-900",
    before: "before:bg-[#EDE9FE]",
  },
  loan: {
    base: "bg-[#5B3CC4] text-white",
    before: "before:bg-[#7C5CF5]",
  },
  investment: {
    base: "bg-[#FACC15] text-gray-900",
    before: "before:bg-[#FDE68A]",
  },
};

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  action?: React.ReactNode;
  variant?: "wallet" | "loan" | "investment";
};

export default function StatCard({
  title,
  value,
  subtitle,
  action,
  variant = "wallet",
}: StatCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl p-6 shadow-sm
        ${variantStyles[variant].base}
        before:absolute before:inset-0 before:content-['']
        before:rounded-full before:translate-x-1/3 before:-translate-y-1/3
        before:scale-[1.8]
        ${variantStyles[variant].before}
      `}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium opacity-80">{title}</h4>
          <button className="opacity-70 hover:opacity-100">👁</button>
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
