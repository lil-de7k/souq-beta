import React from 'react';
import AdminOrdersContainer from './AdminOrdersContainer';
import Pagination from '../Utility/Pagination';

const AdminAllOrders = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center underline'>
        كل الطلبات
      </p>

      <div className='mt-5 sm:mt-7'>
        <AdminOrdersContainer />
        <Pagination />
      </div>
    </div>
  );
};

export default AdminAllOrders;