export default function MapSection() {
  return (
    <div className="relative w-full h-[80vh]">

      <div className="absolute  left-1/7 -translate-x-1/2 h-[505px]
                      w-1/5 bg-[#555454] text-white p-6 
                      rounded-md z-10">
        <h2 className="text-orange-500 font-bold mb-6">WORKING HOURS</h2>

        <ul className="mb-10">
          <li>MON - WED: 8AM - 7PM</li>
          <div className="w-16 h-[2px] bg-orange-500 mt-3 mb-3"></div>
          <li>THU: 8AM - 5PM</li>
          <div className="w-16 h-[2px] bg-orange-500 mt-3 mb-3"></div>
          <li>FRI: 8AM - 5PM</li>
          <div className="w-16 h-[2px] bg-orange-500 mt-3 mb-3"></div>
          <li>SAT - SUN: Closed</li>
        </ul>

        <div className="mb-5">
          <h3 className="font-semibold">CALL US ANYTIME</h3>
          <p>+20 155 777 2931</p>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold">VISIT US ANYTIME</h3>
          <p className="text-sm">
            Medical City, R2 District, New Administrative Capital, Egypt
          </p>
        </div>

        <div>
          <h3 className="font-semibold">BOOK AN APPOINTMENT</h3>
          <p className="text-sm">Click here to book an appointment</p>
        </div>
      </div>

      <a
        href="https://maps.app.goo.gl/fQ479jM6N1YRUhi99?g_st=ipc"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <img
          src="/assets/map.png"
          alt="Map Location"
          className="w-full h-full object-cover"
        />
      </a>

    </div>
  );
}




