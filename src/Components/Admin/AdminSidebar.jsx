import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='mt-5 sm:mt-22.5 w-full py-2 px-2 text-[11px] sm:text-[12.5px] text-gray-800 font-semibold bg-white shadow-md rounded-tl-2xl rounded-bl-2xl'>
      <ul>
        <Link to='/admin/all-orders'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer border-b border-gray-300'><div className='px-3 pl-5 py-2.5 transition-all duration-200 ease-in-out hover:-translate-x-3'>اداره الطلبات</div></li></Link>
        <Link to='/admin/all-products'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer border-b border-gray-300'><div className='px-3 pl-5 py-3 transition-all duration-200 ease-in-out hover:-translate-x-3'>اداره المنتجات</div></li></Link>
        <Link to='/admin/add-brand'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer border-b border-gray-300'><div className='px-3 pl-5 py-3 transition-all duration-200 ease-in-out hover:-translate-x-3'>اضف ماركه</div></li></Link>
        <Link to='/admin/add-category'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer border-b border-gray-300'><div className='px-3 pl-5 py-3 transition-all duration-200 ease-in-out hover:-translate-x-3'>اضف تصنيف</div></li></Link>
        <Link to='/admin/add-sub-category'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer border-b border-gray-300'><div className='px-3 pl-5 py-3 transition-all duration-200 ease-in-out hover:-translate-x-3'>اضف تصنيف فرعي</div></li></Link>
        <Link to='/admin/add-product'><li className='rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 cursor-pointer'><div className='px-3 pl-5 py-2.5 transition-all duration-200 ease-in-out hover:-translate-x-3'>اضف منتج</div></li></Link>
      </ul>
    </div>
  )
}

export default AdminSidebar