import Icon from "@mdi/react";
import BaseDirectories from "../../baseDir/baseDirectories";
import { mdiArrowRight } from "@mdi/js";
import toast from "react-hot-toast";

export default function GetLoan() {
  return (
    <section
      className="h-screen"
      style={{
        backgroundImage: "url('/images/landing/bg2.png')",
        backgroundSize: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <div className="text-center">
        <h2 className="text-4xl font-bold max-w-lg mx-auto mb-2">
          Get easy and instant loan for your business
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 px-2 items-center mx-4 text-center justify-between gap-8  my-12 min-h-4/5 md:mx-20">
        {" "}
        <div className="flex flex-col bg-brand-white p-4 rounded-xl shadow-md items-center gap-4 w-[400px] h-[620px]">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/wwd1.png`}
            alt="Hero"
            className=""
          />
          <div className="text-start mt-4">
            <h4 className="text-[28px] font-medium">
              Working Capital Financing
            </h4>
            <p className="text-xl mt-4">
              We can help you get the working capital you need to succeed. Apply
              now and expand your business
            </p>
            <span className="flex text-brand-purple mt-4 font-bold cursor-pointer" onClick={()=>{toast('Coming Soon')}}>
              <span className="">Learn More </span>{" "}
              <Icon className="ml-2" path={mdiArrowRight} size={1} />{" "}
            </span>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-brand-white p-4 rounded-xl shadow-md items-center gap-4 w-[400px] h-[620px]">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/wwd2.png`}
            alt="Hero"
            className="rounded-xl"
          />
          <div className="text-start mt-4">
            <h4 className="text-[28px] font-medium">
              Local Purchase Order Financing
            </h4>
            <p className="text-xl mt-4">
              We can help you take on larger orders and grow your business.
              Apply now and see the difference
            </p>
            <span className="flex text-brand-purple mt-4 font-bold">
              <span className="">Learn More </span>{" "}
              <Icon className="ml-2" path={mdiArrowRight} size={1} />{" "}
            </span>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-brand-white p-4 rounded-xl shadow-md items-center gap-4 w-[400px] h-[620px]">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/wwd3.png`}
            alt="Hero"
            className=""
          />
          <div className="text-start mt-4">
            <h4 className="text-[28px] font-medium">
              Invoice Discount Finance
            </h4>
            <p className="text-xl mt-4">
              We can help you improve your cash flow and keep your business
              running smoothly. Apply now and grow your business
            </p>
            <span className="flex text-brand-purple mt-4 font-bold">
              <span className="">Learn More </span>{" "}
              <Icon className="ml-2" path={mdiArrowRight} size={1} />{" "}
            </span>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
