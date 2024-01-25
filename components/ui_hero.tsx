'use client'
import Link from "next/link";
import { Player } from '@lottiefiles/react-lottie-player';
import { IUiHero } from "@/utils/graphqlInterface";
import { useEffect, useState } from "react";


export default function UiHero(props:{
    data: IUiHero
}) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Aplicar estilos iniciales solo cuando el componente se monta
        if (!loaded) {
            const button = document.getElementById('BtnHero');

            if (button) {
                button.style.backgroundPosition = '100% 0';
                button.style.color = '#e75d50';

                // Marcar el componente como cargado
                setLoaded(true);
            }
        }
    }, [loaded]);
    
    return (
    <div className="bg-[#f5f2ea] overflow-hidden relative xl:pt-16">    
<div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 flex-col lg:flex-row ">
    <div className="py-12 lg:py-16 z-20 text-center lg:text-start">
        <div className="mb-2 font-semibold	text-xl text-[#e75d50]">
        {props.data.label}
        </div>
        <h2 className="text-4xl font-extrabold text-[#282c37] sm:text-6xl">
        <span className="block">
            {props.data.title}
            </span>
            <span className="block text-[#282c37]">
            {props.data.titleDown}
            </span>
        </h2>
        <p className="text-base mt-4 text-[#e75d50]" style={{maxWidth: "33rem"}}>
        {props.data.description}
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-6 inline-flex rounded-full border border-black p-1 overflow-hidden">
                <Link target="_blank" href={props.data.link.value} passHref>
                    <button
                        id="BtnHero" // Agrega un ID al botón para facilitar la identificación
                        type="button"
                        className="py-3 px-4 w-full text-[#e75d50] text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-3xl relative overflow-hidden"
                        style={{
                            backgroundImage: 'linear-gradient(to right, #e75d50, #e75d50 50%, #f5f2ea 50%, #f5f2ea 100%)',
                            backgroundSize: '200% 100%',
                            transition: 'background-position 0.5s'
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                            if (e.target instanceof HTMLButtonElement) {
                                e.target.style.backgroundPosition = '0% 0';
                                e.target.style.color = '#f5f2ea'; // Cambia el color del texto al pasar el mouse
                            }
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                            if (e.target instanceof HTMLButtonElement) {
                                e.target.style.backgroundPosition = '100% 0';
                                e.target.style.color = '#e75d50'; // Restaura el color del texto al salir del mouse
                            }
                        }}
                    >
                        {props.data.link.text}
                    </button>
                </Link>
            </div>
        </div>
    </div>
    <div className="max-w-lg">
    <Player
            autoplay
            loop
            src={props.data.animation}
            style={{ height: '500px', width: '500px' }}
          >
            {/* <Controls visible buttons={['play', 'repeat', 'frame', 'debug']} /> */}
          </Player>
    {/* <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" className="mb-12 lg:mb-0 relative top-0 right-0 h-full"/> */}
    </div>
</div></div>

    )
  }