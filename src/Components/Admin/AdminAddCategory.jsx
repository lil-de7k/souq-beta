import React from 'react';

const AdminAddBrand = () => {
  return (
    <div className='m:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[12px] sm:text-[16.5px] flex justify-center underline'>
        اضف تصنيف
      </p>
      <div className='mt-5 sm:mt-7 bg-white px-3 sm:px-5 py-3 sm:py-4 shadow-md rounded-md'>
        <p className='text-[11px] sm:text-sm font-semibold text-gray-500'>ارفع الصوره</p>
        <img src="/avatar.png" className='w-[85px] md:w-[95px] lg:w-37 mt-2 sm:mt-3' alt="brand" />
        
        <div className='flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 md:gap-5 mt-3'>
          <input
            type="text"
            className="border md:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] md:text-sm px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
            placeholder='اضف تصنيف'
          />
          <p className='text-[10px] md:text-[12px] rounded-sm px-3 md:px-4 py-1.5 text-white border border-gray-900 bg-gray-900 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-800 hover:border-gray-800 text-center font-semibold w-full md:w-36'>
            حفظ التعديلات
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminAddBrand;