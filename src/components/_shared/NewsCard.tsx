import { Link } from "react-router-dom";

export default function NewsCard({
  id = "",
  category = "Fina",
  date = "September 14, 2025",
  headline = "Sample headline goes here",
  readTime = "2 min read",
  image = "/images/money.png",
  bgGradient = "from-purple-900 via-purple-800 to-blue-900",
}) {
  return (
    <Link to={`/news`} className="block">
      <div className="bg-white text-start rounded-lg shadow-sm overflow-hidden max-w-7xl mx-auto cursor-pointer hover:shadow-lg transition">
        <div className="flex flex-col md:flex-row md:gap-20">

          {/* Left Section */}
          <div className="flex-1 p-6 lg:w-[814px]">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3 pt-3">
              <span className="md:text-[20px] font-bold text-[#612FCC]">{category}</span>
              <span className="font-semibold md:text-[20px]">{date}</span>
            </div>

            <div className="flex items-center justify-center pt-5 pb-5">
              <h2 className="md:text-[40px] font-semibold text-gray-900">{headline}</h2>
            </div>

            <div className="text-[24px] font-semibold text-[#612FCC] pt-5">{readTime}</div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[350px] h-[250px] md:h-[350px] flex-shrink-0 relative overflow-hidden mx-auto md:mx-0 mt-6 md:mt-0 pt-3 md:pr-3">
            <div className={`h-full bg-gradient-to-br ${bgGradient} relative`}>
              {image && (
                <img
                  src={image}
                  alt="news thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
}
