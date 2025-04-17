import React from 'react'
import UserOrdersContainer from './UserOrdersContainer'
import Pagination from '../Utility/Pagination'

const UserAllOrders = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center underline mb-5'>
        اهلا محمد علي!
      </p>
      <UserOrdersContainer />
      <Pagination />
    </div>
  )
}

export default UserAllOrders