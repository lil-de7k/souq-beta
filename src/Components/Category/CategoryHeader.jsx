import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // أيقونات من lucide-react (أو استخدم أي مكتبة تحبها)

const CategoryHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const categories = ['الكل', 'الكترونيات', 'ملابس', 'كهربيه', 'تخفيضات'];

  return (
    <div>
      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-5 text-[13px] font-bold py-2.5 text-gray-500'>
        {categories.map((cat, index) => (
          <li
            key={index}
            className='cursor-pointer hover:text-gray-800 transition-all duration-200 ease-in-out'
          >
            {cat}
          </li>
        ))}
        <li className='cursor-pointer hover:text-gray-800 transition-all duration-200 ease-in-out'>
          <Link to='/all-categories'>المزيد</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <button
          onClick={toggleMobileMenu}
          className='text-gray-500 focus:outline-none py-3 -mb-1'
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMobileMenuOpen && (
          <ul className='flex flex-col gap-2.5 text-[11px] font-bold py-2.5 mb-3 text-gray-500 bg-white shadow-sm rounded-xs px-2.5 transition-all duration-300 ease-in-out'>
            {categories.map((cat, index) => (
              <li
                key={index}
                className='cursor-pointer hover:text-gray-800 transition-all duration-200 ease-in-out'
              >
                {cat}
              </li>
            ))}
            <li className='cursor-pointer hover:text-gray-800 transition-all duration-200 ease-in-out'>
              <Link to='/all-categories'>المزيد</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryHeader;