import React from 'react';
import CartItem from '../../Components/Cart/CartItem';
import CartCheckout from '../../Components/Cart/CartCheckout';

const CartPage = () => {
  return (
    <div className='px-4 md:px-20 mt-5'>
      <p className='font-semibold text-gray-900 text-[12.5px] sm:text-[16px] mb-3 sm:mb-5'>
        عربه التسوق
      </p>

      <div className='flex flex-col lg:flex-row gap-2 sm:gap-5'>
        {/* منتجات السلة */}
        <div className='w-full lg:w-3/4'>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        {/* ملخص الطلب */}
        <div className='w-full lg:w-1/4'>
          <CartCheckout />
        </div>
      </div>
    </div>
  );
};

export default CartPage;