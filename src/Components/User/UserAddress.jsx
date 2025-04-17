import React from 'react'
import UserAddressDetails from './UserAddressDetails'
import { Link } from 'react-router-dom'

const UserAddress = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center underline'>دفتر العناويين</p>
      
      <div className='mt-5 sm:mt-7'>
        <UserAddressDetails />
        <UserAddressDetails />
        <UserAddressDetails />
      </div>

      <div className='flex justify-center'>
        <Link to='/user/address/add'>
          <p className='text-[10px] sm:text-[13px] px-3 py-1.5 bg-gray-900 hover:bg-gray-800 transition-all duration-200 ease-in-out text-white mt-3.5 rounded-sm cursor-pointer'>
            إضافة عنوان جديد
          </p>
        </Link>
      </div>
    </div>
  )
}

export default UserAddress