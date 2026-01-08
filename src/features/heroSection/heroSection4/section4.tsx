import Button from "@/components/Button";

export default function DoctorHero() {
  return (
    <section className="relative bg-[#1b1b1b] overflow-visible">
      <div className="container mx-auto relative min-h-[700px] px-4 sm:px-6 lg:px-0">

        <div className="
          absolute 
          left-1/2 -translate-x-1/2 
          lg:left-0 lg:translate-x-0 
          top-4 
          w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px] 
          z-10
        ">
          <img src="/assets/doc.png" alt="Doctor" className="w-full" />
        </div>
        <div className="
          relative lg:absolute
          lg:left-[200px] lg:bottom-[-210px]
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-4 sm:gap-6
          mt-12 lg:mt-0
          z-20
        ">
          {[
            {
              job: "FOUNDER / CHIEF SURGEON",
              name: "Walid Eltahlawy",
              desc:"Podcasting operational change management inside of workflows to establish a framework."
            },
            {
              job: "ASSISTANT SURGEON",
              name: "Anna Wilson",
              desc:"Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts."
            },
            {
              job: "LEAD NURSE",
              name: "Peggie Cannon",
              desc:"Seamlessly visualize quality intellectual capital without superior collaboration and installed base portals."
            },
            {
              job: "NURSE",
              name: "Hubert Jackson",
              desc:"Energistically scale future-proof core competencies vis-a-vis impactful experiences with optimal networks."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#222] text-white w-full max-w-[180px] mx-auto text-center shadow-lg flex flex-col"
            >
 <img
  src={`/assets/doc${index + 1}.png`}
  className="w-full h-[200px] object-contain bg-[#222]"
  alt={item.name}
/>


              <p className="text-[11px] text-gray-300 mt-2 leading-relaxed">
                {item.job}
              </p>
              <div className="w-16 h-px bg-orange-500 mt-3 mb-1 mx-auto"></div>
              <h4 className="mt-3 font-semibold text-sm">{item.name}</h4>
              <p className="text-xs text-gray-400 mb-6">{item.desc}</p>

              <Button
                href="/doctor-profile"
                variant="white"
                className="mt-auto text-xs py-1.5 px-3 w-full max-w-[120px] mx-auto h-10"
              >
                View Profile
              </Button>
            </div>
          ))}
        </div>

        <div className="ml-auto max-w-xl pt-16 lg:pt-32 px-0 sm:px-4 lg:pr-10 text-center lg:text-left">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            INTRODUCING OUR TEAM        
          </p>
          <div className="w-16 h-px bg-orange-500 mt-3 mb-4 mx-auto lg:mx-0"></div>
          <h1 className="text-4xl font-bold mt-2  text-orange-500">
            Great passion <br />
            <span className="text-white">for healing</span>
          </h1>

          <p className="text-white mt-4">
            Some up and coming trends are healthcare consolidation for independent healthcare
            centers that see a cut in unforeseen payouts. High deductible health plans are also
            expected to transpire along with a growth of independent practices.
          </p>
          <p className="text-orange-500 mt-2 text-center lg:text-right">
            Walid Eltahlawy
          </p>
          <p className="text-gray-300 mt-2 text-center lg:text-right">
            Cardiac transplant specialist   
          </p>
          <img
            src="/assets/signature.png"
            alt="Signature"
            className="mx-auto lg:ml-auto mt-4 w-32 opacity-80"
          />
        </div>

      </div>
    </section>
  );
}