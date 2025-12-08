import { mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import BaseDirectories from "../../baseDir/baseDirectories";

export default function WhatWeDo() {
  return (
    <div className="container mx-auto ">
      <div className="text-center">
        <div className="text-2xl text-brand-purple flex justify-center items-center font-bold mb-4">
          {" "}
          <Icon path={mdiCircleSmall} size={2} />{" "}
          <span className="mx-2">What We Do</span>{" "}
        </div>
        <h2 className="text-4xl font-bold">Transforming business for MSMEs</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-1 px-2 md:mb-52 items-center mx-4 text-center justify-between h-full gap-8  md:mx-20 my-12">
        <div className="flex flex-col gap-6">
          <p className="max-w-lg mx-auto text-center">
            We make access to B2B financing simple and easy. No collaterals or
            long forms.
          </p>
          <div className="before:content-[''] before:block before:w-24 before:h-1 before:bg-brand-purple before:mx-auto before:my-4">
            <h4 className="">Fast-moving consumer goods (FMCG)</h4>
            <p className="">
              Get access to financial solutions that can help you keep your
              shelves stocked and respond to market demand quickly.
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/wwd.png`}
            alt="Hero"
            className="w-4/5 mx-auto h-auto"
          />
        </div>
      </div>
      <div className="">
        {" "}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Get easy and instant loan for your business
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-rows-1 px-2  items-center mx-4 text-center justify-between h-full gap-8  md:mx-20 my-12">
          {" "}
          <div className="">
            <img
              src={`${BaseDirectories.IMAGES_DIR}/landing/wwd.png`}
              alt="Hero"
              className="w-4/5 mx-auto h-auto"
            />
          </div>{" "}
          <div className="">
            <img
              src={`${BaseDirectories.IMAGES_DIR}/landing/wwd.png`}
              alt="Hero"
              className="w-4/5 mx-auto h-auto"
            />
          </div>{" "}
          <div className="">
            <img
              src={`${BaseDirectories.IMAGES_DIR}/landing/wwd.png`}
              alt="Hero"
              className="w-4/5 mx-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
