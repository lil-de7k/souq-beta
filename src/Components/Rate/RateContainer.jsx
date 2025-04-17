import React from 'react'
import RateItem from './RateItem'
import RateComment from './RateComment'
import Pagination from '../Utility/Pagination'

const RateContainer = () => {
  return (
    <div className='mt-7 px-1 pb-3.5 sm:pb-5 bg-white shadow-xs rounded-xs w-full mx-auto sm:px-5 sm:rounded-md'>
      <div className='flex items-center pt-3.5 sm:pt-5 flex-wrap sm:flex-nowrap'>
        <p className='font-semibold text-gray-900 pr-1.5 sm:pr-0 pl-1.5 sm:pl-3 text-[13px] sm:text-[17px]'>التقيمات</p>
        <img src="/rate.png" className='w-2.5 h-2.5 sm:w-3 sm:h-3 mb-1 sm:mb-0.5' />
        <p className='text-[11.5px] sm:text-sm text-yellow-500 font-medium pl-1.5 sm:pl-3 pr-0.5'>4.5</p>
        <p className='text-[10px] sm:text-sm text-gray-600 font-semibold'>(160 تقييم)</p>
      </div>
      <div><RateComment /></div>
      <div className='px-1.5 sm:px-0'>
        <RateItem />
        <RateItem />
        <RateItem />
      </div>
      <Pagination />
    </div>
  )
}

export default RateContainer