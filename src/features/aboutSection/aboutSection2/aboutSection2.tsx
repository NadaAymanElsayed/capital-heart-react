export default function AboutSection2 (){
    const values = [
  {
    title: "DOCTOR YOU CHOOSE",
    desc: "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications.",
    icon: "/assets/img1.png",
  },
  {
    title: "YOUR HEALTHCARE",
    desc: "Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core.",
    icon: "/assets/img2.png",
  },
  {
    title: "ALWAYS THERE FOR YOU",
    desc: "Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics.",
      icon: "/assets/img3.png",
  },
  {
    title: "NURSING STAFF",
    desc: "Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities.",
      icon: "/assets/img4.png",
  },
  {
    title: "EMERGENCY SERVICES",
    desc: "Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply.",
   icon: "/assets/img5.png",
  },
  {
    title: "PREMIUM FACILITIES",
    desc: "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes.",
       icon: "/assets/img6.png",
  },
];

return(
    <section className="bg-black pt-10 pb-39">
  <div className="pl-15">
      <h1 className="text-1xl mt-2 text-white ">
        MEDICAL EXCELLENCE, COMPASSIONATE CARE
    </h1>
    <div className="w-16 h-px bg-orange-500 mt-3 mb-4 mx-auto lg:mx-0 "></div>
    <h2 className=" text-white text-5xl">
        What we stand for?
    </h2>
    <h2 className="font-weight: 700 text-5xl text-orange-500 pb-10">
        Our core values
    </h2>
<h6 className="text-white text-xl font-weight: 300">
    Completely synergize resource taxing relationships via premier niche markets.<br />
    Professionally cultivate one-to-one customer service with robust ideas.
</h6>

  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-15">
  {values.map((item, index) => (
    <div key={index} className="flex gap-4">
      
     <img
    src={item.icon}
    alt={item.title}
    className="w-10 h-10 object-contain"
  />


      <div>
        <h3 className="text-white text-xl font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>

    </div>
  ))}
</div>

  
    </section>
)
}
