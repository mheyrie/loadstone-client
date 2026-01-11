import { mdiFlash, mdiTelevisionClassic, mdiWater, mdiWifi } from "@mdi/js";
import Icon from "@mdi/react";

export default function BillPayment() {
  const billPaymentCards = [
    {
      title: "Airtiime",
      Icon: mdiFlash,
    },
    {
      title: "Data",
      Icon: mdiWater,
    },
    {
      title: "Cable",
      Icon: mdiWifi,
    },
    {
      title: "Electricity",
      Icon: mdiTelevisionClassic,
    },
  ];

  return (
    <div className=" grid md:grid-cols-4 grid-cols-2 gap-6 my-4 rounded-2xl">
      {billPaymentCards.map((service, index) => (
        <span
          className="bg-[#F3E8FF] flex items-center gap-2 p-2 py-4 shadow-2xl rounded-lg hover:bg-gray-100 cursor-pointer justify-center"
          key={index}
        >
          <Icon path={service.Icon} size={1} className="text-brand-purple" />
          <h4 className="font-bold text-brand-purple">{service.title}</h4>
        </span>
      ))}
    </div>
  );
}
