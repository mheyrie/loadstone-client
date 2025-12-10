export default function Testimonial() {
  return (
    <section className="my-10 mt-20">
      <div className="text-center">
        <h2 className="text-5xl font-inter font-bold mb-8 mx-2 tracking-wider">
          What our users are saying
        </h2>
        <p className="-mt-6 text-[24px]">
          We are Working to Serve the Next 400Million Customers
        </p>
      </div>
      <div className="mx-auto grid md:grid-cols-2 grid-cols-1 mt-6 max-w-6xl gap-8 p-8 ">
        <div className="flex flex-col justify-start items-start px-6 py-10 gap-4 bg-brand-white rounded-lg shadow-md">
          <div className="flex justify-start items-start gap-4 mb-4">
            <img
              src="/images/landing/test1.png"
              alt="Testimonial 1"
              className="w-16 h-16 mb-4"
            />
            <div className="flex flex-col justify-start items-start">
              <h4 className="text-xl font-bold">Ponfa Miner</h4>
              <span className="text-sm text-gray-500">Dornan Enterprises</span>
            </div>
          </div>
          <p className="text-lg italic">
            "Trade Lenda has transformed the way I manage my business finances.
            The loan application process was quick and straightforward, allowing
            me to access the funds I needed to grow my inventory and meet
            customer demands."
          </p>
          <span className="font-bold mt-4">- Aisha M., Lagos</span>
        </div>
        <div className="flex flex-col justify-start items-start px-6 py-10 gap-4 bg-brand-white rounded-lg shadow-md">
          <p className="text-lg italic">
            "As a small business owner, finding reliable financing options has
            always been a challenge. Trade Lenda provided me with a hassle-free
            solution that helped me expand my operations and take on larger
            orders."
          </p>
          <span className="font-bold mt-4">- Chinedu O., Abuja</span>
        </div>
      </div>
    </section>
  );
}
