import Button from "@/components/ui/Button";
import LandingLayout from "../../components/_shared/LandingLayout";
import BaseDirectories from "@/baseDir/baseDirectories";

export default function SavingsInvestment() {
  return (
    <LandingLayout>
      <title>Savings & Investment - Loadstone Financial</title>
      <meta
        name="description"
        content="Explore savings and investment opportunities with Loadstone Financial"
      />
      <section className="">
        <div
          className=""
          style={{
            backgroundImage: "url('/images/landing/herobg3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full text-white text-start flex flex-col pt-20 gap-6 md:mx-16 pb-4">
            <h3 className="uppercase text-start text-brand-purple-light">
              {" "}
              SAVING & INVESTMENT
            </h3>
            <h1 className="text-5xl font-bold mb-4 max-w-4xl">
              Achieve your business dream with a saving plan
            </h1>
            <p className="text-xl md:max-w-md">
              No long wait, no need for collateral, get up to N10M loan within
              six hours
            </p>
            <div className="mt-8">
              <Button content="Start Saving" classes="secondary-btn btn-sm " />
            </div>
          </div>
          <div />
        </div>
        <div className="">
          <div className="bg-white max-w-2xl rounded-3xl">
            <img
              src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/img4.png`}
              alt="Hero"
              className="max-w-full md:mt-16"
            />
            <h2 className="">
              Explore savings and investment opportunities with Loadstone
            </h2>
          </div>
          <div className=""></div>
        </div>
      </section>
    </LandingLayout>
  );
}
