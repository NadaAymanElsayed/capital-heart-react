export default function Section2Content() {
  return (
    <div className="relative z-10 container mx-auto py-20 text-white px-10">
      
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">

        <div className="flex flex-col items-center text-center">
          <div >
            <img src="/assets/frame1.png" className="w-25 h-25" />
          </div>
          <h4 className="mt-4 font-semibold">HEALTHY VISION</h4>
          <p className="text-sm text-gray-300">
            Proactively enable cross-media information.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div >
            <img src="/assets/frame2.png" className="w-25 h-25" />
          </div>
          <h4 className="mt-4 font-semibold">SURGICAL SERVICES</h4>
          <p className="text-sm text-gray-300">
            Providing innovative surgical care solutions.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div >
            <img src="/assets/frame3.png" className="w-25 h-25" />
          </div>
          <h4 className="mt-4 font-semibold">FIRST PRIORITY</h4>
          <p className="text-sm text-gray-300">
            Focus entirely on patient comfort.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div >
            <img src="/assets/frame4.png" className="w-25 h-25" />
          </div>
          <h4 className="mt-4 font-semibold">EXPERT PERSONNEL</h4>
          <p className="text-sm text-gray-300">
            Experience unrivaled medical professionals.
          </p>
        </div>
      </div>

    </div>
  );
}
