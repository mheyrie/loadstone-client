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
      <section className="h-screen text-3xl flex justify-center items-center">
        <div
          className=""
          style={{
            backgroundImage: "url('/images/landing/herobg3.png')",
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
          <div />
        </div>
        <div className="">
          <div className="bg-white rounded-3xl">
            <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/market.png`}
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
