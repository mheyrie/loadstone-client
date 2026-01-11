import Icon from "@mdi/react";
import { Input } from "../ui/input";
import { mdiMagnify } from "@mdi/js";

export default function SearchInput() {
  return (
    <div className="mx-4 my-2  text-brand-purple relative">
      <Icon
        className="absolute ml-3 mt-3 text-brand-purple "
        path={mdiMagnify}
        size={1}
      />
      <Input
        className="bg-[#EFF0F7] pl-10 focus:outline-none text-brand-purple-light"
        placeholder="Search"
      />
    </div>
  );
}
