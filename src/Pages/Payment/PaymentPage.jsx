import React from 'react'

const PaymentPage = () => {
  return (
    <div className='px-4 md:px-20 mt-5'>
      <p className='font-semibold text-gray-900 text-[12px] sm:text-[16px] mb-3 sm:mb-5'>
        اختر طريقه الدفع
      </p>
      <div className='bg-white rounded-sm shadow-sm px-2 py-2.5 sm:px-4 sm:py-5 mb-1.5 sm:mb-0'>
        <div className='flex gap-2 mb-2.5 sm:mb-4'>
          <input type="radio" id="visa" name="payment" className=' cursor-pointer' />
          <label htmlFor="visa" className='text-[11px] sm:text-[13.5px] font-semibold text-gray-800 cursor-pointer'>الدفع عن طريق الفيزا</label>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <input type="radio" id="cash" name="payment" className=' cursor-pointer' />
          <label htmlFor="cash" className='text-[11px] sm:text-[13.5px] font-semibold text-gray-800 cursor-pointer'>الدفع عند الاستلام</label>
        </div>
      </div>
      <div className='flex justify-end gap-3'>
      <div className='border sm:border-2 border-white shadow-md bg-white rounded-xs sm:rounded-sm px-2 pb-1 pt-1.5 text-[11px] sm:text-[13.5px] mt-1.5 sm:mt-2 text-gray-700 font-bold flex justify-center'>
        3000 جنيه
      </div>
      <div className='rounded-xs sm:rounded-sm shadow-md px-2 pb-1 pt-2 text-[10px] sm:text-[12px] mt-1.5 sm:mt-2 flex justify-center border border-gray-900 text-white bg-gray-900 font-bold cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-800 hover:border-gray-800'>
        اتمام الشراء
      </div>
      </div>
    </div>
  )
}

export default PaymentPage