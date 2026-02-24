import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <h2 className="text-2xl font-semibold">SEOPro</h2>
            </div>

            <p className="text-[#CBD5E1] leading-relaxed">
              Your trusted partner in digital marketing and SEO excellence.
              We help businesses grow their online presence.
            </p>

            {/* SOCIAL */}
            <div className="flex space-x-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-lg
                  bg-[#112B4A] hover:bg-[#2563EB]
                  transition-all duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-[#CBD5E1]">
              <li><Link to="/" className="hover:text-[#38BDF8]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#38BDF8]">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#38BDF8]">Services</Link></li>
              <li><Link to="/blog" className="hover:text-[#38BDF8]">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#38BDF8]">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 text-[#CBD5E1]">
              <li className="hover:text-[#38BDF8] cursor-pointer">SEO Optimization</li>
              <li className="hover:text-[#38BDF8] cursor-pointer">Content Marketing</li>
              <li className="hover:text-[#38BDF8] cursor-pointer">Social Media Marketing</li>
              <li className="hover:text-[#38BDF8] cursor-pointer">PPC Advertising</li>
              <li className="hover:text-[#38BDF8] cursor-pointer">Web Analytics</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <div className="space-y-4 text-[#CBD5E1]">

              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-[#38BDF8]" />
                <p>
                  123 Marketing Street, Digital City,<br />
                  DC 12345
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#38BDF8]" />
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#38BDF8]" />
                <p>info@seopro.com</p>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#1E293B] mt-12 pt-6 text-center text-[#94A3B8]">
          © {new Date().getFullYear()} SEOPro. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;