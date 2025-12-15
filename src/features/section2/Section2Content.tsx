export default function Section2Content() {
  return (
    <div className="relative z-10 container mx-auto py-20 text-white px-4 sm:px-10">
      
      <h3 className="text-sm uppercase tracking-wider text-orange-400">
        GREAT PRACTICE MEANS GREAT HEALTH CARE
      </h3>

      <h2 className="text-4xl font-bold mt-2">
        Capital <span className="text-orange-400">Heart care</span> in numbers
      </h2>

      <p className="max-w-xl mt-4 text-gray-300">
        Deeply analyze large hospital data sets to captivate customer needs.
        Objectively integrate emerging care competencies.
      </p>

     
      <div className="flex flex-row overflow-x-auto gap-6 mt-14 pb-4">
        {[
          { img: "/assets/frame1.png", title: "HEALTHY VISION", text: "Proactively enable cross-media information." },
          { img: "/assets/frame2.png", title: "SURGICAL SERVICES", text: "Providing innovative surgical care solutions." },
          { img: "/assets/frame3.png", title: "FIRST PRIORITY", text: "Focus entirely on patient comfort." },
          { img: "/assets/frame4.png", title: "EXPERT PERSONNEL", text: "Experience unrivaled medical professionals." },
        ].map((card, index) => (
          <div key={index} className="flex-shrink-0 w-64 flex flex-col items-center text-center">
            <img src={card.img} className="w-20 h-20" />
            <h4 className="mt-4 font-semibold">{card.title}</h4>
            <p className="text-sm text-gray-300">{card.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

