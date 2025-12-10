import { mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import LoanCalc from "./LoanCalc";

export default function HowItWorks() {
  return (
    <section className="my-10 mt-20">
      <div className="text-center flex flex-col justify-center items-center">
        <div className="text-xmd text-brand-purple flex justify-center items-center font-bold mb-4">
          {" "}
          <Icon path={mdiCircleSmall} size={2} />{" "}
          <span className=" uppercase">how it works</span>{" "}
        </div>
        <h2 className="text-6xl font-inter font-extrabold mb-8 mx-2 max-w-5xl text-center">
          Access financial solution for your business
        </h2>
      </div>
      <div className="mx-auto grid md:grid-cols-2 grid-cols-1 mt-12 max-w-5xl shadow-2xl bg-brand-white rounded-l-2xl">
       <LoanCalc />
        <div className=" flex flex-col justify-center items-center px-6 py-10 gap-6">
          <div className="flex justify-start items-center gap-2 mb-2">
            <div className="before:content-[''] before:block before:w-2 before:h-32 before:bg-brand-purple before:mx-auto before:my-4" />
            <div className="text-start">
              <h2 className="">Create an account</h2>
              <p className="">Create an Account with Trade Lenda and access funding to grow your business</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 mb-2">
            <div className="before:content-[''] before:block before:w-2 before:h-32 before:bg-[#EAA942] before:mx-auto before:my-4" />
            <div className="text-start"> 
              <h2 className="text-[#EAA942">Complete profile</h2>
              <p className="">Complete your profile by telling about your business and uploading documents to verify your business.</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 mb-2">
            <div className="before:content-[''] before:block before:w-2 before:h-32 before:bg-brand-purple before:mx-auto before:my-4" />
            <div className="text-start">
              <h2 className="">Apply for loan</h2>
              <p className="">Apply for our lending financial solution no long forms or collateral</p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
