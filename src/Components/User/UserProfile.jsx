import React from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center text-gray-800 underline'>الملف الشخصي</p>
      
      <div className='mt-5 sm:mt-7 px-2 sm:px-6 py-4 bg-white rounded-lg shadow-lg'>
        <Link to='/user/profile/edit'>
          <div className='flex justify-end items-center cursor-pointer text-gray-800 hover:text-gray-600 transition-all duration-200 ease-in-out'>
            <EditOutlinedIcon fontSize='small' />
            <p className='text-[11px] sm:text-[13px] font-semibold ml-2'>تعديل</p>
          </div>
        </Link>

        <div className='mt-2 sm:mt-0'>
          <p className='text-gray-700 font-semibold text-[11px] sm:text-sm mt-2'>الاسم: <span className='text-gray-500'>محمد علي عبدالحميد</span></p>
          <p className='text-gray-700 font-semibold text-[11px] sm:text-sm mt-2'>رقم الهاتف: <span className='text-gray-500'>01012857997</span></p>
          <p className='text-gray-700 font-semibold text-[11px] sm:text-sm mt-2'>الايميل: <span className='text-gray-500'>muhvmmvdessvm@gmail.com</span></p>
        </div>

        <div className='bg-gray-50 mt-6 p-5 rounded-md'>
          <div className='flex justify-center'>
            <p className='text-[11px] sm:text-[14px] font-semibold text-gray-700'>تغيير كلمة المرور</p>
          </div>
          <div className='flex flex-col gap-1 sm:gap-2 px-3 mt-2 sm:mt-4'>
            <input
              type="password"
              className='border border-gray-300 text-[10px] sm:text-[13px] font-semibold py-2 px-2 sm:px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 ease-in-out'
              placeholder='ادخل كلمة المرور القديمة'
            />
            <input
              type="password"
              className='border border-gray-300 text-[10px] sm:text-[13px] font-semibold py-2 px-2 sm:px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 ease-in-out'
              placeholder='ادخل كلمة المرور الجديدة'
            />
          </div>
          <div className='flex justify-end px-3 mt-1 sm:mt-2'>
            <p className='text-[10.5px] sm:text-[13px] px-3 py-1.5 bg-gray-900 hover:bg-gray-800 transition-all duration-200 ease-in-out text-white rounded-sm cursor-pointer'>حفظ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;