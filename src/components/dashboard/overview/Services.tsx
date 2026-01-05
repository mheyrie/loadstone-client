import { mdiCashMultiple, mdiFlowerTulip, mdiHandCoin, mdiHome } from "@mdi/js";
import Icon from "@mdi/react";

const ServicesCards = [
  {
    title: "Loan",
    Icon: mdiHandCoin,
  },
  {
    title: "Invest",
    Icon: mdiFlowerTulip,
  },
  {
    title: "Save",
    Icon: mdiHome,
  },
  {
    title: "Pay Bills",
    Icon: mdiCashMultiple,
  },
];

export default function Services() {
  return (
    <div className=" grid md:grid-cols-4 grid-cols-2 gap-6 p-4 rounded-2xl">
      {ServicesCards.map((service, index) => (
        <span className="bg-white flex items-center gap-2 order-2 p-2 shadow-2xl rounded-lg  justify-center" key={index}>
          <Icon path={service.Icon} size={1} className="text-brand-purple" />
          <h4 className="font-bold">{service.title}</h4>
        </span>
      ))}
    </div>
  );
}
