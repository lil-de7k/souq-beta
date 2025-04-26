import React from 'react'

const BrandCard = ( {img} ) => {
  return (
    <div>
      <img src={img} className='w-20 sm:w-30' />
    </div>
  )
}

export default BrandCard