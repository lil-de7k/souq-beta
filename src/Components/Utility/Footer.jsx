import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-950 text-white pt-3.5 pb-5 mt-10 sm:mt-15 px-5 sm:px-5 lg:px-20'>
        {/* Logo Section */}
        <div className='mb-6'>
          <h1 className='text-[33px] sm:text-[40px] md:text-[45px] lg:text-[46px] logo'>سوق</h1>
        </div>

        {/* Footer Links Section */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-11'>
          <div>
            <h3 className='text-[10px] sm:text-[12px] lg:text-[13px] mb-1'>حول سوق</h3>
            <ul>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>من نحن</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>وظائف</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>سياسة الخصوصية</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>الشروط والأحكام</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-[10px] sm:text-[12px] lg:text-[13px] mb-1'>خدمات العملاء</h3>
            <ul>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>الدعم الفني</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>الأسئلة المتكررة</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>إرجاع المنتجات</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>طرق الدفع</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-[10px] sm:text-[12px] lg:text-[13px] mb-1'>المتابعة</h3>
            <ul>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>المدونة</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>التطبيقات</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>العروض والخصومات</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>المنتجات المميزة</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-[10px] sm:text-[12px] lg:text-[13px] mb-2'>وسائل التواصل</h3>
            <ul className='flex gap-3'>
              <li><a href='#' className='text-[12px] sm:text-[10px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'><i className='fab fa-linkedin'></i></a></li>
              <li><a href='#' className='text-[12px] sm:text-[10px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'><i className='fab fa-github'></i></a></li>
              <li><a href='#' className='text-[12px] sm:text-[10px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'><i className='fab fa-instagram'></i></a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-[10px] sm:text-[12px] lg:text-[13px] mb-1'>تحميل التطبيق</h3>
            <ul>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>متجر جوجل</a></li>
              <li><a href='#' className='text-[10px] sm:text-[12px] lg:text-[13px] hover:text-gray-300 text-gray-400 transition-all duration-200 ease-in-out'>أبل ستور</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='text-center text-[10px] sm:text-[11px] lg:text-[12px] text-gray-700 border-t pt-5'>
          <p className='text-gray-400'>© {new Date().getFullYear()} سوق. جميع الحقوق محفوظة.</p>
        </div>
    </div>
  )
}

export default Footer
