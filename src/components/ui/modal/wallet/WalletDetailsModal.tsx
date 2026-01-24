import React from 'react'

export default function WalletDetailsModal() {
  return (
    <div className="p-4 bg-white shadow-2xl flex flex-col gap-4 items-center">
      <h4 className="text-xl font-bold text-brand-purple">Wallet Details</h4>
      <hr/>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-2 items-center bg-brand-purple">
          <h5 className="text-lg font-bold text-white">Wallet Balance</h5>
          <p className="text-sm text-gray-500">₦5,000,000.00</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h5 className="text-lg font-bold text-white">Wallet Balance</h5>
          <p className="text-sm text-gray-500">₦5,000,000.00</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h5 className="text-lg font-bold text-brand-purple">Wallet Balance</h5>
          <p className="text-sm text-gray-500">₦5,000,000.00</p>
        </div>
      </div>
    </div>
  )
}
