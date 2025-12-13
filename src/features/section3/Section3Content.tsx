import Section3Card from "./Section3Card";
import Section3InfoBox from "./Section3InfoBox";

export default function Section3Content() {
  return (
    <div className="container mx-auto relative z-10 py-20">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">

        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          <Section3Card
            image="/assets/s3_1.png"
            subtitle="A better life"
            title="Heart surgery"
            text="Unlock innovative cardiac treatment options using modern surgical techniques."
          />

          <Section3Card
            image="/assets/s3_2.png"
            subtitle="Getting a new chance"
            title="Valve prolapse"
            text="Explore minimally invasive solutions for valve replacement and recovery."
          />

          <Section3Card
            image="/assets/s3_3.png"
            subtitle="Saving lives"
            title="Emergencies"
            text="Crisis interventions performed with professional medical teams."
          />

          <Section3Card
            image="/assets/s3_4.png"
            subtitle="Online care"
            title="Virtual"
            text="Speak instantly with a doctor online and get professional advice."
          />

        </div>
        <Section3InfoBox />

      </div>
    </div>
  );
}

