import React from 'react';

const AdminAddSubCategory = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[12px] sm:text-[16.5px] flex justify-center underline'>
        اضف تصنيف فرعي
      </p>

      <div className='mt-5 sm:mt-7 bg-white px-3 sm:px-5 py-3 sm:py-4 shadow-md rounded-md'>

        <input
          type="text"
          className="border sm:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] sm:text-[14px] px-1.5 sm:px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
          placeholder='اسم التصنيف الفرعي'
        />

        <select
          className="mt-2.5 border sm:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] sm:text-[13.5px] px-1.5 sm:px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
        >
          <option value="">اختر التصنيف</option>
          <option value="1">التصنيف الأول</option>
          <option value="2">التصنيف الثاني</option>
          <option value="3">التصنيف الثالث</option>
          <option value="4">التصنيف الرابع</option>
        </select>

        <div className='flex justify-center'>
          <p className='mt-2.5 text-[9.5px] sm:text-[12px] rounded-sm px-3 sm:px-4 py-1.5 text-white border border-gray-900 bg-gray-900 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-800 hover:border-gray-800 text-center sm:font-semibold w-full sm:w-35'>
            حفظ التعديلات
          </p>
        </div>

      </div>
    </div>
  );
};

export default AdminAddSubCategory;