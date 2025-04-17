import React from 'react';
import ProductNewList from './AdminProductCard';
import Pagination from '../Utility/Pagination';

const AdminAllProducts = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center underline'>
        كل المنتجات
      </p>

      <div className='mt-5 sm:mt-7'>
        <ProductNewList />
        <Pagination />
      </div>
    </div>
  );
};

export default AdminAllProducts;