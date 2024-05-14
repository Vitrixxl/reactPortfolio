import React, { useContext, useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import "boxicons"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import LinearGradientPurple from "../../font/LinearGradientPurple"
import { useToggle } from "@uidotdev/usehooks"
import { createRipples } from 'react-ripples'
import { ProjectContext } from "../../Context/ProjectContext";
import { AnimatePresence } from "framer-motion"



const MyRipples = createRipples({
  color: 'rgba(224, 170, 255,0.2)',
  during: 2200,
})
export default function ProjectCard({ project, index }) {

  const { viewing, toggleViewing } = useContext(ProjectContext)

  const [cardHover, setCardHover] = useToggle(false)
  const projectCardVariant = {
    "initial": { opacity: 0, y: 500 },
    "animate": { opacity: 1, y: 0 },
    "transition": { duration: 0.3, delay: index * 0.3 }
  }
  const handleLeaveCard = () => {
    document.querySelector(".projectBigCard").scrollTo(0, 0)
    setTimeout(() => {
      toggleViewing()
    }, 400);

  }
  return (
    <motion.div className="">
      <motion.div layout layoutId={"card"} className=" w-full bg-gradient-to-b from-purple-lightest via-purple-default to-purple-dark rounded-md" onHoverStart={setCardHover} onHoverEnd={setCardHover}
        variants={projectCardVariant}
        initial={"initial"}
        animate={"animate"}
        transition={"transition"}
      >
        <div className="w-full h-full bg-gray-800 hover:bg-opacity-0 transition-all duration-200 p-0.5  rounded">
          <div className=" bg-footer-default text-white-default flex flex-col  gap-4  w-full px-4 rounded">
            <div className="w-full py-4 rounded overflow-hidden">
              <NavLink to="" className="relative h-64 inline-block overflow-hidden py-4 w-full rounded" >
                <motion.img src={"../../" + project.mainImg} className=" absolute top-0 left-0 object-cover w-full h-full object-center" whileHover={{ scale: 1.3 }} alt="" />
              </NavLink>
            </div>
            <div className="flex flex-col py-4 gap-2 border-t-2 border-gray-800 ">
              <div className="w-full text-start">
                <motion.h2 className="font-t text-xl font-semibold">
                  {project.title}
                </motion.h2>
              </div>
              <div className="w-full text-start  ">
                <motion.p className="font-p font-medium text-white-dark selfCaption">
                  {project.caption}
                </motion.p>
              </div>
              <div className="text-left">
                <div className="flex gap-2">
                  <p className="font-p text-sm font-semibold mr-4">Stack : </p>
                  {project.tools.map(tool => (
                    <box-icon name={tool.icon} type={tool.typeIcon} size="" color="white"></box-icon>
                  ))}
                </div>
              </div>
              <MyRipples className="rounded-md">
                <button className="flex flex-col items-center  justify-center h-full w-full" onClick={() => { toggleViewing() }}>
                  <LinearGradientPurple label={"Voir le projet"} className={"font-semibold text"} />
                  <box-icon name='chevron-down' size="" animation={(cardHover ? "tada" : "")} color="#E0AAFF"></box-icon>
                </button>
              </MyRipples>




            </div>
          </div>
        </div>

      </motion.div>
      <AnimatePresence className={""}>

        {viewing &&

          (
            <motion.div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70 z-30 "
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1, transition: { duration: 0.2, staggerChildren: 0.5 }
              }}

              exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.2 } }}


            >
              <motion.div className="max-w-6xl px-4 py-36 max-h-full box-border overflow-auto projectBigCard scroll-smooth"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, type: "spring", mass: 0.8, delay: 0.5 }}
              >
                <motion.div className="top-10 mx-auto bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark  max-h-full rounded-lg"
                  layout layoutId={"card"}
                >
                  <div className="w-full bg-gray-700 hover:bg-opacity-0 transition-all duration-200 p-0.5 rounded-lg max-h-full">
                    <div className="w-full h-full bg-footer-default flex flex-col  gap-6   rounded-lg max-h-full overflow-auto p-10 ">
                      <div className="flex w-full">
                        <NavLink to="" className="relative h-96  overflow-hidden rounded-md flex w-full" >
                          <motion.img src={"../../" + project.mainImg} className="absolute top-0 left-0 object-cover w-full h-full object-center" whileHover={{ scale: 1.3 }} alt="" />
                        </NavLink>
                      </div>

                      <motion.h1 className="font-t text-2xl font-md text-white-light " >
                        {project.title}
                      </motion.h1>
                      <motion.p className="font-p font-medium text-white-dark " >
                        {project.caption}
                      </motion.p>
                      <motion.div className="flex flex-col gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.section.map((section, index) => (
                          section.img ? (
                            <motion.div className={"grid grid-cols-6 gap-4 border-t-2 py-6 border-gray-700"}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1, transition: { duration: 0.6 } }}

                              viewport={{ once: false, amount: 0.8 }}
                            >
                              <div className={"col-span-2 " + (index % 2 == 0 ? "col-start-1" : "col-start-5")}>
                                <img src={"../../mainSalade.png"} alt="hey" />
                              </div>
                              <div className={"col-span-4 text-left flex items-center flex-row row-start-1 " + (index % 2 == 0 ? "col-start-3" : "col-start-1")}>
                                <p className="font-p font-medium text-white-dark">
                                  {section.caption}
                                </p>
                              </div>
                            </motion.div>
                          ) :
                            (
                              <motion.p className=" py-2 pt-6 font-p font-base text-md text-white-light text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: index * 0.5 }}>
                                {section.caption}
                              </motion.p>
                            )

                        ))}
                      </motion.div>

                      <div className="grid  place-content-end w-full">
                        <button className="bg-gray-700 bg-opacity-0 rounded-md  hover:bg-opacity-30 transition-all duration-200 p-2 font flex gap-2" onClick={() => { handleLeaveCard() }}>

                          <LinearGradientPurple label={"Revenir aux projets"} className={"font-semibold text"} />

                          <box-icon name='right-arrow-alt' color="#E0AAFF"></box-icon>

                        </button>

                      </div>

                    </div>



                  </div>

                </motion.div>

              </motion.div>


            </motion.div>
          )

        }
      </AnimatePresence >
    </motion.div >

  )
};

