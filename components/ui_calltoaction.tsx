import { IUiCta } from "@/utils/graphqlInterface"

export default function UiCallToAction(props: {
    data: IUiCta
}) {
    return (
<div className="bg-[#240131]">
    <div className="text-center w-full mx-auto py-32 px-4 sm:px-6 lg:py-32 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-white">
                {props.data.title}
            </span>
            <span className="block text-[#8C52FF]">
                {props.data.titleDown}
            </span>
        </h2>
        <p className="text-base mt-6 max-w-md mx-auto text-[#C5B5E6]">
            {props.data.description}
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-8 inline-flex rounded-md shadow">
                <button type="button" className="py-3 px-4  bg-[#8C52FF] hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl ">
                    <a target="_blank" href={props.data.callToAction.value}>
                    {props.data.callToAction.text}
                    </a>
                </button>
            </div>
        </div>
    </div>
</div>
    )
  }