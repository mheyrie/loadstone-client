import Button from "@/components/ui/Button";
import LandingLayout from "../../components/_shared/LandingLayout";
import BaseDirectories from "@/baseDir/baseDirectories";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
          <div className="w-full text-white text-start flex flex-col md:pt-28 gap-6 md:mx-16 pb-4">
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
        <div
          className="mx-10 md:space-y-14 space-y-4 py-4"
          data-aos="fade-up"
          data-aos-offset="70"
          data-aos-delay="3"
          data-aos-mirror="true"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-4">
            <div className="bg-white max-w-md rounded-3xl">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/img1.png`}
                alt="Hero"
                className="w-full "
              />
              <h2 className="max-w-sm mt-6 mb-4 md:mx-10 mx-2 text-start">
                Flexible saving and withdrawal options
              </h2>
            </div>
            <div className="text-start">
              <p className="text-start text-xl mb-6 md:max-w-md">
                Diversify your investment portfolio, Get your money working for
                you and earn attractive returns on your investment
              </p>
              <div className="space-y-4">
                {" "}
                <div className="flex gap-2 items-center">
                  {" "}
                  <Input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    value="newsletter"
                    checked
                    className="size-8 accent-[#EBF9F6] rounded text-yellow-400 focus:ring-red-400"
                  />{" "}
                  <Label htmlFor="subscribe">Cover operating expenses</Label>{" "}
                </div>
                <div className="flex gap-2 items-center">
                  {" "}
                  <Input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    value="newsletter"
                    checked
                    className="size-8 accent-[#EBF9F6] rounded text-yellow-400 focus:ring-red-400"
                  />{" "}
                  <Label htmlFor="subscribe">
                    Invest in growth opportunities.
                  </Label>{" "}
                </div>
                <div className="flex gap-2 items-center">
                  {" "}
                  <Input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    value="newsletter"
                    checked
                    className="size-8 accent-[#EBF9F6] rounded text-yellow-400 focus:ring-red-400"
                  />{" "}
                  <Label htmlFor="subscribe">Purchase inventory</Label>{" "}
                </div>
              </div>

              <Button
                content="Invest Now"
                classes="primary-btn btn-sm mt-4 rounded-sm!"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-4">
            <div className="bg-white max-w-md rounded-3xl">
              <div className="w-full bg-brand-purple-light h-[343px] rounded-2xl" />
              <h2 className="max-w-sm mt-6 mb-4 md:mx-10 mx-2 text-start">
                Flexible saving and withdrawal options
              </h2>
            </div>
            <div className="text-start">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Unlock the power of working capital.
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                Are you struggling to keep up with day-to-day expenses or
                looking to expand your business? Our working capital solutions
                provide the funds you need to do the following
              </p>
              <div className="space-y-4">
                {" "}
                <div className="flex gap-2 items-center">
                  {" "}
                  <Input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    value="newsletter"
                    checked
                    className="size-8 accent-[#EBF9F6] rounded text-yellow-400 focus:ring-red-400"
                  />{" "}
                  <Label htmlFor="subscribe">Cover operating expenses</Label>{" "}
                </div>
                <div className="flex gap-2 items-center">
                  {" "}
                  <Input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    value="newsletter"
                    checked
                    className="size-8 accent-[#EBF9F6] rounded text-yellow-400 focus:ring-red-400"
                  />{" "}
                  <Label htmlFor="subscribe">
                    Invest in growth opportunities.
                  </Label>{" "}
                </div>
                <div className="flex gap-2 items-center">
                  {" "}
                  <Input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    value="newsletter"
                    checked
                    className="size-8 accent-[#EBF9F6] rounded text-yellow-400 focus:ring-red-400"
                  />{" "}
                  <Label htmlFor="subscribe">Purchase inventory</Label>{" "}
                </div>
              </div>

              <Button
                content="Invest Now"
                classes="primary-btn btn-sm mt-4 rounded-sm!"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center pb-10">
            <div className="bg-white max-w-md rounded-3xl">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/landing/Finance/img4.png`}
                alt="Hero"
                className="w-full "
              />
              <h2 className="max-w-sm mt-6 mb-4 md:mx-10 mx-2 text-start">
                Profitable returns From Investment
              </h2>
            </div>
            <div className="text-start">
              <h1 className="font-bold text-4xl mb-4 md:max-w-lg">
                Earn returns by supporting a $5trn supply value chain.
              </h1>
              <p className="text-start text-xl mb-6 md:max-w-md">
                Are you struggling to keep up with day-to-day expenses or
                looking to expand your business? Our working capital solutions
                provide the funds you need to do the following
              </p>
              <div className="flex gap-2 items-center">
                {" "}
                <Input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  value="newsletter"
                  checked
                  className="size-8 accent-[#EBF9F6] rounded text-yellow-400 focus:ring-red-400"
                />{" "}
                <Label htmlFor="subscribe">
                  Invest in growth opportunities.
                </Label>{" "}
              </div>

              <Button
                content="Invest Now"
                classes="primary-btn btn-sm mt-4 rounded-sm!"
              />
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
