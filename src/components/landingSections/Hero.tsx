export default function Hero() {
  return (
    <section className="relative h-screen w-full grid grid-cols-2 bg-linear-to-br from-blue-400 via-purple-500 to-pink-600 text-center items-center px-20">
      <div className="text-white">
        <h1 className="text-5xl font-bold mb-4">Text</h1>
        <p className="text-xl">Hero content goes here</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full h-96 bg-white/20 rounded-lg flex items-center justify-center">
          Image
        </div>
      </div>
    </section>
  );
}
