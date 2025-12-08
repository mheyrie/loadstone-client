import BaseDirectories from "../../baseDir/baseDirectories";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className=""
      style={{
        backgroundImage: "url('/images/landing/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid min-h-screen md:grid-cols-2 grid-rows-1 px-2  items-center py-20 text-center justify-between h-full gap-2  md:mx-20">
        <div className="text-white text-start flex flex-col mt-20 gap-6 ">
          <h1 className="text-5xl font-bold mb-4 md:max-w-lg">
            Driving Financial Inclusion for MSMEs
          </h1>
          <p className="text-xl md:max-w-md">
            Get the financial solution you need to purchase inventory, fulfill
            large orders, and grow your business.
          </p>
          <div className="mt-8">
            <Button
              content="Create an Account"
              classes="secondary-btn btn-sm "
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-white">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/landing/hero.png`}
            alt="Hero"
            className="max-w-full md:mt-28"
          />
        </div>
      </div>
    </section>
  );
}
