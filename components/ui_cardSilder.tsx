'use client'
import React from 'react';
import CardSlider from './CardSlider';

const CardSliderItems = [
  {
    image:'/TravelExplorer.svg',
    title: 'Travel Explorer',
    txt:'E-Commerce Development',
    description: 'Desarrollamos un e-commerce robusto para agilizar reservas y ventas en agencia de turismo',
    link: "https://travelexplorer.store/"
  },
  {
    image:'/stakeame-logo-3.png',
    title: 'Stakeame',
    txt:'Web Development',
    description: 'Creamos una aplicación blockchain innovadora para transacciones seguras y eficientes.',
    link: "https://stakea.me/"
  },
  {
    image:'/Zink.svg',
    title: 'Zink',
    txt: 'Web Development',
    description: 'Desarrollamos una aplicación intuitiva para facilitar donaciones y gestión de fondos.',
    link: "https://zink.tips/"
  },
  {
    image:'/Knnawood.png',
    title: 'Knnawood',
    txt: 'E-Commerce Development',
    description: 'E-commerce personalizado para fábrica de indoors, optimizando ventas y experiencia de usuario',
    link: ""
  },
  {
    image:'/Mk_odontologia.png',
    title: 'MK',
    txt:'Web Development',
    description: 'Sitio web de odontología con estrategias publicitarias para aumentar pacientes y visibilidad.',
    link: "https://mkodontologiaintegral.com/"
  },
  {
    image:'/Gentem.png',
    title: 'Gentem',
    txt:'Web Development',
    description: 'Diseñamos un sitio web interactivo para ONG, mejorando su alcance y engagement.',
    link: ""
  },
 
];

const Ui_cardSilder = () => (
  <div id='testimonials' className="bg-[#f5f2ea] relative">

      
<div className="mx-auto flex max-w-7xl justify-between p-6 lg:px-8 flex-col ">

  <div className='bg-[#f5f2ea] py-40 '>
    <div className='flex justify-center items-center mb-8'>
        <p className='text-3xl md:text-5xl font-extrabold text-white mb-12'>Casos de exito.</p>
        </div>
    <CardSlider items={CardSliderItems} />
  </div>
  </div>
  </div>
);

export default Ui_cardSilder;
