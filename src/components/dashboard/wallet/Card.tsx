import { mdiAccessPoint, mdiChevronRight, mdiRecycle, mdiWallet } from "@mdi/js";
import Icon from "@mdi/react";

export default function Card() {
  const content = [
    {
      title: "Bank Transfer",
      Icon: mdiWallet,
      Icon2: mdiChevronRight,
    },
    {
      title: "Wallet Transfer",
      Icon: mdiRecycle,
       Icon2: mdiChevronRight,
    },
    {
      title: "Generated E-statement",
      Icon: mdiAccessPoint,
       Icon2: mdiChevronRight,
    },
  ];
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 my-4 rounded-2xl">
      {content.map((service, index) => (
        <span
          className="bg-white flex items-center gap-2 order-2 p-2 py-4 shadow-2xl rounded-lg hover:bg-gray-100 cursor-pointer justify-between"
          key={index}
        >
          <span className="flex items-center gap-2">
              <Icon path={service.Icon} size={1} className="text-brand-purple" />
              <h4 className="">{service.title}</h4>
          </span>
          {service.Icon2 && (
            <Icon path={service.Icon2} size={1} className="text-brand-purple text-end" />
          )}
        </span>
      ))}
    </div>
  );
}
