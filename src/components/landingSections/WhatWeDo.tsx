import { mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import BaseDirectories from "../../baseDir/baseDirectories";

export default function WhatWeDo() {
  return (
    <div>
      <div className="text-center">
        <h5 className="text-4xl font-bold mb-4">
          {" "}
          <Icon path={mdiCircleSmall} size={2} />{" "}
          <span className="mx-2">What We Do</span>{" "}
        </h5>
        <h2 className="">Transforming business for MSMEs</h2>
      </div>
      <div className="">
        <div className="">
            <p className="max-w-lg mx-auto text-center">We make access to B2B financing simple and easy. No collaterals or long forms.</p>
            <div className="before:content-[''] before:block before:w-24 before:h-1 before:bg-brand-purple before:mx-auto before:my-4">
                <h4 className="">Fast-moving consumer goods (FMCG)</h4>
                <p className="">Get access to financial solutions that can help you keep your shelves stocked and respond to market demand quickly.</p>
            </div>
        </div>
        <div className="">
               <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/wwd.png`}
            alt="Hero"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
