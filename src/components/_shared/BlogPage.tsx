import NewsCard from "./NewsCard";

const newsList = [
    {
        category: "Finance",
        date: "September 14, 2025",
        headline: "97k Crypto Investors Burnt As High US Inflation Data Wipes Out $89 Billion Market Value",
        readTime: "2 min read",
        image: "/images/money.png",
        bgGradient: "from-purple-900 via-purple-800 to-blue-900",
    },
    {
        category: "Finance",
        date: "September 14, 2025",
        headline: "97k Crypto Investors Burnt As High US Inflation Data Wipes Out $89 Billion Market Value",
        readTime: "2 min read",
        image: "/images/money.png",
        bgGradient: "from-purple-900 via-purple-800 to-blue-900",
    },
    {
        category: "Finance",
        date: "September 14, 2025",
        headline: "97k Crypto Investors Burnt As High US Inflation Data Wipes Out $89 Billion Market Value",
        readTime: "2 min read",
        image: "/images/money.png",
        bgGradient: "from-purple-900 via-purple-800 to-blue-900",
    },

];

export default function BlogPage() {
    return (
        <div className="py-10 space-y-6 max-w-8xl mx-auto">
            {newsList.map((news, index) => (
                <NewsCard key={index} {...news} />
            ))}
        </div>
    );
}
