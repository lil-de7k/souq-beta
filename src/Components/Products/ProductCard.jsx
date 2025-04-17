import React from 'react';
import fav from '/fav-off.png';
import rate from '/rate.png';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white px-3 py-2 sm:px-4 sm:py-4 rounded-lg shadow-md w-full flex flex-col">
      <Link to='/products/:id'>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-25 sm:h-53 md:h-44 lg:h-45 xl:h-45 object-cover rounded-md"
        />
      </Link>
      <div className="mt-3 flex-1 flex flex-col justify-between">
        <div className="flex justify-end items-center">
          <img src={fav} alt="إضافة إلى المفضلة" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
        </div>
        <h3 className="text-[10px] sm:text-[12px] md:text-[12px] font-semibold text-gray-800 mt-1 line-clamp-2">{product.name}</h3>
        <div className="flex justify-between items-center sm:mt-3">
          <div className="flex gap-1 items-center">
            <img src={rate} alt="تقييم" className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 mt-0 sm:-mt-1" />
            <p className='text-yellow-400 text-[11px] sm:text-[12px]'>4.5</p>
          </div>
          <p className="text-gray-700 font-semibold text-[11px] sm:text-[12px]">{`EGP ${product.price}`}</p>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/src/Images/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/src/Images/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/src/Images/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/src/Images/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/src/Images/item.png" },
  ];

  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;