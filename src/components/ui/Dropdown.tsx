import { mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import type { FC } from "react"

type Props = {
  heading: string;
  links: {text: string, url: string}[];
}

const Dropdown:FC<Props> = ({heading, links}) => {
  return (
    <div className="absolute bg-[#E4E4E4] z-10 rounded-md shadow-lg mt-2 w-48">
      <h5 className="flex items-center font-semibold border-b border-gray-300">
        <Icon path={mdiCircleSmall} size={2} />
        <span className="text-brand-purple">{heading}</span>
      </h5>
      <div className="">
        {links && links.map((link) => (
          <a key={link.text} href={link.url} className="block text-start px-4 py-2 hover:bg-gray-200">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
}
export default Dropdown