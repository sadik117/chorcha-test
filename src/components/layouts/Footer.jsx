import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Left Section */}
        <div className="md:col-span-1">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold">চর্চা'Merch</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 my-4">
            <Facebook className="w-6 h-6 cursor-pointer hover:opacity-70" />
            <Instagram className="w-6 h-6 cursor-pointer hover:opacity-70" />
            <Youtube className="w-6 h-6 cursor-pointer hover:opacity-70" />
          </div>

          {/* Contact Info */}
          <div className="mt-6 leading-relaxed text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} /> admin@pentamart.com.bd
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Phone size={16} /> 0900009888
            </div>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-4 text-sm tracking-wide">
            COMPANY
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>About Us</li>
            <li>Our Brands</li>
            <li>Blogs</li>
            <li>Press Coverage</li>
            <li>Order Tracking</li>
            <li>Trade In</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4 text-sm tracking-wide">
            COMPANY
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>About Us</li>
            <li>Our Brands</li>
            <li>Blogs</li>
            <li>Press Coverage</li>
            <li>Order Tracking</li>
            <li>Trade In</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4 text-sm tracking-wide">
            HELP CENTER
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>FAQ</li>
            <li>Support Center</li>
            <li>Announcement</li>
            <li>Corporate</li>
            <li>Feedback</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4 text-sm tracking-wide">
            TERMS & CONDITIONS
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Warranty Policy</li>
            <li>Exchange Policy</li>
            <li>EMI Policy</li>
            <li>Others Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-3 text-center text-xs text-gray-300">
        © 2025 Thanks From Pentamart® Ltd. | All rights reserved
      </div>
    </footer>
  );
}
