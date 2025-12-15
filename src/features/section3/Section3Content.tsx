import Section3Card from "./Section3Card";
import Section3InfoBox from "./Section3InfoBox";

export default function Section3Content() {
  const cards = [
    {
      image: "/assets/s3_1.png",
      subtitle: "A better life",
      title: "Heart surgery",
      text: "Unlock innovative cardiac treatment options using modern surgical techniques.",
    },
    {
      image: "/assets/s3_2.png",
      subtitle: "Getting a new chance",
      title: "Valve prolapse",
      text: "Explore minimally invasive solutions for valve replacement and recovery.",
    },
    {
      image: "/assets/s3_3.png",
      subtitle: "Saving lives",
      title: "Emergencies",
      text: "Crisis interventions performed with professional medical teams.",
    },
    {
      image: "/assets/s3_4.png",
      subtitle: "Online care",
      title: "Virtual",
      text: "Speak instantly with a doctor online and get professional advice.",
    },
  ];

  return (
    <div className="container mx-auto relative z-10 py-20 px-4 sm:px-10">
      
      {/* grid on desktop, scrollable row on mobile */}
      <div className="flex flex-row overflow-x-auto gap-6 md:grid md:grid-cols-5 md:gap-6 pb-4">

        {/* 4 cards */}
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-64 md:w-auto">
            <Section3Card
              image={card.image}
              subtitle={card.subtitle}
              title={card.title}
              text={card.text}
            />
          </div>
        ))}

        {/* Right box */}
        <div className="flex-shrink-0 w-64 md:w-auto">
          <Section3InfoBox />
        </div>

      </div>
    </div>
  );
}


