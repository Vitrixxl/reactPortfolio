import React from "react"
import fullLogo from "../../assets/fullLogoSized.svg"
import { NavLink } from "react-router-dom"
import { LinearGradient } from "react-text-gradients"
export default function ParcoursCard({ content, right }) {
    return (


        <div className={"w-full bg-gradient-to-tr " + (right ? "from-purple-dark via-purple-default to-purple-lightest lightest-md" : "from-purple-lightest via-purple-default to-purple-dark rounded-md") + " from-purple-lightest via-purple-default to-purple-dark rounded-md"}>
            <div className="w-full h-full bg-gray-800 hover:bg-opacity-0 transition-all duration-200 p-0.5  rounded">
                <div className="p-6 bg-footer-default text-white-default grid grid-cols-6 grid-rows-2 aspect-auto gap-4  rounded">
                    <div className={"col-span-2 row-span-2 min-h-20 flex items-center justify-center border-solid border-gray-500 border-opacity-50 " + (right ? "border-l col-start-5 pl-6" : "pr-6 border-r")}>
                        <img src={content.img} alt="" className="" />
                    </div>
                    <div className={"p-4 col-span-4  row-span-2 " + (right ? "row-start-1" : "")}>

                        <div className="flex flex-col w-full gap-4">
                            <div className={"w-full " + (right ? "text-end" : "text-start")}>
                                <p className="font-semibold font-t text-xl text-white-light">{content.title}</p>
                            </div>
                            <div className={"w-full " + (right ? "text-start" : "text-end") + "text-balance"}>
                                <p className="font-p font-normal text-white-light">{content.caption}</p>
                            </div>
                            <div className={"min-w-full "}>
                                <NavLink to="/project" className={"mt-2 p-2 transition-all duration-200 rounded-sm flex hover:bg-gray-700 hover:bg-opacity-30 items-center " + (right ? "justify-start" : "justify-end")}>
                                    <LinearGradient className={"font-p text-sm  font-medium flex gap-2  " + (right ? "flex-row-reverse" : "")}
                                        gradient={[(right ? "to left" : "to right"), "#E0AAFF,#9D4EDD"]}
                                    >
                                        Voir les projets associés <i className={"text-purple-dark "+ (right ? "gg-arrow-left" : "gg-arrow-right")}></i>
                                    </LinearGradient>
                                </NavLink>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
};
