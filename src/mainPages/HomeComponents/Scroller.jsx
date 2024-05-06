import React from "react"
import { NavLink } from "react-router-dom"

export default function Scroller() {
    return (
        <div className="w-full mt-20 ">
            <div className="max-w-6xl mx-auto  px-4 sm:px-6 flex flex-col gap-10">
                <div className="w-full text-center ">
                    <h3 className="font-p text-2xl text-white-light font-light  m-0">
                        Commencer la visite
                    </h3>

                </div>
                <div className="w-full flex justify-center min-h-20">
                    <NavLink to={"/parcours"} className="w-14 shadow-md h-14 hover:scale-125 transition-all duration-500 cursor-pointer scrollIcon flex justify-center items-center text-white-dark rounded-full">
                        <i className="gg-eject"></i>
                    </NavLink>
                    

                </div>
            </div>

        </div>
    )
};
