import React from 'react'
import UserSidebar from '../../Components/User/UserSidebar'
import UserAddressEdit from '../../Components/User/UserAddressEdit'

const UserAddressEditPage = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mx-4 sm:mx-0'>
      <div className='w-full lg:w-1/7'>
        <UserSidebar />
      </div>
      <div className='w-full lg:w-6/7'>
        <UserAddressEdit />
      </div>
    </div>
  )
}

export default UserAddressEditPage