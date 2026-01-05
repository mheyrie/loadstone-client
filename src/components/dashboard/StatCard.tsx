 export default function StatCard() {
  return (
    <>
      {/* Wallet Balance Card */}
      <div className="relative overflow-hidden rounded-2xl p-6 shadow-sm bg-white text-gray-900 before:absolute before:inset-0 before:content-[''] before:rounded-full before:translate-x-1/3 before:-translate-y-1/3 before:scale-[1.8] before:bg-[#ED44FE]">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium opacity-80">Wallet Balance</h4>
            <button className="opacity-70 hover:opacity-100">👁</button>
          </div>

          <p className="text-2xl font-extrabold mb-4">₦5,000,000.00</p>

          <p className="text-xs opacity-70 mb-4">LOANSTONE 01234567890</p>

          <button className="mt-4 px-4 py-2 bg-brand-purple text-white rounded-lg text-sm">
            Fund Wallet
          </button>
        </div>
      </div>

      {/* Loans Card */}
      <div className="relative overflow-hidden rounded-2xl p-6 shadow-sm bg-[#5B3CC4] text-white before:absolute before:inset-0 before:content-[''] before:rounded-full before:translate-x-1/3 before:-translate-y-1/3 before:scale-[1.8] before:bg-[#7C5CF5]">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium opacity-80">Loans</h4>
            <button className="opacity-70 hover:opacity-100">👁</button>
          </div>

          <p className="text-2xl font-extrabold mb-4">₦0.00</p>

          <span className="text-sm underline">View all</span>
        </div>
      </div>

      {/* Investment Card */}
      <div className="relative overflow-hidden rounded-2xl p-6 shadow-sm bg-[#FACC15] text-gray-900 before:absolute before:inset-0 before:content-[''] before:rounded-full before:translate-x-1/3 before:-translate-y-1/3 before:scale-[1.8] before:bg-[#FDE68A]">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium opacity-80">Investment</h4>
            <button className="opacity-70 hover:opacity-100">👁</button>
          </div>

          <p className="text-2xl font-extrabold mb-4">₦0.00</p>

          <span className="text-sm underline">View all</span>
        </div>
      </div>
    </>
  );
}
