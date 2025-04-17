import React from 'react'
import { Link } from 'react-router-dom'

const CartCheckout = () => {
  return (
    <div className='w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-2 py-3.5 sm:px-4 sm:py-5 bg-white rounded-sm shadow-lg sm:shadow-md'>
      <div className='flex gap-1 sm:gap-2'>
        <input
          type="text"
          placeholder='كود الخصم'
          className='rounded-xs sm:rounded-sm border sm:border-2 border-gray-400 w-full px-2 py-1 sm:font-semibold text-[11.5px]'
        />
        <div className='rounded-xs sm:rounded-sm text-[10.5px] sm:text-xs px-3 py-1 border sm:border-2 border-gray-900 text-white bg-gray-900 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-800 hover:border-gray-800'>
          تطبيق
        </div>
      </div>
      <div className='border sm:border-2 border-gray-400 rounded-xs sm:rounded-sm px-2 py-1 text-[11px] sm:text-[13px] mt-1.5 sm:mt-2 text-gray-700 font-bold flex justify-center'>
        3000 جنيه
      </div>
      <Link to='/order/paymethod'>
      <div className='rounded-xs sm:rounded-sm px-2 py-1 text-[10.5px] sm:text-[12px] mt-1.5 sm:mt-2 flex justify-center border sm:border-2 border-gray-900 text-white bg-gray-900 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-800 hover:border-gray-800'>
        اتمام الشراء
      </div>
      </Link>
    </div>
  )
}

export default CartCheckout