import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import ProductDetails from '../../Components/Products/ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'

const ProductDetailsPage = () => {
  return (
    <div className='px-4 md:px-20'>
      <CategoryHeader />
      <ProductDetails />
      <RateContainer />
      <CardProductsContainer title="منتجات قد تعجبك" path='/products' />
    </div>
  )
}

export default ProductDetailsPage