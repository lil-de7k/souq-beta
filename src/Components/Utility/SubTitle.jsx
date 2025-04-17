import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({title, btntitle, path}) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='font-semibold text-sm sm:text-base'>{title}</div>
      {btntitle ? (
        <Link to={path}>
          <div className='text-[10px] sm:text-xs font-bold px-3 py-1 bg-gray-300 hover:bg-gray-400 transition-all duration-300 ease-in-out rounded-sm cursor-pointer'>
            {btntitle}
          </div>
        </Link>
      ) : null}
    </div>
  )
}

export default SubTitle