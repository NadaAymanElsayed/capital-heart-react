
"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaInstagram, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const sectionBg = theme === "light" ? "bg-white" : "bg-[#111]";
  const textPrimary = theme === "light" ? "text-black" : "text-white";
  const textSecondary = theme === "light" ? "text-gray-700" : "text-gray-300";
  const highlight = "text-orange-500";

  return (
    <footer className={`transition-colors duration-300 ${sectionBg} ${textPrimary}`}>
      <div className="bg-transparent">
        <div className="border-b border-gray-700 h-20 w-full max-w-[1235px] mx-auto rounded-md pr-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-0 h-full">
            
            <div className="flex items-center gap-3 h-full">
              <img
                src="/assets/logoFooter.png"
                alt="Logo"
                className="h-full w-68 rounded-md" 
              />
              <div className="flex items-center gap-2 pl-40">
                <h1 className={`font-bold text-2xl ${textPrimary}`}>
                  WE CARE,
                </h1>
                <h1 className={`font-bold text-2xl ${highlight}`}>
                  WE CAN
                </h1>
              </div>
            </div>

            <div className="flex gap-4 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className={textPrimary} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className={textPrimary}/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className={textPrimary}/>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className={textPrimary}/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={textPrimary}/>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10 text-sm pl-10">
        
        <div>
          <h4 className={`font-semibold mb-3 ${textPrimary}`}>About</h4>
          <ul className={textSecondary + " space-y-2"}>
            <li>About Us</li>
            <li>Mission</li>
            <li>Vision</li>
            <li>Team</li>
          </ul>
        </div>

        <div>
          <h4 className={`font-semibold mb-3 ${textPrimary}`}>Services</h4>
          <ul className={textSecondary + " space-y-2"}>
            <li>Consulting</li>
            <li>Development</li>
            <li>Support</li>
            <li>Training</li>
          </ul>
        </div>

        <div>
          <h4 className={`font-semibold mb-3 ${textPrimary}`}>Quick Links</h4>
          <ul className={textSecondary + " space-y-2"}>
            <li>Projects</li>
            <li>News</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className={`font-semibold mb-3 ${textPrimary}`}>Contact</h4>
          <p className={`flex items-center gap-2 mb-2 ${textSecondary}`}>
            <FaPhoneAlt className={highlight} />
            +20 155 777 2331
          </p>
          <p className={`flex items-center gap-2 ${textSecondary}`}>
            <FaMapMarkerAlt className={highlight} />
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
