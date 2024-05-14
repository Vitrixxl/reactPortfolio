import React from "react"
import { NavLink } from "react-router-dom"
import "boxicons"
export default function Scroller() {
    return (
        <div className="w-full mt-48  md:mt-36 ">
            <NavLink to="/parcours" className="max-w-6xl mx-auto  px-4 sm:px-6 flex flex-col gap-10">
                <div className="w-full text-center ">
                    <h3 className="font-p text-lg  sm:text-xl  lg:text-2xl text-white-light font-light  m-0">
                        Commencer la visite
                    </h3>

                </div>
                <div className="w-full flex justify-center min-h-20">
                    <div to={"/parcours"} className="w-14 shadow-md h-14 hover:scale-125 transition-all duration-500 cursor-pointer  flex justify-center items-center text-white-dark rounded-full">
                        <box-icon name='up-arrow' color="white" animation={"fade-up"}></box-icon>
                    </div>
                </div>
            </NavLink>

        </div>
    )
};
