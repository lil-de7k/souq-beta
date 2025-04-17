import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// زر مخصص Next (هيبقى على اليمين مع rtl)
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-sm text-gray-700 hover:text-gray-950 transition-all duration-200 ease-in-out"
      onClick={onClick}
    >
      ⮞
    </div>
  );
};

// زر مخصص Prev (هيبقى على الشمال مع rtl)
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-sm text-gray-700 hover:text-gray-950 transition-all duration-200 ease-in-out"
      onClick={onClick}
    >
      ⮜
    </div>
  );
};

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/mobile.png",
    "/mobile1.png",
    "/mobile2.png",
  ];

  const settings = {
    rtl: true, // عكس الاتجاه هنا
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white px-3 pb-7 pt-2 sm:pb-4 sm:pt-4 rounded-md shadow-sm relative w-full md:w-[300px] md:h-[360px]">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-center h-full pt-5.5">
                <img
                  src={img}
                  alt=""
                  className="object-contain max-h-[220px] md:max-h-[280px] w-full"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* النقاط تحت السلايدر */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-0.5 rounded-full ${
                activeIndex === index ? "bg-black" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;