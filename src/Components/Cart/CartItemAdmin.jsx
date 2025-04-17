import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItemAdmin = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-white rounded-md shadow-md mb-1.5 overflow-hidden'>
      {/* صورة المنتج */}
      <div className='w-full sm:w-[28%] md:w-[24%] flex justify-center border-b sm:border-b-0 sm:border-l border-gray-200 pt-1 sm:pt-0'>
        <img src="/mobile.png" className='w-24 sm:w-24 md:w-26 py-2 object-contain' />
      </div>

      {/* تفاصيل المنتج */}
      <div className='w-full sm:w-[72%] md:w-[76%] px-3 py-2 sm:px-4 sm:py-4 flex flex-col justify-between'>
        {/* العنوان والازاله */}
        <div>
          <div className='flex justify-between text-[10.5px] sm:text-[12px] mb-2 mt-2 sm:mt-0'>
            <p className='text-gray-700 font-bold'>الالكترونيات</p>
            <div className='flex items-center cursor-pointer hover:opacity-70 transition-all duration-200 ease-in-out font-semibold text-red-600'>
              <DeleteOutlineIcon fontSize='small' />
              <p className='ml-1'>ازاله</p>
            </div>
          </div>

          {/* وصف المنتج */}
          <div className='mt-1.5 mb-1.5 sm:mt-4 sm:mb-4'>
            <p className='text-[10.5px] sm:text-[13.5px] font-semibold text-gray-800 mb-1 leading-5'>
              ايفون جامد طحن بمساحه كبيره ويدعم تقنيات عديده مع تطبيق قرطسني
            </p>
            <p className='text-[10px] sm:text-[12.5px] font-semibold text-gray-700 mb-1.5'>
              الماركه: <span className='text-gray-600'>ابل</span>
            </p>
            <div className='w-4 h-4 bg-red-500 border border-gray-300 rounded-full'></div>
          </div>
        </div>

        {/* الكمية والسعر */}
        <div className='flex justify-between text-[10px] sm:text-sm font-semibold text-gray-800 pb-1 sm:pb-0 mt-1 sm:mt-3'>
          <div className='flex gap-2 items-center'>
            <p>الكميه</p>
            <input
              type="number"
              min={0}
              className="pr-2 pl-0.5 py-0.5 text-[10px] sm:text-[12px] w-9 sm:w-14 border border-gray-400 rounded-xs focus:outline-none focus:ring-0"
            />
          </div>
          <p>3000 جنيه</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemAdmin;