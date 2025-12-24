export default function Hero6Content() {
  return (
    <section className="bg-[#1b1b1b] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-sm tracking-widest text-gray-300 uppercase">
          OUR DOCTORS, OUR COMMUNITY
        </h3>

        <div className="w-16 h-[2px] bg-orange-500 mt-3 mb-6"></div>

        <div className="flex flex-wrap gap-2 mb-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl">
            Meet Our
          </h1>
          <h1 className="text-orange-500 font-bold text-4xl md:text-5xl">
            Distinguished
          </h1>
          <h1 className="text-white text-4xl md:text-5xl">
            Medical Team
          </h1>
        </div>

        <p className="text-gray-300 max-w-2xl mb-10 leading-relaxed">
          We believe that great doctors aren’t just experts in healthcare —
          they’re people who inspire, support, and lead by example in and out
          of the hospital.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {["hero6-1.png", "hero6-2.png", "hero6-3.png", "hero6-4.png"].map(
            (img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={`/assets/${img}`}
                  className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
