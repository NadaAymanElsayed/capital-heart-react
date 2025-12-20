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
    <div className="container mx-auto relative z-10 py-20 px-4 sm:px-10 overflow-x-hidden">
      
<div className="flex flex-row overflow-x-auto md:overflow-x-hidden gap-4 md:grid md:grid-cols-5 md:gap-3 pb-4">

        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-64 md:w-full">
            <Section3Card
              image={card.image}
              subtitle={card.subtitle}
              title={card.title}
              text={card.text}
            />
          </div>
        ))}

        {/* Info box in same row */}
        <div className="flex-shrink-0 w-64 md:w-full">
          <Section3InfoBox />
        </div>

      </div>
    </div>
  );
}
