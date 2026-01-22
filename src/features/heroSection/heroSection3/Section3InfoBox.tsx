export default function Section3InfoBox() {
  return (
    <div className="bg-black text-white w-full md:w-64 h-[480px] p-6 flex flex-col gap-6 justify-center">
      <div>
        <h3 className="text-lg font-semibold">24/7 EMERGENCY</h3>
        <div className="w-10 h-[2px] bg-[#F58220] mt-2"></div>
        <p className="text-sm mt-3 text-gray-300">+01 234 567 8901</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">OUR LOCATION</h3>
        <div className="w-10 h-[2px] bg-[#F58220] mt-2"></div>
        <p className="text-sm mt-3 text-gray-300">
          3rd Street, Downtown Cairo, Egypt
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">DEDICATED DOCTORS</h3>
        <div className="w-10 h-[2px] bg-[#F58220] mt-2"></div>
      <p className="text-sm mt-3 text-gray-300">
  More than 30 specialists are <br />
  here for your health.
</p>

      </div>
    </div>
  );
}
