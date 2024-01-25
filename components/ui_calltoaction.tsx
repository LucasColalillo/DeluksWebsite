'use client'
import { IUiCta } from "@/utils/graphqlInterface"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UiCallToAction(props: {
    data: IUiCta
}) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Aplicar estilos iniciales solo cuando el componente se monta
        if (!loaded) {
            const button = document.getElementById('BtnCTA');

            if (button) {
                button.style.backgroundPosition = '100% 0';
                button.style.color = '#e75d50';

                // Marcar el componente como cargado
                setLoaded(true);
            }
        }
    }, [loaded]);

    return (
<div className="bg-[#f5f2ea]">
    <div className="text-center w-full mx-auto py-32 px-4 sm:px-6 lg:py-32 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-white">
                {props.data.title}
            </span>
            <span className="block text-[#e75d50]">
                {props.data.titleDown}
            </span>
        </h2>
        <p className="text-base mt-6 max-w-md mx-auto text-[#282c37]">
            {props.data.description}
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-6 inline-flex rounded-full border border-black p-1 overflow-hidden">
                <Link target="_blank" href={props.data.callToAction.value} passHref>
                    <button
                        id="BtnCTA" // Agrega un ID al botón para facilitar la identificación
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
                        {props.data.callToAction.text}
                    </button>
                </Link>
            </div>
        </div>
    </div>
</div>
    )
  }