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
            className="min-h-screen px-2 flex flex-col py-20 text-center justify-between h-full gap-2  md:mx-20"
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
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
          </div>
          <section
            className="grid min-h-screen  grid-rows-1 px-2  items-center py-20 text-center justify-between h-full gap-2  md:mx-20"
            data-aos="fade-up"
            data-aos-offset="70"
            data-aos-delay="3"
            data-aos-mirror="true"
          >
            <div className="" data-aos="fade-down">
              <div className="">
                <h2 className="">
                  Streamline your supply chain with our local purchase order
                  financing,
                </h2>
                <p className="">
                  Are you a small or medium-sized business looking to expand
                  your operations and take on large orders? with our purchase
                  order financing you can do the following:
                </p>
                <Button content="Get Funding Now" classes="secondary-btn btn-sm " />
              </div>
              <div className="flex items-center justify-center text-white">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/portrait.png`}
                  alt="Hero"
                  className="max-w-full md:mt-16"
                />
              </div>
            </div>
            <div className=""></div>
            <div className=""></div>
          </section>
        </div>
      </section>
    </LandingLayout>
  );
}
