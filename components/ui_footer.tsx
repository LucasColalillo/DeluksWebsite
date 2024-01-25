'use client'
import { IFooter } from '@/utils/graphqlInterface';
import { useEffect, useState } from 'react';


export default function UiFooter(props: {
  data: IFooter
}) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Función para actualizar el año cada segundo
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    // Establece un intervalo para actualizar el año cada segundo
    const intervalId = setInterval(updateYear, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="relative bg-[#f5f2ea] pt-8 pb-6">
  <div className="mx-auto flex max-w-7xl  justify-between p-6 lg:px-8 flex-col">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 flex flex-col items-center text-center lg:items-baseline lg:text-left">
        <h4 className="text-2xl font-semibold text-black">{props.data.title}</h4>
        <h5 className="text-sm mt-0 mb-2 text-[#e75d50]">
          {props.data.description}
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          
            {props.data.socialLinksCollection.items.map((link, idx) => {
              return (
                <button key={idx} className=" text-white shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4" type="button">
                  <a  target="_blank" href={link.value}>
                    <img src={link.image.url} alt={link.image.description} />
                  </a>
                 </button>
                )
            })}
            
        </div>
      </div>
      <div className="w-full lg:w-6/12 ">
        <div className="flex flex-wrap justify-center text-center lg:text-left items-top mt-8 lg:mt-0 mb-6">
          <div className="lg:w-4/12 px-4 lg:ml-auto mb-4">
            <span className="block text-black text-sm font-bold mb-3">{props.data.menuCollection.items[0].title}</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-[#e75d50] hover:text-white  block pb-2 text-sm" href={props.data.menuCollection.items[0].linksCollection.items[0].value}>{props.data.menuCollection.items[0].linksCollection.items[0].text}</a>
              </li>
              <li>
                <a className="text-[#e75d50] hover:text-white  block pb-2 text-sm" href={props.data.menuCollection.items[0].linksCollection.items[1].value}>{props.data.menuCollection.items[0].linksCollection.items[1].text}</a>
              </li>
             {/*  <li>
                <a className="text-[#C5B5E6] hover:text-white  block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="text-[#C5B5E6] hover:text-white  block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li> */}
            </ul>
          </div>
          <div className=" lg:w-4/12 px-4">
            <span className="block text-black text-sm font-bold mb-3">{props.data.menuCollection.items[1].title}</span>
            <ul className="list-unstyled">
              {/* <li>
                <a className="text-[#C5B5E6] hover:text-white  block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-[#C5B5E6] hover:text-white  block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li> */}
              <li>
                <a className="text-[#e75d50] hover:text-white  block pb-2 text-sm" href={props.data.menuCollection.items[1]?.linksCollection.items[0]?.value}>{props.data.menuCollection.items[1].linksCollection.items[0]?.text}</a>
              </li>
              <li>
                <a className="text-[#e75d50] hover:text-white  block pb-2 text-sm" target="_blank" href={props.data.menuCollection.items[1]?.linksCollection.items[1]?.value}>{props.data.menuCollection.items[1]?.linksCollection.items[1]?.text}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-[#C5B5E6]" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-black font-semibold py-1">
          Copyright © <span id="get-current-year">{currentYear}</span>
          <span className="font-bold text-[#e75d50]"> Deluks Design</span> 
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}
