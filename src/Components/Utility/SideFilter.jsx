import React from 'react';

const SideFilter = () => {
  return (
    <div className="mt-3 space-y-5">
      {/* الفئة والماركة جمب بعض في الشاشات الصغيرة */}
      <div className="flex flex-row justify-between gap-5 sm:flex-col">
        {/* الفئة */}
        <div className="flex flex-col flex-1">
          <div className="text-[10.5px] sm:text-sm font-bold sm:font-semibold text-gray-800">الفئة</div>
          {['الكل', 'اجهزة منزلية', 'اجهزة منزلية', 'اجهزة منزلية', 'اجهزة منزلية'].map((category, index) => (
            <div key={index} className="flex items-center mt-2 gap-1.5">
              <input type="checkbox" className="form-checkbox w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <label className="ml-2 text-[10.5px] sm:text-[12px] font-semibold text-gray-700">{category}</label>
            </div>
          ))}
        </div>

        {/* الماركة */}
        <div className="flex flex-col flex-1">
          <div className="text-[10.5px] sm:text-sm font-bold sm:font-semibold text-gray-800">الماركة</div>
          {['الكل', 'ابل', 'سامسونج'].map((brand, index) => (
            <div key={index} className="flex items-center mt-2 gap-1.5">
              <input type="checkbox" className="form-checkbox w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <label className="ml-2 text-[10.5px] sm:text-[12px] font-semibold text-gray-700">{brand}</label>
            </div>
          ))}
        </div>
      </div>

      {/* السعر */}
      <div>
        <div className="text-[10.5px] sm:text-sm font-bold sm:font-semibold text-gray-800">السعر</div>
        <div className="flex items-center mt-2">
          <p className="text-[9.5px] sm:text-[11px] font-semibold text-gray-700">من:</p>
          <input
            min={0}
            type="number"
            className="mr-1 ml-2 text-[10px] text-center border border-gray-400 rounded-sm w-10 h-4.5 sm:text-xs sm:w-14 sm:h-5"
          />
        </div>
        <div className="flex items-center mt-1">
          <p className="text-[9.5px] sm:text-[11px] font-semibold text-gray-700">إلى:</p>
          <input
            min={0}
            type="number"
            className="mr-1 ml-2 text-[10px] text-center border border-gray-400 rounded-sm w-10 h-4.5 sm:text-xs sm:w-14 sm:h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SideFilter;