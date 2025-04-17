import React from 'react'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
  return (
    <div className='mt-5 sm:mt-22.5 w-full py-2 px-2 text-[11px] sm:text-[12.5px] text-gray-800 font-semibold bg-white shadow-md rounded-tl-2xl rounded-bl-2xl'>
      <ul>
        <Link to='/user/all-orders'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer border-b border-gray-300'><div className='px-3 pl-5 py-2.5 transition-all duration-200 ease-in-out hover:-translate-x-3'>اداره الطلبات</div></li></Link>
        <Link to='/user/favourites'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer border-b border-gray-300'><div className='px-3 pl-5 py-3 transition-all duration-200 ease-in-out hover:-translate-x-3'>قائمه المفضله</div></li></Link>
        <Link to='/user/address'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer border-b border-gray-300'><div className='px-3 pl-5 py-3 transition-all duration-200 ease-in-out hover:-translate-x-3'>العناويين</div></li></Link>
        <Link to='/user/profile'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer'><div className='px-3 pl-5 py-2.5 transition-all duration-200 ease-in-out hover:-translate-x-3'>الملف الشخصي</div></li></Link>
      </ul>
    </div>
  )
}

export default UserSidebar