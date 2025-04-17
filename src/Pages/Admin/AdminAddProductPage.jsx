import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminAddProduct from '../../Components/Admin/AdminAddProduct'

const AdminAddProductPage = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mx-4 sm:mx-0'>
      <div className='w-full lg:w-1/7'>
        <AdminSidebar />
      </div>
      <div className='w-full lg:w-6/7'>
        <AdminAddProduct />
      </div>
    </div>
  )
}

export default AdminAddProductPage