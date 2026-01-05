import { mdiDotsVertical, mdiTable } from "@mdi/js";
import Icon from "@mdi/react";

export default function RecentTable() {
  return (
    <div>
      <div className="">
        <Icon path={mdiTable} size={1} className="text-gray-600 mr-2" />
        <span className="font-bold text-gray-600">Recent Transactions</span>
        <Icon path={mdiDotsVertical} size={1} />
      </div>
      <div className="overflow-x-auto mt-4"></div>
    </div>
  );
}
