import React from 'react'
import SubTitle from '../Utility/SubTitle'
import BrandCard from './BrandCard'

const BrandCardContainer = ({ title }) => {
  return (
    <div className='mt-10'>
      <SubTitle title={title} btntitle='عرض الكل' path="all-brands" />
      <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-5 mt-5'>
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
        <BrandCard img='/brand1.png' />
      </div>
    </div>
  )
}

export default BrandCardContainer