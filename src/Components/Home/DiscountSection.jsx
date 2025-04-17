import React from 'react';

const DiscountSection = () => {
  return (
    <div className='flex flex-col md:flex-row px-6 md:px-40 sm:gap-10 pb-5 sm:pb-8 pt-6.5 sm:py-8 justify-between items-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 h-45 mt-10 rounded-sm text-white text-sm md:text-lg'>
      <p className='text-center md:text-left text-xs sm:text-lg mb-4 md:mb-0'>
        خصم يصل حتى ٣٠٪؜ على جميع أجهزة اللابتوب!
      </p>
      <img src="/laptops.png" className='w-50 sm:w-75' />
    </div>
  );
}

export default DiscountSection;