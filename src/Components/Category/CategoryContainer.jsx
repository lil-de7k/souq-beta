import React from 'react'
import CategoryScroll from "./CategoryScroll";

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
  { id: 5, name: "كاميرات", image: "/sale.png" },
  { id: 6, name: "ملابس", image: "/sale.png" },
  { id: 7, name: "رياضه", image: "/sale.png" },
  { id: 8, name: "أحذية", image: "/sale.png" },
  { id: 9, name: "مطبخ", image: "/sale.png" },
  { id: 10, name: "إلكترونيات", image: "/sale.png" }, 
  { id: 5, name: "كاميرات", image: "/sale.png" },
  { id: 8, name: "أحذية", image: "/sale.png" },
  { id: 9, name: "مطبخ", image: "/sale.png" },
  { id: 10, name: "إلكترونيات", image: "/sale.png" }, 
];

const CategoryContainer = () => {
  return (
    <div className='mt-10'>
      <p className="px-6 sm:px-13 md:px-24 lg:px-20 font-semibold text-sm sm:text-sm lg:text-[16px] mb-1.5">كل التصنيفات</p>
      <CategoryScroll categories={categories} />
    </div>
  )
}

export default CategoryContainer