import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import WareLogo from "../utilis/Images/ware-logo.png";

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 lg:px-8 bg-[#f4e7db] text-gray-700 py-3">
      <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center md:text-left justify-between">
          
          {/* Left Section - About Us */}
          <div>
            <h3 className="text-lg font-semibold">About us</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:underline">Ware store - Lower Parel, Mumbai</a></li>
              <li><a href="#" className="hover:underline">Restaurant & café tableware</a></li>
              <li><a href="#" className="hover:underline">Blogs - Our learnings & thoughts</a></li>
              <li><a href="#" className="hover:underline">Return or Exchange your order</a></li>
              <li><a href="#" className="hover:underline">Events - you do not want to miss</a></li>
              <li><a href="#" className="hover:underline">Care & Features</a></li>
              <li><a href="#" className="hover:underline">Return, Exchange & Refund Policy</a></li>
              <li><a href="#" className="hover:underline">Shipping Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
            </ul>
          </div>

          {/* Middle Section - Logo & Social Media */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            {/* Logo */}
            <Image src={WareLogo} alt="Brand Logo" className="w-50 h-auto" />

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <Youtube size={22} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <Twitter size={22} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Us */}
          <div>
            <h3 className="text-lg font-semibold">Contact us:</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-semibold">Customer support:</span><br />
                <a href="mailto:hello@wareinnovations.com" className="hover:underline">
                  hello@wareinnovations.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Job enquiry:</span><br />
                <a href="mailto:careers@wareinnovations.com" className="hover:underline">
                  careers@wareinnovations.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span><br />
                +91 9082820610
              </li>
              <li>
                <span className="font-semibold">Store:</span><br />
                Ware Innovations, Raghuvanshi Mills, Lower Parel, Mumbai 400013
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-500 mt-10">
          <p>&copy; 2025 Ware Innovations Mumbai | Powered by Shopify</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
