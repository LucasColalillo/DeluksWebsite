'use client'

;
import { IUiQa } from '@/utils/graphqlInterface';
import React, { useState } from 'react';

  const FaqItem = ({ question , answer }: {question: string , answer: string}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <li className="bg-[#493f3f] text-[#f5f2ea] my-4 mx-3 shadow-lg rounded-2xl">
      <h2
        className="px-4 flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <span>{question}</span>
        <svg
          className={`ml-2 fill-current h-7 w-7 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div 
        className=" overflow-hidden max-h-0 transition-max-h duration-400 ease-in-out"
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <p className="p-3 rounded-b-xl text-[#f5f2ea] bg-[#493f3f]">{answer}</p>
      </div>
    </li>
  );
};

const Ui_faq = (props: {
  data: IUiQa
}) => {
  return (
    <>
      <div id='preguntas-frecuentes' className='bg-[#f5f2ea]'>
        <div className="bg-[#f5f2ea]">
          <main className="p-5 bg-light-blue">
            <div className="flex justify-center items-start my-2">
              <div className="w-full sm:w-10/12 md:w-1/2 my-1 flex flex-col items-center justify-center">
              <div className='text-5xl text-[#e75d50] flex justify-center font-bold py-12'>
              {props.data.title}</div>
                <ul className="flex flex-col">
                  {
                  props.data.itemsCollection.items.map((qa, idx) => {
                    return (
                      <FaqItem
                      key={idx}
                      question={qa.question}
                      answer={qa.answer}
                    />
                      )
                  })
                  }
                  
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Ui_faq;
