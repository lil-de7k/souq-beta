import React from 'react'
import CartItemAdmin from '../Cart/CartItemAdmin'

const AdminOrdersDetails = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center underline'>
        تفاصيل الطلب رقم #11
      </p>

      <div className='mt-5 sm:mt-7 bg-white w-full rounded-md shadow-md px-3 sm:px-5 py-3'>
        <p className='text-gray-900 font-semibold text-[11px] sm:text-[14px]'>
          اسم العميل: <span className='text-gray-500 text-[11px] sm:text-[13.5px]'>محمد محمود المحمدي</span>
        </p>
        <p className='text-gray-900 font-semibold text-[11px] sm:text-[14px] mt-1.5'>
          رقم الهاتف: <span className='text-gray-500 text-[10.5px] sm:text-[13.5px]'>01012857997</span>
        </p>
        <p className='text-gray-900 font-semibold text-[11px] sm:text-[14px] mt-1.5'>
          الايميل: <span className='text-gray-500 text-[10.5px] sm:text-[13.5px]'>muhvmmvdessvm@gmail.com</span>
        </p>
      </div>

      <div className='mt-1.5'>
        <CartItemAdmin />
        <CartItemAdmin />
      </div>

      <div className='mt-1.5 bg-white w-full rounded-md shadow-md px-2 sm:px-80 py-3.5 sm:py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0'>
        <div className='flex sm:gap-0.5 flex-col sm:flex-row sm:items-center w-full sm:w-auto'>
          <select className='border border-gray-400 w-full sm:w-48 px-2 py-1 font-semibold text-[11px] sm:text-[12px] focus:outline-none focus:ring-0'>
            <option value="">حالة الطلب</option>
            <option value="processing">قيد المعالجة</option>
            <option value="delivered">تم التوصيل</option>
            <option value="cancelled">ملغي</option>
          </select>
          <div className='text-[10.5px] sm:text-[11px] mt-2 sm:mt-0 sm:ml-2 px-4 py-1.5 text-white border border-gray-900 bg-gray-900 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-800 hover:border-gray-800 text-center'>
            حفظ
          </div>
        </div>

        <div className='text-[11.5px] sm:text-[13.5px] font-semibold text-gray-950 text-center sm:text-right'>
          المجموع: <span className='text-gray-700'>4000 جنيه</span>
        </div>
      </div>
    </div>
  )
}

export default AdminOrdersDetails