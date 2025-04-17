import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../../Style/Navbar.css'

const Navbar = () => {
  return (
    <div className='bg-gray-950 px-4 sm:px-6 md:px-20 py-4.5 flex flex-wrap md:flex-nowrap justify-between items-center gap-4 sm:gap-6 md:gap-12.5'>
      {/* اللوجو */}
      <a href="/" className="flex w-full md:w-auto justify-center md:justify-start">
        <p className="logo text-white text-[36px] sm:text-[45px] -mt-1 md:-mt-2 ml-2 sm:ml-0 text-center">
          سوق
        </p>
      </a>

      {/* السيرش */}
      <div className='w-full md:flex-1 order-3 md:order-none'>
        <input
          type="text"
          className='bg-gray-200 w-full text-black text-xs sm:text-sm py-1.5 sm:py-1.5 px-2 sm:px-3 rounded-xs 
                    focus:outline-none focus:ring-1 focus:ring-zinc-100 focus:ring-offset-1 transition-all duration-300'
          placeholder='ابحث..'
        />
      </div>

      {/* التسجيل والعربه */}
      <div className='text-white flex gap-7 md:gap-6 text-xs sm:text-sm w-full md:w-auto justify-center md:justify-end'>
        <a href="/login">
          <div className='flex items-center gap-1 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-60'>
            <AccountCircleOutlinedIcon fontSize='small' />
            <p className='font-semibold text-[12px] sm:text-[14px]'>دخول</p>
          </div>
        </a>
        <a href="/cart">
          <div className='flex items-center gap-1 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-60'>
            <ShoppingCartOutlinedIcon fontSize='small' />
            <p className='font-semibold text-[12px] sm:text-[14px]'>العربة</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Navbar