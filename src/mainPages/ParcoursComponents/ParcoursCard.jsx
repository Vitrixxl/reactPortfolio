import React, { useContext } from "react"
import { ParcoursProjects } from "../../Context/ParcoursProjectsContext";
import fullLogo from "../../assets/fullLogoSized.svg"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { LinearGradient } from "react-text-gradients"

const cardVariant = {
    offscreen: {
        scale: 0
    },
    onscreen: {
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.4
        }
    }
}

export default function ParcoursCard({ content, right }) {
    const { setDirection } = useContext(ParcoursProjects)

    console.log(content)
    return (

        <motion.div className={"w-full bg-gradient-to-tr " + (right ? "from-purple-dark via-purple-default to-purple-lightest lightest-md rounded-md" : "from-purple-lightest via-purple-default to-purple-dark rounded-md")}
            variants={cardVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="w-full h-full bg-gray-800 hover:bg-opacity-0 transition-all duration-200 p-0.5  rounded">
                <div className="p-6 bg-footer-default text-white-default grid grid-cols-6 grid-rows-2 aspect-auto gap-4  rounded">
                    <div className={"col-span-2 row-span-2 min-h-20 hidden md:flex items-center justify-center border-solid border-gray-500 border-opacity-50 " + (right ? "border-l col-start-5 pl-6" : "pr-6 border-r")}>
                        <img src={content.img} alt="" className="" />
                    </div>
                    <div className={"p-4 col-span-6 md:col-span-4  row-span-2 " + (right ? "row-start-1" : "")}>

                        <div className="flex flex-col w-full gap-4">
                            <div className={"w-full flex justify-between " + (right ? " flex-row-reverse" : " ")}>
                                <p className={" w-full font-semibold font-t text-xl text-white-light " + (right ? " text-end md:text-start" : " text-start md:text-end")}>{content.title}</p>
                                <img src={content.img} alt="" className="max-h-10 block md:hidden" />
                            </div>
                            <div className={"w-full " + (right ? "text-start" : "text-end")}>
                                <p className="font-p font-normal text-sm sm:text-base text-white-light">{content.caption}</p>
                            </div>
                            <div className={"min-w-full "}>
                                <NavLink onClick={() => right ? setDirection("right") : setDirection("left")} to="/projects" className={"mt-2 p-2 transition-all duration-200 rounded-sm flex hover:bg-gray-700 hover:bg-opacity-30 items-center " + (right ? "justify-start" : "justify-end")}>
                                    <LinearGradient className={"font-p text-sm  font-semibold flex gap-2 " + (right ? "flex-row-reverse" : "")}
                                        gradient={[(right ? "to left" : "to right"), "#E0AAFF,#9D4EDD"]}
                                    >
                                        Voir les projets associés <i className={"text-purple-dark " + (right ? "gg-arrow-left" : "gg-arrow-right")}></i>
                                    </LinearGradient>
                                </NavLink>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </motion.div>
    )
};
