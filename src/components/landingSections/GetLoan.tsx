import BaseDirectories from "../../baseDir/baseDirectories";

export default function GetLoan() {
  return (
    <section className="h-screen">
      {" "}
      <div className="text-center">
        <h2 className="text-4xl font-bold max-w-lg mx-auto mb-8">
          Get easy and instant loan for your business
        </h2>
      </div>
      <div
        className="grid md:grid-cols-3 grid-rows-1 px-2  items-center mx-4 text-center justify-between gap-8  my-12 min-h-4/5"
        style={{
          backgroundImage: "url('/images/landing/bg2.png')",
          // backgroundSize: "cover",
          backgroundPosition: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
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
    </section>
  );
}
