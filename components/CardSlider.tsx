'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardSliderItem = ({ title, description, txt, image, link }: {
title: string, description: string, txt: string, image: string, link: string
}) => {
  
  const content = (
    <div className="block w-[300px] lg:w-[350px] px-8 p-6 bg-[#f5f2ea] hover:bg-[#2e165d] transition ease-in duration-200 rounded-lg shadow h-[400px]">
      <div className='flex justify-center'>
        <img src={image} alt={title} className="mb-4 object-contain w-24 h-24 mt-8" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#8C52FF]">{title}</h1>
        <p className="text-white">{txt}</p>
      </div>
      <div className='w-full h-[1px] bg-[#2b2f3b] my-4' />
      <p className="font-normal text-[#dfd7ef]">{description}</p>
    </div>
  );

  return link ? <a target='_blank' href={link}>{content}</a> : content;
};


const CardSlider = ({ items }: {items:  {title: string, description: string, txt: string, image: string, link: string}[]}
 ) => {
  return (
    <Swiper
      spaceBetween={30} // Aumenta el espacio entre slides si es necesario
      slidesPerView={1} // Número inicial de slides por vista
     
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        // Breakpoints para pantallas más grandes
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <CardSliderItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;