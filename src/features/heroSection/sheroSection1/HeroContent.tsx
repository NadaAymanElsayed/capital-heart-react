import Button from "../../../components/Button";

export default function HeroContent() {
  return (
    <div className="relative z-10 container mx-auto h-full flex items-center px-6">
      <div className="max-w-2xl text-white space-y-6">
        <p className="text-orange-400 font-semibold tracking-wide uppercase font-sans">
          Inspiring Better Health
        </p>

        <div className="w-16 h-1 my-4 bg-orange-500" />

        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-sans">
          A <span className="text-orange-400">healthy heart</span>, <br />{" "}
          healthy family.
        </h1>

        <p className="text-gray-200 text-lg max-w-lg font-sans">
          Globally harness multimedia based collaboration and idea-sharing with
          backend products. Continually whiteboard user-centric data.
        </p>

        <div className="flex gap-2 sm:gap-4 mt-4">
          <Button href="#services" className="text-xs sm:text-sm px-3 py-2">
            Discover More
          </Button>

          <Button
            href="#appointment"
            variant="primary"
            className="text-xs sm:text-sm px-3 py-2"
          >
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
