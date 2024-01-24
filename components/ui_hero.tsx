'use client'
import Link from "next/link";
import { Player } from '@lottiefiles/react-lottie-player';
import { IUiHero } from "@/utils/graphqlInterface";

export default function UiHero(props:{
    data: IUiHero
}) {
    return (
    <div className="bg-[#f5f2ea] overflow-hidden relative h-screen pt-8">    
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
            <div className="mt-6 inline-flex rounded-xl border border-[#e75d50]">
                <Link target="_blank" href={props.data.link.value} passHref>
                <button type="button" className="py-3 px-4  bg-[#f5f2ea] hover:bg-[#e75d50] text-[#e75d50] hover:text-[#f5f2ea] w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl">
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