import React from 'react'
import ProductGallery from './ProductGallery'
import ProductDescription from './ProductDescription'

const ProductDetails = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-3 sm:gap-7.5 mt-5'>
      {/* الصورة */}
      <div className='w-full lg:w-1/4'>
        <ProductGallery />
      </div>
      
      {/* الوصف */}
      <div className='w-full lg:w-3/4'>
        <ProductDescription />
      </div>
    </div>
  )
}

export default ProductDetails