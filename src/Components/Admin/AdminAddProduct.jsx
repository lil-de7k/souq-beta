import React from 'react';
import Select from 'react-select';
import avatarImage from '/avatar.png';
import addImage from '/add.png';
import '../../Style/AdminAddProduct.css';

const AdminAddProduct = () => {
  const options = [
    { value: 'v1', label: 'التصنيف الاول' },
    { value: 'v2', label: 'التصنيف التاني' },
    { value: 'v3', label: 'التصنيف التالت' },
    { value: 'v4', label: 'التصنيف الرابع' },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: `2px solid ${state.isFocused ? '#4B5563' : '#D1D5DB'}`,
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#4B5563',
      },
      borderRadius: '3px',
      minHeight: '38px',
      fontSize: '11px',
      color: '#6B7280',
      fontWeight: '600',
      transition: 'all 0.2s ease-in-out',
      '@media (max-width: 640px)': {
        border: '1px solid #D1D5DB',
      },
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: '13px',
      color: '#9CA3AF',
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      fontSize: '13.5px',
      backgroundColor: isFocused ? '#F3F4F6' : isSelected ? '#E5E7EB' : 'white',
      color: '#374151',
      padding: '8px 12px',
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: '11px',
      color: '#374151',
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#E5E7EB',
      borderRadius: '3px',
      padding: '2px 4px',
    }),
    multiValueLabel: (base) => ({
      ...base,
      fontSize: '11px',
    }),
  };

  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[12px] sm:text-[16.5px] flex justify-center underline'>اضف منتج جديد</p>
      <div className='mt-5 sm:mt-7 bg-white px-3 sm:px-5 py-3 sm:py-4 shadow-md rounded-md'>
        <p className='text-[11px] sm:text-sm font-semibold text-gray-500'>ارفع الصوره</p>
        <img src={avatarImage} className='w-[85px] sm:w-37 mt-2 sm:mt-3' alt="brand" />

        <div className='gap-1.5 sm:gap-30 mt-3'>
          <input
            type="text"
            className="border sm:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] sm:text-sm px-1.5 sm:px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
            placeholder='اسم المنتج'
          />
          <textarea
            className="mt-2.5 h-20 border sm:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] sm:text-sm px-1.5 sm:px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
            placeholder='وصف المنتج'
          />
          <input
            type="number"
            className="border sm:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] sm:text-sm px-1.5 sm:px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
            placeholder='السعر قبل الخصم'
          />
          <input
            type="number"
            className="mt-2.5 border sm:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] sm:text-sm px-1.5 sm:px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
            placeholder='سعر المنتج'
          />
          <select
            className="mt-2.5 border sm:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] sm:text-[13.5px] px-1.5 sm:px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
          >
            <option value="">التصميف الرئيسي</option>
            <option value="1">التصنيف الأول</option>
            <option value="2">التصنيف الثاني</option>
            <option value="3">التصنيف الثالث</option>
            <option value="4">التصنيف الرابع</option>
          </select>

          <Select
            isMulti
            name="subcategories"
            options={options}
            placeholder="تصنيف فرعي"
            styles={customStyles}
            className="mt-2.5 w-full"
            classNamePrefix="custom-select"
          />

          <select
            className="mt-2.5 border sm:border-2 border-gray-300 text-gray-500 font-semibold text-[10.5px] sm:text-[13.5px] px-1.5 sm:px-2 py-1 rounded-sm w-full focus:border-gray-600 focus:outline-none transition-all duration-200 ease-in-out"
          >
            <option value="">الماركه</option>
            <option value="1">التصنيف الأول</option>
            <option value="2">التصنيف الثاني</option>
            <option value="3">التصنيف الثالث</option>
            <option value="4">التصنيف الرابع</option>
          </select>

          <div className='mt-3 sm:mt-2.5 mx-1'>
            <p className='text-[11px] sm:text-sm font-semibold text-gray-500'>الالوان المتاحه</p>
            <div className='flex gap-1 items-center sm:mt-1'>
              <div className='cursor-pointer w-4 h-4 sm:w-5.5 sm:h-5.5 bg-red-500 border border-gray-300 rounded-full'></div>
              <div className='cursor-pointer w-4 h-4 sm:w-5.5 sm:h-5.5 bg-sky-500 border border-gray-300 rounded-full'></div>
              <div className='cursor-pointer w-4 h-4 sm:w-5.5 sm:h-5.5 bg-green-500 border border-gray-300 rounded-full'></div>
              <img src={addImage} className='w-4 sm:w-6 cursor-pointer' alt="add" />
            </div>
          </div>

          <div className='flex justify-end mt-3 sm:mt-0'>
            <p className='text-[9.5px] sm:text-[12px] rounded-sm px-3 sm:px-4 py-1.5 text-white border border-gray-900 bg-gray-900 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-800 hover:border-gray-800 text-center sm:font-semibold w-full sm:w-35'>
              حفظ التعديلات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;