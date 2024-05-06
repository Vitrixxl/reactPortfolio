import React from "react"

export default function Scroller() {
    return (
        <div className="w-full mt-20 ">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                <div className="w-full text-center ">
                    <h3 className="font-p text-2xl text-white-light font-light  m-0">
                        Commencer la visite
                    </h3>

                </div>
                <div className="w-full flex justify-center min-h-32">
                    <div className="w-14 h-14 bg-purple-lightest bg-opacity-30 hover:text-white-lightest hover:bg-purple-default hover:bg-opacity-100 transition-all duration-200 cursor-pointer scrollIcon flex justify-center items-center text-white-dark rounded-full">
                        <i class="gg-chevron-double-down"></i>
                    </div>

                    {/* <span className=""></span> */}
                </div>
            </div>

        </div>
    )
};
