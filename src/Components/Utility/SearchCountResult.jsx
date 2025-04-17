import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

const SearchCountResult = ({ count }) => {
  const onSelect = ({ key }) => {
    console.log(`${key} selected`);
  };

  const onVisibleChange = (visible) => {
    console.log(visible);
  };

  const menu = (
    <Menu onSelect={onSelect} className='flex flex-col items-start gap-1.5 min-w-[130px] sm:min-w-[200px]'>
      <Divider />
      <Divider />
      <MenuItem key="1" className='text-[10.5px] sm:text-[12.5px] px-2 cursor-pointer text-gray-500 font-semibold hover:text-gray-800 transition-all duration-200 ease-in-out'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;الاكثر مبيعا</MenuItem>
      <Divider />
      <MenuItem key="2" className='text-[10.5px] sm:text-[12.5px] px-2 cursor-pointer text-gray-500 font-semibold hover:text-gray-800 transition-all duration-200 ease-in-out'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;الاعلى تقيماً</MenuItem>
      <Divider />
      <MenuItem key="3" className='text-[10.5px] sm:text-[12.5px] px-2 cursor-pointer text-gray-500 font-semibold hover:text-gray-800 transition-all duration-200 ease-in-out'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;السعر من الاقل للاعلى</MenuItem>
      <Divider />
      <MenuItem key="4" className='text-[10.5px] sm:text-[12.5px] px-2 cursor-pointer text-gray-500 font-semibold hover:text-gray-800 transition-all duration-200 ease-in-out'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;السعر من الاعلى للاقل</MenuItem>
      <Divider />
      <Divider />
    </Menu>
  );

  return (
    <div className='flex justify-between items-center pt-2 flex-wrap gap-4'>
      <p className='font-semibold text-gray-800 text-[12.5px] sm:text-[15px] md:text-[17px]'>لديك {count} نتائج بحث</p>
      <Dropdown
        trigger={['click']}
        overlay={menu}
        animation="slide-up"
        onVisibleChange={onVisibleChange}
      >
        <div className='flex items-center gap-2 cursor-pointer'>
          <img src="/sort.png" className='w-[14px] sm:w-[15px] md:w-[16px] h-[14px] sm:h-[15px] md:h-[16px]' alt='sort icon' />
          <p className='text-gray-800 font-semibold text-[11.5px] sm:text-[14px] md:text-[14.5px] mb-0 sm:mb-1'>ترتيب حسب</p>
        </div>
      </Dropdown>
    </div>
  );
};

export default SearchCountResult;