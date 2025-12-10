import React from 'react'

const RateItem = () => {
  return (
    <div className='border-t border-gray-300 px-1.5 sm:px-5'>
      <div className="mt-3 flex items-center flex-wrap sm:flex-nowrap">
        <span className="inline-block text-[11.5px] sm:text-[13px] font-medium sm:font-semibold text-gray-800 sm:text-gray-600">احمد محمود</span>
        <img src="/rate.png" alt="" className="w-2.5 h-2.5 mb-0.5 sm:w-3 sm:h-3 mr-1.5 ml-0.5" />
        <span className="inline-block text-yellow-500 text-[11px] sm:text-xs font-medium">4.5</span>
      </div>
      <div className="pb-3">
        <p className="inline-block text-[11px] sm:text-[12px] text-gray-500 sm:font-semibold leading-relaxed">
          منتج مناسب سعره للوقت الحالي وكويس جدا
        </p>
      </div>
    </div>
  )
}

export default RateItem
