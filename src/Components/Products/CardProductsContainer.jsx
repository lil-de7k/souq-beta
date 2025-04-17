import React from 'react'
import SubTitle from '../Utility/SubTitle'
import ProductList from './ProductCard'

const CardProductsContainer = ({ title, path }) => {
  return (
    <div className='mt-10'>
      <SubTitle title={title} btntitle='المزيد' path={path} />
      <ProductList />
    </div>
  )
}

export default CardProductsContainer