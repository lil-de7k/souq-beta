import React from 'react';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import prod3 from '/prod3.png';
import prod4 from '/prod4.png';
import slider1 from '/slider1.png';
import slider4 from '/slider4.png';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 cursor-pointer text-black text-lg"
    onClick={onClick}
  >
    ❯
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 cursor-pointer text-black text-lg"
    onClick={onClick}
  >
    ❮
  </div>
);

const Slider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const sliderData = [
    {
      image: prod3,
      text: 'مش هتقدمي بس أكل... هتقدمي ذوق',
      bgColor: 'bg-gradient-to-r from-orange-200 via-gray-100 to-orange-200',
      imageSize: 'w-55 h-55',
    },
    {
      image: prod4,
      text: 'سعر أقل... توصيل أسرع... تجربة مختلفة',
      bgColor: 'bg-gradient-to-r from-indigo-200 via-gray-100 to-indigo-200',
      imageSize: 'w-57 h-57',
    },
    {
      image: slider1,
      text: 'بشرتك تستحق أكتر من العادي',
      bgColor: 'bg-gradient-to-r from-red-200 via-gray-100 to-red-200',
      imageSize: 'w-45 h-45',
    },
    {
      image: slider4,
      text: 'اشتري النهاردة... وادفع وانت مرتاح',
      bgColor: 'bg-gradient-to-r from-violet-200 via-gray-100 to-violet-200',
      imageSize: 'w-50 h-50',
    },
  ];

  return (
    <div className="w-full px-4 md:px-17 h-73 overflow-hidden mt-5">
      <SlickSlider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index}>
            <div className={`h-65 py-16 mb-2 text-center flex flex-col items-center gap-13 sm:gap-9 xs:gap-8 justify-between rounded-sm mx-1 sm:mx-2 overflow-hidden ${item.bgColor}`}>
  <p className="font-semibold text-[11.5px] sm:text-sm md:text-sm lg:text-[15px] -mt-3 sm:-mt-5 xs:px-2 xs:py-1">{item.text}</p>
  <img
    src={item.image}
    alt={`slide-${index}`}
    className={`object-contain ${item.imageSize} w-10 h-10 sm:w-60 sm:h-60`}
  />
</div>

          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
