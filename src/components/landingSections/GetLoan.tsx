import Icon from "@mdi/react";
import BaseDirectories from "../../baseDir/baseDirectories";
import { mdiArrowRight } from "@mdi/js";
import toast from "react-hot-toast";

export default function GetLoan() {
  return (
    <section
      className="min-h-screen py-12"
      style={{
        backgroundImage: "url('/images/landing/bg2.png')",
        backgroundSize: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-6xl font-extrabold font-inter max-w-3xl text-center mx-auto mb-2">
          Get Easy and Instant Loan For Your Business
        </h2>
      </div>
      <div
        className="flex md:flex-row flex-col px-2 items-center mx-4 text-center justify-between gap-8  my-12 min-h-4/5 md:mx-20 "
        data-aos="fade-right"
        data-aos-offset="70"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
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
            <span
              className="flex text-brand-purple mt-4 font-bold cursor-pointer"
              onClick={() => {
                toast.success("Coming Soon");
              }}
            >
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
            <span
              className="flex text-brand-purple mt-4 font-bold cursor-pointer"
              onClick={() => {
                toast.success("Coming Soon");
              }}
            >
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
            <span
              className="flex text-brand-purple mt-4 font-bold cursor-pointer"
              onClick={() => {
                toast.success("Coming Soon");
              }}
            >
              <span className="">Learn More </span>{" "}
              <Icon className="ml-2" path={mdiArrowRight} size={1} />{" "}
            </span>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
