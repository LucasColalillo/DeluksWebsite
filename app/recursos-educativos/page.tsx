'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const tabsData = [
    {
      name: 'Estrategias de Prospección',
      title: 'Estrategias de Prospección',
      description: 'Aprende a identificar y conectar eficazmente con tus clientes ideales a través de técnicas de prospección innovadoras.',
      vidUrl: 'https://docs.material-tailwind.com/demo.mp4',
    },
    {
      name: 'Habilidades de Venta',
      title: 'Habilidades de Venta',
      description: 'Mejora tu tasa de cierre con consejos prácticos y estrategias de venta probadas, diseñadas para el mercado IT.',
      vidUrl: 'https://docs.material-tailwind.com/demo.mp4',
    },
    {
      name: 'Optimización de LinkedIn',
      title: 'Optimización de LinkedIn',
      description: 'Domina LinkedIn con nuestros consejos expertos para mejorar tu perfil y estrategias de networking',
      vidUrl: 'https://docs.material-tailwind.com/demo.mp4',
    },
    {
      name: 'Creación de Contenido en LinkedIn',
      title: 'Creación de Contenido en LinkedIn',
      description: 'Aprende a crear contenido atractivo y relevante en LinkedIn. Descubre cómo esto aumenta tu visibilidad, establecer tu credibilidad y fortalecer tu red de contactos en el sector IT.',
      vidUrl: 'https://docs.material-tailwind.com/demo.mp4',
    },
  ];

export default function RecursosEducativos() {
    const [activeTab, setActiveTab] = useState('Marketing');
    const contentRefs = useRef({});

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.getAttribute('data-tab-name') as string);
          }
        });
      }, { threshold: 0.5 });
  
      document.querySelectorAll('.tab-content').forEach(tab => {
        observer.observe(tab);
      });
  
      return () => observer.disconnect();
    }, []);

    const scrollToTab = (tabName: string) => {

        (contentRefs as any).current[tabName].scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

  return (
    <div id='services' className="bg-[#240131] relative">
      <div className='text-3xl sm:text-5xl text-white flex justify-center font-extrabold pt-12'>Nuestros Servicios</div>
        <div className="mx-auto flex flex-col md:flex-row max-w-7xl  p-6 pb-0 lg:px-8 relative">
      <div className=' md:sticky top-0 left-0 w-full md:w-2/4 md:h-screen overflow-auto my-6 md:my-0 hidden md:flex flex-col items-center md:items-start justify-center '>
      {tabsData.map(tab => (
        <div 
            key={tab.name}
            onClick={() => scrollToTab(tab.name)}
            className={`py-4 md:p-4 cursor-pointer ${activeTab === tab.name ? 'text-white' : 'text-[#C5B5E6] hover:text-[#a78ae0]'} text-lg font-semibold flex items-center`}
        >
            <div 
            className={`a_arrow-icon w-4 h-4 transition-opacity duration-200 ${activeTab === tab.name ? 'opacity-100' : 'opacity-0'} transform ${activeTab === tab.name ? 'translate-x-0' : '-translate-x-2'}`}
            >
            <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16.5 12.5L9 20" stroke="#E2E3E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            </div>
            {tab.name}
        </div>
        ))}
      </div>
      <div className='pl-1/4 flex flex-col items-center sm:items-baseline mt-6 md:mt-0 '>
        {tabsData.map(tab => (
          <div key={tab.name}
          ref={el => (contentRefs as any).current[tab.name] = el} 
          className='tab-content pb-8 min-h-[40vh] md:min-h-[60vh] lg:min-h-[80vh] flex items-center text-center flex-col md:text-start md:flex-col md:items-baseline' data-tab-name={tab.name} /* style={{minHeight: '80vh'}} */>
            <h2 className='text-3xl md:text-3xl font-bold my-2 text-white'>{tab.title}</h2>
            <p className='mb-4 text-[#C5B5E6]'>{tab.description}</p>
            <div className='flex justify-center w-full items-center mt-6'>
              <video className="h-3/2 w-3/4 rounded-lg" controls autoPlay>
              <source src={tab.vidUrl} type="video/mp4" />
            </video>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
    <div className="pb-12 flex justify-center rounded-xl shadow">
                <Link target="_blank" href="https://calendly.com/frelo/30min" passHref>
                <button type="button" className="py-3 px-4  bg-[#8C52FF] hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl">
                    Programa tu Reunión Hoy
                </button>
                </Link>      
            </div>
    </div>
    </div>
  )
}
