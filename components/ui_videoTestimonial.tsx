'use client'
import { IUiTestimonial } from '@/utils/graphqlInterface';
import React from 'react';

const UiVideoTestimonial = (props: {
  data: IUiTestimonial
}) => (
  <div id='testimonials' className="bg-[#493f3f] relative">

      
<div className="mx-auto flex max-w-7xl justify-center items-center p-6 lg:px-8 flex-col ">

  <div className=' py-40 flex flex-col justify-center items-center'>
    <div className='flex justify-center items-center mb-8'>
        <p className='text-3xl md:text-5xl font-extrabold text-white mb-12'>{props.data.title}</p>
        </div>
        {
        props.data.videosCollection.items.map((vid, idx) => {
        
        return (
          <div key={idx} className='mb-24 md:pb-8 w-full md:w-9/12 border-[#f5f2ea] bg-[#493f3f] border-solid border-2 rounded-2xl p-4 md:p-6'>
          {/* <div>
            <video className="h-full w-full rounded-lg" controls autoPlay>
              <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
         </div> */}
         <div className="video-container">
            <iframe src={vid.video} allow="autoplay" allowFullScreen></iframe>
        </div>
          <div>
          <div className="mt-7 font-semibold	text-base text-[#f5f2ea]">
            {vid.company}
          </div>
            <div className='mt-2 text-xl md:text-3xl font-bold text-[#f5f2ea] text-center'>
              {
                vid.description
              }
            </div>
          </div>
        </div>
          )
        })
        }
       
        
        
  </div>
  </div>
  </div>
);

export default UiVideoTestimonial;
