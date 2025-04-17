import React from 'react'
import DynamicStars from './DynamicStars'

const RateComment = () => {
  return (
    <div className='px-2 py-4 sm:px-4 sm:py-5 -mb-2'>
      <div className='flex mb-1 gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap'>
        <p className='text-[12px] sm:text-[14.5px] mt-0.5 sm:mt-0 text-gray-800 font-semibold'>علي محمد</p>
        <DynamicStars />
      </div>
      <div>
        <textarea
          className='border text-gray-600 border-gray-400 bg-gray-100 text-[11px] sm:text-[13.5px] min-h-16 sm:min-h-17 px-1.5 py-1.5 w-full rounded-sm focus:outline-none focus:border-gray-400 sm:focus:ring-1 focus:ring-gray-400 transition-all duration-200 ease-in-out'
          placeholder='اكتب تعليقك...'
        ></textarea>
      </div>
      <div className='flex justify-end mt-0.5 sm:mt-1'>
        <p className='inline-block px-2 py-1.5 sm:px-2.5 text-[10px] sm:text-[11.5px] bg-gray-900 text-white rounded-sm cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-in-out'>
          اضف تعليق
        </p>
      </div>
    </div>
  )
}

export default RateComment