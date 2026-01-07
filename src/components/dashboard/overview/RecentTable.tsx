import { mdiChartBoxOutline, mdiDotsVertical } from "@mdi/js";
import Icon from "@mdi/react";
import { recentTransactions } from "../../../data/dummy";

export default function RecentTable() {
  return (
    <div className="bg-brand-white md:w-2xl w-[90%] p-4 rounded-lg shadow-sm">
      <div className=" flex items-center justify-between mb-4">
        <div className="">
          {" "}
          <Icon
            path={mdiChartBoxOutline}
            size={1}
            className="text-gray-600 mr-2"
          />
          <span className="font-bold text-gray-600">Recent Transactions</span>
        </div>

        <Icon path={mdiDotsVertical} size={1} />
      </div>
      {/* <div className="overflow-x-auto mt-4"></div>*/}
      <div className="space-y-4">
        {recentTransactions.map((tx, id) => (
          <div key={id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{tx.description}</p>
              <p className="text-sm text-gray-500">Today</p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs ${
                tx.status === "Success"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {tx.status}
            </span>

            <p className="font-semibold">{tx.amount}</p>
          </div>
        ))}
      </div>
      <div className="border text-center p-2 cursor-pointer">See More</div>
    </div>
  );
}
