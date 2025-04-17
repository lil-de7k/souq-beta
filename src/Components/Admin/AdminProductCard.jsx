import React from 'react';
import rate from '/rate.png';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const AdminProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className="bg-white px-3 py-2 sm:px-4 sm:py-4 rounded-lg shadow-md w-full flex flex-col">
      <div className="flex justify-between items-center mb-1">
          <button 
            onClick={() => onDelete(product)} 
            className="flex items-center text-red-600 text-[10px] sm:text-[12px] hover:text-red-400 transition-all duration-200 ease-in-out cursor-pointer"
          >
            <DeleteOutline fontSize="small" />
            حذف
          </button>
          <button 
            onClick={() => onEdit(product)} 
            className="flex items-center text-blue-600 text-[10px] sm:text-[12px] hover:text-blue-400 transition-all duration-200 ease-in-out cursor-pointer"
          >
            <EditOutlined fontSize="small" className="ml-0.5" />
            تعديل
          </button>
        </div>
      <Link to='/products/:id'>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-25 sm:h-53 md:h-44 lg:h-52 xl:h-43 object-cover rounded-md"
        />
      </Link>
      <div className="mt-3 flex-1 flex flex-col justify-between">
        <h3 className="text-[9.5px] sm:text-[12px] md:text-[12px] font-semibold text-gray-800 -mt-1">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-1 items-center">
            <img src={rate} alt="تقييم" className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 mt-0 sm:-mt-1" />
            <p className='text-yellow-400 text-[11px] sm:text-[12px]'>4.5</p>
          </div>
          <p className="text-gray-700 font-semibold text-[11px] sm:text-[12px]">{`EGP ${product.price}`}</p>
        </div>

        {/* أزرار الأدمن */}
        
      </div>
    </div>
  );
};

const ProductNewList = () => {
  const products = [
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
    { name: "سماعه وايرليس زرقا بلوتوث اكس فوكس بكس سيفن", price: 200, image: "/item.png" },
  ];

  const handleDelete = (product) => {
    console.log("تم حذف المنتج:", product.name);
    // هنا تقدر تحط لوجيك الحذف من API أو State
  };

  const handleEdit = (product) => {
    console.log("تعديل المنتج:", product.name);
    // هنا تقدر تفتح مودال أو تروح لصفحة التعديل
  };

  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-5 sm:mt-7.5">
      {products.map((product, index) => (
        <AdminProductCard 
          key={index} 
          product={product} 
          onDelete={handleDelete} 
          onEdit={handleEdit} 
        />
      ))}
    </div>
  );
};

export default ProductNewList;