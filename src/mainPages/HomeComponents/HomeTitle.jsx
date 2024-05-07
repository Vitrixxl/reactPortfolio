import React from "react"
import logo from '../../assets/miniLogo.svg'
import PurpleSubTitle from "../../font/PurpleSubTitle"

export default function HomeTitle() {
    return (
        <div className="max-w-6xl m-auto px-4 sm:px-6 bg-gray-def text-center h-96 gap-4 items-center justify-around flex flex-col mt-20">
            <img src={logo} alt="" className="h-32" />
            <div className="w-full ">
                <h1 className="text-white-default text-5xl font-t font-bold my-0">Cascales Vitrice</h1>
                <PurpleSubTitle label={"Apprenti développeur Front-End"}/>
            </div>


        </div>
    )
};
