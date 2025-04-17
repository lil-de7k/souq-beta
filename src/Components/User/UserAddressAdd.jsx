import React from 'react'

const UserAddressAdd = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center underline'>
        أضف عنوان جديد
      </p>

      <div className='mt-5 sm:mt-7 bg-white px-3 sm:px-5 py-3 sm:py-4 shadow-md rounded-md flex flex-col gap-1 sm:gap-2'>
        <input
          type="text"
          className='border sm:border-2 border-gray-300 focus:border-gray-400 transition-all duration-200 ease-in-out focus:outline-none font-semibold text-gray-600 text-[11px] sm:text-[13.5px] px-1.5 sm:px-3 py-1.5 rounded-sm'
          placeholder='تسمية العنوان (مثلاً: المنزل / العمل)'
        />

        <textarea
          className='min-h-20 border sm:border-2 border-gray-300 focus:border-gray-400 transition-all duration-200 ease-in-out focus:outline-none font-semibold text-gray-600 text-[11px] sm:text-[13.5px] px-1.5 sm:px-3 py-1.5 rounded-sm'
          placeholder='العنوان بالتفصيل'
        ></textarea>

        <input
          type="number"
          className='border sm:border-2 border-gray-300 focus:border-gray-400 tracking-wide transition-all duration-200 ease-in-out focus:outline-none font-semibold text-gray-600 text-[11px] sm:text-[13.5px] px-1.5 sm:px-3 py-1.5 rounded-sm'
          placeholder='رقم الهاتف'
        />

        <div className='flex justify-end'>
          <p className='text-[10.5px] sm:text-[12.5px] px-3 py-1.5 bg-gray-900 hover:bg-gray-800 transition-all duration-200 ease-in-out text-white rounded-sm cursor-pointer'>
            حفظ
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserAddressAdd