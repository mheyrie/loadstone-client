import Button from "@/components/ui/Button";
import LandingLayout from "../../components/_shared/LandingLayout";
import BaseDirectories from "@/baseDir/baseDirectories";

export default function Finance() {
  return (
    <LandingLayout>
      <title>Finance - Loadstone Financial</title>
      <meta
        name="description"
        content="Explore financial solutions with Loadstone Financial"
      />
      <section className="">
        <div
          className=""
          style={{
            backgroundImage: "url('/images/landing/herobg2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div
            className="px-2 flex pt-10 text-center justify-between gap-2  md:mx-20"
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            style={{
              backgroundImage: "url('/images/landing/herobg2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white text-start flex flex-col mt-20 gap-6 ">
              <h3 className="uppercase text-start text-brand-purple-light">
                {" "}
                finance
              </h3>
              <h1 className="text-5xl font-bold mb-4 md:max-w-lg">
                Access instant loan for your business
              </h1>
              <p className="text-xl md:max-w-md">
                No long wait, no need for collateral, get up to N10M loan within
                six hours
              </p>
              <div className="mt-8">
                <Button content="Get Loan" classes="secondary-btn btn-sm " />
              </div>
            </div>
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/market.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>
          </div>{" "}
        </div>
        <section
          className="grid  grid-rows-1 px-2  items-center gap-2  md:mx-16"
          data-aos="fade-up"
          data-aos-offset="70"
          data-aos-delay="3"
          data-aos-mirror="true"
        >
          <div
            className="grid md:grid-cols-2 grid-cols-1 justify-center  text-start items-center gap-8"
            data-aos="fade-down"
          >
            <div className="">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Streamline your supply chain with our local purchase order
                financing,
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                Are you a small or medium-sized business looking to expand your
                operations and take on large orders? with our purchase order
                financing you can do the following:
              </p>
              <Button content="Get Funding Now" classes="primary-btn btn-sm " />
            </div>
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/img5.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>
          </div>
          <div
            className="grid md:grid-cols-2 grid-cols-1 justify-center  text-start items-center gap-8 mt-6"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/img3.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>{" "}
            <div className="">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Unlock the power of working capital.
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                Are you struggling to keep up with day-to-day expenses or
                looking to expand your business? Our working capital solutions
                provide the funds you need to do the following
              </p>
              <Button content="Get Funding Now" classes="primary-btn btn-sm " />
            </div>
          </div>
          <div
            className="grid md:grid-cols-2 grid-cols-1 justify-center  text-start items-center gap-8 my-6"
            data-aos="fade-down"
          >
            <div className="">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Improve your cash flow with invoice discounting finance.
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                Are you tired of waiting for your customers to pay their
                invoices? We provide the funding you need to improve your cash
                flow and keep your business running smoothly. How?
              </p>
              <Button content="Get Funding Now" classes="primary-btn btn-sm " />
            </div>
            <div className="flex items-center justify-center text-white">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/img2.png`}
                alt="Hero"
                className="max-w-full md:mt-16"
              />
            </div>
          </div>
        </section>
      </section>
    </LandingLayout>
  );
}
