import React from 'react'

const UserProfileEdit = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center underline'>تعديل الملف الشخصي</p>
      <div className='mt-5 sm:mt-7 flex flex-col gap-1 sm:gap-2'>
        <input type="text" className='border sm:border-2 border-gray-300 focus:border-gray-400 transition-all duration-200 ease-in-out focus:outline-none font-semibold text-gray-600 text-[11px] sm:text-[13.5px] px-1.5 sm:px-3 py-1.5 rounded-sm' placeholder='الاسم' defaultValue='محمد على عبدالحميد' />
        <input type="number" className='border sm:border-2 border-gray-300 focus:border-gray-400 transition-all duration-200 ease-in-out focus:outline-none font-semibold text-gray-600 text-[11px] sm:text-[13.5px] px-1.5 sm:px-3 py-1.5 rounded-sm' placeholder='رقم الهاتف' defaultValue='01012857997' />
        <input type="text" className='border sm:border-2 border-gray-300 focus:border-gray-400 transition-all duration-200 ease-in-out focus:outline-none font-semibold text-gray-600 text-[11px] sm:text-[13.5px] px-1.5 sm:px-3 py-1.5 rounded-sm' placeholder='الايميل' defaultValue='muhvmmvdessvm@gmail.com' />
        <div className='flex justify-end'>
          <p className='text-[10.5px] sm:text-[13px] px-3 py-1.5 bg-gray-900 hover:bg-gray-800 transition-all duration-200 ease-in-out text-white rounded-sm cursor-pointer'>تعديل</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfileEdit