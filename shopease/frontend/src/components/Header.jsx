import { useState } from "react";
import { FaShoppingBag, FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function ShopEaseHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-sm">
      
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaShoppingBag className="text-indigo-600 text-xl" />
          <span className="text-xl font-semibold text-gray-800">
            ShopEase
          </span>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          <FaSearch className="text-gray-700 text-lg cursor-pointer" />

          <div className="bg-indigo-100 p-2 rounded-full cursor-pointer">
            <FaUser className="text-indigo-600 text-sm" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">

          <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
            <FaSearch />
            <span>Search</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
            <FaUser />
            <span>Profile</span>
          </div>

        </div>
      )}

    </header>
  );
}