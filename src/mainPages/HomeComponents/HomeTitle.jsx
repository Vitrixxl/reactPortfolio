import React from "react"
import logo from '../../assets/miniLogo.svg'
import PurpleSubTitle from "../../font/PurpleSubTitle"

export default function HomeTitle() {
    return (
        <div className=" bg-gray-def text-center flex flex-col  mt-16  md:mt-24   ">
            <img src={logo} alt="" className="h-16 sm:h-24   md:h-32   lg:h-38  xl:h-40" />
            <div className=" mt-32">
                <h1 className="py-4 w-full  text-white-default text-3xl md:text-4xl  lg:text-4xl  xl:text-5xl font-t font-bold my-0">Cascales Vitrice</h1>
                <PurpleSubTitle label={"Apprenti développeur MERN Stack"}/>
            </div>


        </div>
    )
};
