import React from 'react'
import UserOrdersItem from './UserOrdersItem'

const UserOrdersPackage = () => {
  return (
    <div className='bg-white rounded-md shadow-md mb-3'>
      <p className='px-4 py-3.5 text-[11px] sm:text-[13.5px] font-semibold text-gray-600 border-b border-gray-200'>
        طلب رقم #112233
      </p>
      <div>
        <UserOrdersItem />
        <UserOrdersItem />
      </div>
      <div className='flex justify-between px-4 py-3.5 text-[11px] sm:text-[13.5px] font-semibold text-gray-500'>
        <p className='text-gray-700'>
          الحاله: <span className='text-green-500'>قيد التنفيذ</span>
        </p>
        <p className='text-gray-700'>4000 جنيه</p>
      </div>
    </div>
  )
}

export default UserOrdersPackage