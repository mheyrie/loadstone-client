import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TESTIMONIALS = [
  {
    img: "/images/landing/test1.png",
    name: "Ponfa Miner",
    company: "Dornan Enterprises",
    testimony:
      "Load Stone has transformed the way I manage my business finances. The loan application process was quick and straightforward, allowing me to access the funds I needed to meet customer demands.",
    // author: "- Aisha M., Lagos",
  },
  {
    img: "/images/landing/test2.png",
    name: "Chinedu O.",
    company: "Unipolar Education consults",
    testimony:
      "As a small business owner, finding reliable financing options has always been a challenge. Load Stone provided me with a hassle-free solution that helped me expand my operations and take on larger orders.",
    // author: "- Chinedu O., Abuja",
  },
  {
    img: "/images/landing/test1.png",
    name: "Chinedu O.",
    company: "Business Owner",
    testimony:
      "As a small business owner, finding reliable financing options has always been a challenge. Load Stone provided me with a hassle-free solution that helped me expand my operations and take on larger orders.",
    // author: "- Chinedu O., Abuja",
  },
];

export default function Testimonial() {
  return (
    <section className="my-10 mt-20">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl font-inter font-bold mb-4 tracking-wider">
          What our users are saying
        </h2>
        <p className="text-[24px] -mt-2">
          We are Working to Serve the Next 400 Million Customers
        </p>
      </div>

      {/* Swiper */}
      <div className="mx-auto mt-12 max-w-7xl px-8 pb-20">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="pb-12"
        >
          {TESTIMONIALS.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col px-6 py-10 gap-4 bg-white rounded-lg shadow-md h-full min-h-[350px]">
                <div className="flex gap-2 mb-4">
                  <img src={item.img} alt={item.name} className="w-14 h-14" />
                  
                  <div>
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <span className="text-sm text-gray-500">{item.company}</span>
                  </div>
                </div>
                <p className="text-sm text-start">{item.testimony}</p>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                {/* <span className="font-bold mt-2">{item.author}</span> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-purple-light transition shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center hover:bg-brand-purple-light transition shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
