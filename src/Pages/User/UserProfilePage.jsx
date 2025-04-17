import React from 'react'
import UserSidebar from '../../Components/User/UserSidebar'
import UserProfile from '../../Components/User/UserProfile'

const UserProfilePage = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mx-4 sm:mx-0'>
      <div className='w-full lg:w-1/7'>
        <UserSidebar />
      </div>
      <div className='w-full lg:w-6/7'>
        <UserProfile />
      </div>
    </div>
  )
}

export default UserProfilePage