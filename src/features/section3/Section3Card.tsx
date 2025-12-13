interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  isBlack?: boolean; 
}

export default function Section3Card({ image, title, subtitle, text, isBlack }: CardProps) {
  return (
 <div className={`${isBlack ? "bg-black" : "bg-[#F58220]"} text-white flex flex-col h-[480px]`}>


      <img src={image} className="w-full h-40 object-cover" />

      <div className="p-6 flex flex-col flex-grow">

        <h4 className="text-xs font-semibold uppercase tracking-wider">
          {subtitle}
        </h4>

        <h3 className="text-xl font-semibold mt-1">{title}</h3>

        <div className="w-10 h-[2px] bg-black mt-2"></div>

        <p className="text-sm mt-4 flex-grow">
          {text}
        </p>

        <button className="mt-auto bg-transparent border border-white py-2 px-4 text-sm font-medium transition hover:bg-white hover:text-black">
          Find out more
        </button>

      </div>
    </div>
  );
}

