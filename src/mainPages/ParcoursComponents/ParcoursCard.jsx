import React from "react"
import fullLogo from "../../assets/fullLogoSized.svg"
export default function ParcoursCard({ title, caption, img, right }) {
    return (
        // <div className=" w-full  ParcoursCard relative bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark p-px rounded-sm">
        //     <div className="w-full bg-footer-default h-full text-white-lightest p-4">
        //     {title + caption + img} 
        //     </div>

        // </div>

        <div className="w-full bg-gradient-to-tr from-purple-lightest via-purple-default to-purple-dark">
            <div className="w-full h-full bg-gray-800 hover:bg-opacity-0 transition-all duration-200 p-0.5">
                <div className="p-6 bg-footer-default text-white-default grid grid-cols-6 grid-rows-2 aspect-auto gap-4">
                    <div className={"col-span-2 row-span-2 min-h-20 flex items-center justify-center border-solid border-gray-500 border-opacity-50 "+ (right ? "border-l col-start-5 pl-6":"pr-6 border-r") }>
                        <img src={fullLogo} alt="" className="" />
                    </div>
                    <div className={"col-span-4  row-span-2 "+ (right ? "row-start-1":"")}>
                        <p className="text-white-dark    font-semibold">
                            <span className="text-white-light">Lorem ipsum </span> dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus placeat, rerum nobis consequatur vero dolore atque saepe et dicta necessitatibus amet dolorem, sed explicabo quibusdam magnam hic nulla accusantium.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
};
