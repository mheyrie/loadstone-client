import LandingLayout from "../../components/_shared/LandingLayout";
import BaseDirectories from '../../baseDir/baseDirectories';

export default function AboutUs() {
  return (

    <LandingLayout>
    <section className="font-montserrat w-screen text-xl flex justify-center items-center">
      <div className="w-full bg-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full h-[600px] sm:h-[700px] md:h-[776px] bg-aboutus text-white font-inter text-center overflow-hidden px-4">

          {/* Left Africa image */}
          <img
            src={`${BaseDirectories.ABOUT_US_DIR}/africa.png`}
            alt="Left Africa"
            className="absolute bottom-6 left-4 w-16 sm:w-24 sm:left-6 md:w-auto md:bottom-1/6 md:left-20 md:brightness-10 md:opacity-50 z-10"
          />

          {/* Big Africa image vector */}
          <img
            src={`${BaseDirectories.ABOUT_US_DIR}/africa-big.png`}
            alt="Big Africa"
            className="absolute top-10 left-1/2 -translate-x-1/2 
            w-52 opacity-30
            sm:w-72 sm:top-14
            md:w-[1000px] md:top-20 md:left-1/5 md:translate-x-0 md:brightness-75 md:opacity-50 z-20"
          />

          {/* Right Africa image vector */}
          <img
            src={`${BaseDirectories.ABOUT_US_DIR}/africa.png`}
            alt="Right Africa"
            className="absolute top-6 right-4 
            w-16 opacity-30
            sm:w-24 sm:right-6
            md:w-auto md:top-1/6 md:right-25 md:brightness-20 md:opacity-50 z-10"
          />

          {/* Centered Text */}
          <div className="absolute inset-0 flex justify-center items-center z-50 px-6">
            <h2 className="text-xl  md:text-6xl font-bold leading-tight">
              Providing accessible financing to <br className="hidden md:block" /> SMEs across Africa
            </h2>
          </div>
        </section>

        {/* ================= MISSION SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-14 md:gap-20">

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={`${BaseDirectories.ABOUT_US_DIR}/threeman.png`}
              alt="Three men"
              className="rounded-xl w-full"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full text-start">
            <h3 className="text-[#6993C2] text-2xl font-semibold tracking-wide">OUR MISSION</h3>

            <h2 className="text-3xl  md:text-4xl  font-bold text-[#14142B] md:whitespace-nowrap mt-2 ">
              SMEs <span className="text-[#054B99]">•</span> Finance <span className="text-[#054B99]">•</span> Growth
            </h2>

            <p className="mt-4 font-medium md:text-[24px] text-[#4E4B66] fw-500   leading-relaxed">
            We believe that every business has a higher potential to grow bigger when provided financial support. And we are on a mission to help SMEs accross emerging markets access financing for business growth. </p>
          </div>

        </section>

        {/* ================= WHO WE ARE SECTION ================= */}
        <section className="max-w-7xl  mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-14 md:gap-20">

          {/* Text */}
          <div className="md:w-1/2 w-full text-start">
            <h3 className="text-[#6993C2] md:text-2xl font-semibold tracking-wide">WHO WE ARE</h3>

            <h2 className="text-3xl md:text-4xl  font-bold text-[#14142B] mt-2">Digital supply chain bank</h2>

            <p className="mt-4 font-medium text-[24px] text-[#4E4B66] fw-500 leading-relaxed">
             We are a financial service company that assists Micro, Small and informal retailers with access to financing for business needs. We also assist retailers with access to distributors and manufacturers. We currently operate out of Lagos, Nigeria.    </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={`${BaseDirectories.ABOUT_US_DIR}/twoladies.png`}
              alt="Two ladies"
              className="rounded-xl w-full"
            />
          </div>

        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="bg-[#F8F9FB] text-[20px] w-full py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl  md:text-4xl font-bold text-[#14142B] mb-8 whitespace-nowrap">
              Our core values
            </h2>

            <div className="flex flex-wrap justify-center gap-16 md:gap-20 pb-12">

              
              <div className="w-full max-w-[326px] md:w-1/4 text-[#14142B] font-semibold flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                  <img src={`${BaseDirectories.ICONS_DIR}/profession.png`} alt="Professionalism" />
                </div>
                <h4 className="text-3xl font-semibold mb-2">Professionalism</h4>
                <p className="text-center">our goal is to pay attention to you and give you utmost satisfaction.</p>
              </div>

              <div className="w-full max-w-[326px] md:w-1/4 text-[#14142B] font-semibold flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                  <img src={`${BaseDirectories.ICONS_DIR}/bulb.png`} alt="Innovation" />
                </div>
                <h4 className="text-3xl mb-2">Innovation</h4>
                <p>We embrace new ideas, and strategic methods to improve your experience</p>
              </div>

              <div className="w-full max-w-[326px] md:w-1/4 text-[#14142B] font-semibold flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                  <img src={`${BaseDirectories.ICONS_DIR}/headset.png`} alt="Service" />
                </div>
                <h4 className="text-3xl mb-2">Service</h4>
                <p>We focus on going beyond your imaginations to meet your business needs.</p>
              </div>

            </div>

            <div className="flex flex-wrap justify-center gap-12 mt-8">
              <div className="w-full max-w-[347px] sm:w-1/2 md:w-1/3 text-[#14142B] font-semibold flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                  <img src={`${BaseDirectories.ICONS_DIR}/diamond.png`} alt="Excellence" />
                </div>
                <h4 className="text-3xl mb-2">Excellence</h4>
                <p>We set and achieve ambitious goals. we are passionate about people, process and our product.</p>
              </div>

              <div className="w-full max-w-[326px] sm:w-1/2 md:w-1/3 text-[#14142B] font-semibold flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-md mb-4">
                  <img src={`${BaseDirectories.ICONS_DIR}/speed.png`} alt="Speed" />
                </div>
                <h4 className="text-3xl mb-2">Speed</h4>
                <p>Time is a money, so we stay ahead to help you take your business to the next level. </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </section>
    </LandingLayout>
  );
}
