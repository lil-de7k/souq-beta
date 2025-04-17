import React from 'react'

const ProductDescription = () => {
  return (
    <div>
      <div className="mt-3 sm:mt-2">
        <div className="text-gray-700 text-xs sm:text-sm font-semibold">الالكترونيات :</div>
      </div>

      <div className="flex flex-col mt-2">
        <div>
          <div className="inline-block text-[13px] sm:text-[14.5px] md:text-md lg:text-md font-bold text-gray-800">
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر
            <span className="inline-block mx-3 text-yellow-500 font-semibold text-[12px] sm:text-[13.5px]">4.5</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-1">
        <div className="text-[12px] sm:text-[13.5px]">
          <div className="inline-block text-gray-700 font-medium">الماركة :</div>
          <div className="inline-block mx-1 text-gray-600">سامسنوج</div>
        </div>
      </div>

      <div className="flex mt-3">
        <div className="w-4 h-4 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-5.5 lg:h-5.5 rounded-full border border-gray-300 ms-2" style={{ backgroundColor: "#E52C2C" }}></div>
        <div className="w-4 h-4 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-5.5 lg:h-5.5 rounded-full border border-gray-300 ms-2" style={{ backgroundColor: "white" }}></div>
        <div className="w-4 h-4 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-5.5 lg:h-5.5 rounded-full border border-gray-300 ms-2" style={{ backgroundColor: "black" }}></div>
      </div>

      <div className="mt-4">
        <div className="text-gray-700 text-xs sm:text-sm font-semibold">المواصفات :</div>
      </div>

      <div className="mt-0.5">
        <div className="">
          <div className="inline-block text-[11px] sm:text-[12.5px] md:text-sm text-gray-700 leading-6 sm:leading-7">
            يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة، 
            وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة الوجه. 
            يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف الذكية. 
            شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك العصبي، 
            ما يمكّنك من التقاط صور لم يسبق لها مثيل.
            كاميرا بعدسة واحدة تجعل الأشخاص الموجودين في الأمام في نطاق تركيز دقيق على عكس نطاق الخلفية غير الواضح.
            نظرة عامة.
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-5.5">
        <div className="flex justify-between items-center">
          <div className="inline-block text-[13px] sm:text-[14.5px] font-bold text-gray-600">
            34000 جنية
          </div>
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900 text-[10.5px] sm:text-[12px] text-white rounded-sm cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-in-out">
            اضف للعربة
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
