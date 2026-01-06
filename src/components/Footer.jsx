import { FaFacebookF, FaTwitter ,FaLinkedinIn, FaYoutube, FaInstagram , FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300">
       <div className="bg-black">
        <div className="border-b border-gray-700 bg-white h-20 w-[1200px] mx-auto rounded-md pr-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-0 h-full">
          
          <div className="flex items-center gap-3 h-full">
            <img
              src="/assets/logoFooter.png"
              alt="Logo"
              className="h-full w-auto rounded-md" 
            />
<div className="flex items-center gap-2 pl-40">
  <h1 className="text-black font-bold text-2xl">
    WE CARE,
  </h1>
  <h1 className="text-orange-500 font-bold text-2xl">
    WE CAN
  </h1>
</div>

          </div>

       <div className="flex gap-4 text-lg">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-black" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-black"/>
  </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="text-black"/>
  </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="text-black"/>
  </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-black"/>
  </a>
</div>
        </div>
      </div>
 </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10 text-sm pl-10">
        
        <div>
          <h4 className="text-white font-semibold mb-3 ">About</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Mission</li>
            <li>Vision</li>
            <li>Team</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            <li>Consulting</li>
            <li>Development</li>
            <li>Support</li>
            <li>Training</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>Projects</li>
            <li>News</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

    <div>
  <h4 className="text-white font-semibold mb-3">Contact</h4>
  <p className="flex items-center gap-2 mb-2">
    <FaPhoneAlt className="text-orange-500" />
    +20 155 777 2331
  </p>
  <p className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-orange-500" />
    Cairo, Egypt
  </p>
</div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-xs">
        © 2026 WE CAN. All rights reserved.
      </div>
    </footer>
  );
}
