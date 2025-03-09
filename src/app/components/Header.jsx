'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WareLogo from '../utilis/Images/ware-logo.png';
import { Menu, X, User, Search, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white">
      {/* Free Shipping Banner (Full-Width, Unaffected)
      <div className="w-full bg-[#b3562c] text-white text-sm text-center py-3">
        Free Shipping on orders above INR 5000
      </div> */}

      {/* Navigation Section with Container */}
      <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 flex items-center justify-between py-4 relative">
        {/* Left Side - Mobile Menu Button */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="p-2 rounded-md focus:outline-none"
        >
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Center - Larger Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src={WareLogo}
              alt="Ware Innovations Logo"
              width={180} // Larger size
              height={70}
            />
          </Link>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/search" className="text-gray-700 hover:text-gray-900">
            <Search size={24} />
          </Link>
          <Link href="/account" className="text-gray-700 hover:text-gray-900">
            <User size={24} />
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-gray-900 relative">
            <ShoppingBag size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
