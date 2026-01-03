import { mdiAbacus, mdiAbugidaThai, mdiAccessPointOff } from "@mdi/js";
import Icon from "@mdi/react";

const ServicesCards = [
  {
    title: "Service One",
    Icon: mdiAbacus,
  },
  {
    title: "Service Two",
    Icon: mdiAbugidaThai,
  },
  {
    title: "Service Three",
    Icon: mdiAccessPointOff,
  },
];

export default function Services() {
  return (
    <div className="bg-white p-4 rounded-2xl">
      {ServicesCards.map((service, index) => (
        <span className="" key={index}>
          <Icon path={service.Icon} size={2} className="text-brand-purple" />
          <h4 className="">{service.title}</h4>
        </span>
      ))}
    </div>
  );
}
