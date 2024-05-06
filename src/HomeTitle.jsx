import React from "react"
import logo from './assets/logo.svg'
export default function HomeTitle() {
    return (
        <div className="max-w-6xl m-auto  bg-gray-def text-center h-96 gap-4 items-center justify-around flex flex-col mt-20">
            <img src={logo} alt="" className="h-25" />
            <div className="w-full ">
                <h1 className="text-white-default text-5xl font-t font-bold my-5">Cascales Vitrice</h1>
                <h2 className="text-2xl font-p font-semibold text   my-5 tracking-widest" style={{
                    background: "linear-gradient(to right, #AB00FF 35%, #8300C4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>Apprenti developpeur web</h2>
            </div>


        </div>
    )
};
