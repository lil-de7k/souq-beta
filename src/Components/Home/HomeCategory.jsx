import React from 'react'
import SubTitle from '../Utility/SubTitle'
import CategoryScroll from '../Category/CategoryScroll';

const categories = [
  { id: 1, name: "موبايلات", image: "/sale.png" },
  { id: 2, name: "لاب توب", image: "/sale.png" },
  { id: 3, name: "ساعات", image: "/sale.png" },
  { id: 4, name: "ألعاب", image: "/sale.png" },
  { id: 5, name: "كاميرات", image: "/sale.png" },
  { id: 6, name: "ملابس", image: "/sale.png" },
  { id: 7, name: "رياضه", image: "/sale.png" },
  { id: 8, name: "أحذية", image: "/sale.png" },
  { id: 9, name: "مطبخ", image: "/sale.png" },
  { id: 10, name: "إلكترونيات", image: "/sale.png" }, 
];

const HomeCategory = () => {
  return (
    <div className='mt-5'>
      <SubTitle title="التصنيفات" btntitle='عرض الكل' path="all-categories" />
      <CategoryScroll categories={categories} />
    </div>
  )
}

export default HomeCategory