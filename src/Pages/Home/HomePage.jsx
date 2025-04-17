import React from 'react'
//Components
import CategoryHeader from '../../Components/Category/CategoryHeader'
import Slider from '../../Components/Home/Slider'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandCardContainer from '../../Components/Brand/BrandCardContainer'

const HomePage = () => {
  return (
    <>
    <div className='px-5 sm:px-4 md:px-10 lg:px-16 xl:px-20'>
      <CategoryHeader />
    </div>
      <Slider />
      <div className='px-5 sm:px-4 md:px-10 lg:px-16 xl:px-20'>
      <CardProductsContainer title='الاكثر مبيعاً' path='/products' />
      <DiscountSection />
      <CardProductsContainer title='احدث الازياء' path='/products' />
      <BrandCardContainer title='اشهر الماركات' />
      </div>
    </>
  )
}

export default HomePage