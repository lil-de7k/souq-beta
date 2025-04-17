import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Link } from 'react-router-dom'

const UserAddressDetails = () => {
  return (
    <div className='bg-white shadow-md rounded-md px-4 sm:px-5 py-3.5 mb-1.5 sm:mb-3'>
      <div className='flex justify-between'>
        <p className='text-[11px] sm:text-[13.5px] font-semibold text-gray-800'>
          المنزل / العمل
        </p>
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-4 font-semibold text-gray-800'>
          <Link to='/user/address/edit'>
            <div className='flex items-center gap-0.5 cursor-pointer hover:opacity-65 transition-all duration-200 ease-in-out'>
              <EditOutlinedIcon fontSize='small' />
              <p className='text-[10.5px] sm:text-[13px]'>تعديل</p>
            </div>
          </Link>
          <div className='flex items-center gap-0.5 cursor-pointer hover:opacity-65 transition-all duration-200 ease-in-out'>
            <DeleteOutlineIcon fontSize='small' />
            <p className='text-[10.5px] sm:text-[13px]'>ازاله</p>
          </div>
        </div>
      </div>
      <p className='text-[11px] sm:text-[13px] font-semibold text-gray-500 mt-4 sm:mt-5'>
        القاهره مدينه نصر شارع التسعين عماره اتنين
      </p>
      <p className='text-[11px] sm:text-[13px] font-semibold text-gray-500 mt-3'>
        رقم الهاتف: <span className='text-gray-400 text-[10.5px] sm:text-[13px] tracking-wide'>01012857997</span>
      </p>
    </div>
  )
}

export default UserAddressDetails