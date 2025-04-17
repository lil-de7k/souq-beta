import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import SideFilter from '../../Components/Utility/SideFilter'
import ProductCard from '../../Components/Products/ProductCard'
import Pagination from '../../Components/Utility/Pagination'

const ShopProductsPage = () => {
  return (
    <div className="px-4 md:px-20">
      <CategoryHeader />
      <SearchCountResult count="7" />
      <div className="mt-3 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/8">
          <SideFilter />
        </div>
        <div className="w-full md:w-7/8">
          <ProductCard />
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default ShopProductsPage