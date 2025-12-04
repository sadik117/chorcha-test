import React, { useState } from "react";
import { Search, ShoppingCart, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-sm border-b bg-black">
      {/* ========= TOP NAV ========= */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          চর্চা'Merch
        </div>

        {/* Search Bar (Desktop Only) */}
        <div className="hidden md:flex items-center w-[45%]">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-l-full outline-none"
          />
          <button className="px-4 py-3 bg-green-700 rounded-r-full text-white">
            <Search size={18} />
          </button>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart */}
          <div className="flex items-center bg-[#FFFFFF] text-black px-4 py-2 rounded-full gap-2">
            <ShoppingCart size={16} />
            <div className="flex flex-col leading-none">
              <span className="text-xs">CART</span>
              <span className="text-[11px]">2 items</span>
            </div>
          </div>

          {/* Balance */}
          <div className="flex items-center bg-[#FFFFFF] text-black px-3 py-2 rounded-full">
            ৳ 549
          </div>

          {/* Login */}
          <button className="flex items-center gap-2 border bg-[#FFFFFF] border-green-700 text-green-700 px-4 py-2 rounded-full hover:bg-green-700 hover:text-white transition">
            <LogIn size={18} />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ========= MOBILE DROPDOWN ========= */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 animate-fadeIn">
          
          {/* Search Bar (Mobile) */}
          <div className="flex items-center mb-3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-l-full outline-none"
            />
            <button className="px-3 py-3 bg-green-700 rounded-r-full text-white">
              <Search size={17} />
            </button>
          </div>

          {/* Cart + Balance + Login */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center bg-[#FFFFFF] text-black px-4 py-2 rounded-full gap-2 flex-1 justify-center">
              <ShoppingCart size={16} />
              <span className="text-xs">2 items</span>
            </div>
            <div className="flex items-center bg-[#FFFFFF] text-black px-4 py-2 rounded-full">
              ৳ 549
            </div>
            <button className="flex items-center gap-2 border bg-[#FFFFFF] border-green-700 text-green-700 px-4 py-2 rounded-full hover:bg-green-700 hover:text-white transition">
              <LogIn size={18} />
              Login
            </button>
          </div>

          {/* Mobile Categories */}
          <div className="flex flex-col gap-3 text-[15px] font-medium text-white">
            <button>Phones</button>
            <button>Outfit</button>
            <button>Laptop</button>
            <button>Furniture</button>
            <button>Smart Gadgets</button>
            <button>DIY</button>
            <button>Kitchen</button>
            <button>Smart TV</button>
            <button>Medicine</button>
            <button>Baby Products</button>
            <button>More ▾</button>
          </div>
        </div>
      )}

      {/* ========= DESKTOP CATEGORY BAR ========= */}
      <div className="hidden md:flex items-center gap-13 px-6 py-2 bg-white text-sm font-medium">
        <button>Phones</button>
        <button>Outfit</button>
        <button>Laptop</button>
        <button>Furniture</button>
        <button>Smart Gadgets</button>
        <button>DIY</button>
        <button>Kitchen</button>
        <button>Smart TV</button>
        <button>Medicine</button>
        <button>Baby Products</button>
        <button>More ▾</button>
      </div>
    </div>
  );
}
