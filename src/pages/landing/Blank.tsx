import type { FC } from "react";


interface Props {
  height: string;
}

const Blank: FC<Props> = ({ height }) => {
  return <div style={{ height: height }}></div>;
};

export default Blank;
