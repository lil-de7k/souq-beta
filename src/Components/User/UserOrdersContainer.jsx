import React from 'react'
import UserOrdersPackage from './UserOrdersPackage'

const UserOrdersContainer = () => {
  return (
    <div className='mt-5 sm:mt-7.5'>
      <UserOrdersPackage />
      <UserOrdersPackage />
    </div>
  )
}

export default UserOrdersContainer