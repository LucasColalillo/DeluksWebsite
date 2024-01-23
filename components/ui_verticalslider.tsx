'use client'

import { IUiServices } from '@/utils/graphqlInterface';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

export function UiVerticalSlider(props: {
  data: IUiServices
}) {
    const [activeTab, setActiveTab] = useState(props.data.servicesCollection.items[0].title);
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
      <div className='text-3xl sm:text-5xl text-white flex justify-center font-extrabold pt-12'>{props.data.title}</div>
        <div className="mx-auto flex flex-col md:flex-row max-w-7xl  p-6 pb-0 lg:px-8 relative">
      <div className=' md:sticky top-0 left-0 w-full md:w-2/4 md:h-screen overflow-auto my-6 md:my-0 hidden md:flex flex-col items-center md:items-start justify-center '>
      {props.data.servicesCollection.items.map(tab => (
        <div 
            key={tab.title}
            onClick={() => scrollToTab(tab.title)}
            className={`py-4 md:p-4 cursor-pointer ${activeTab === tab.title ? 'text-white' : 'text-[#C5B5E6] hover:text-[#a78ae0]'} text-lg font-semibold flex items-center`}
        >
            <div 
            className={`a_arrow-icon w-4 h-4 transition-opacity duration-200 ${activeTab === tab.title ? 'opacity-100' : 'opacity-0'} transform ${activeTab === tab.title ? 'translate-x-0' : '-translate-x-2'}`}
            >
            <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16.5 12.5L9 20" stroke="#E2E3E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            </div>
            {tab.title}
        </div>
        ))}
      </div>
      <div className='pl-1/4 flex flex-col items-center sm:items-baseline mt-6 md:mt-0 '>
        {props.data.servicesCollection.items.map(tab => {
        return (
          <div key={tab.title}
          ref={el => (contentRefs as any).current[tab.title] = el} 
          className='tab-content pb-8 min-h-[40vh] md:min-h-[60vh] lg:min-h-[80vh] flex items-center text-center flex-col md:text-start md:flex-col md:items-baseline' data-tab-name={tab.title} /* style={{minHeight: '80vh'}} */>
            <h2 className='text-3xl md:text-3xl font-bold my-2 text-white'>{tab.title}</h2>
            <p className='mb-4 text-[#C5B5E6]'>{tab.description}</p>
            <div className='flex justify-center w-full items-center'>
              <img src={tab.image.url} alt={tab.image.description} className='mt-12 rounded-lg w-[400px]' />
            </div>
          </div>
        )})}
      </div>
    </div>
    <div>
    <div className="pb-12 flex justify-center rounded-xl shadow">
                <Link target="_blank" href={props.data.callToAction?.value as string} passHref>
                <button type="button" className="py-3 px-4  bg-[#8C52FF] hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl">
                    {props.data.callToAction?.text}
                </button>
                </Link>      
            </div>
    </div>
    </div>
  );
}