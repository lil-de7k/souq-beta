import React from 'react'
import ProductList from '../Products/ProductCard'
import Pagination from '../Utility/Pagination'

const UserFavProducts = () => {
  return (
    <div className='sm:pl-20 mt-5 sm:mt-10'>
      <p className='font-semibold text-[13px] sm:text-[16.5px] flex justify-center underline mb-5'>
        المنتجات المفضله
      </p>
      <div className='mt-5 sm:mt-7'>
        <ProductList />
        <Pagination />
      </div>
    </div>
  )
}

export default UserFavProducts