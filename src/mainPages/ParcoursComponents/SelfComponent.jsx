import React, { useEffect, useRef } from "react"
import MidP from "../../font/MidP.jsx";
import SmallP from "../../font/SmallP.jsx"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useToggle } from "@uidotdev/usehooks";
import BigP from "../../font/BigP.jsx";
export default function SelfComponent() {
    const backgroundRef = useRef(null);
    const [open, toggleOpen] = useToggle(false)

    const closePopUp = (e) => {
        if (e.target == backgroundRef.current) {
            toggleOpen
        }
    }
    const caption = "Dynamique, curieux et passioné, j'ai toujours aimé la technologie et de fait le developpement. Durant mon ma formation (BTS SIO OPTION SLAM) j'ai developpé des competences"

    return (
        <motion.div className="sticky top-28">
            <motion.div layoutId={"selfCard"} className="bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark p-px rounded">
                <motion.div className="bg-footer-default p-4 rounded">
                    <motion.div className="text-start flex-root">

                        <motion.a href="https://www.linkedin.com/in/vitrice-cascales-b15039276/" className="hover:bg-gray-700 hover:bg-opacity-30 p-4 transition-all duration-500 flex flex-row rounded">
                            <motion.img src="" alt="" />
                            <MidP label={"Cascale Vitrice"} />
                        </motion.a>
                    </motion.div>
                    <motion.div className="text-start py-2 border-t border-solid border-white-dark mt-4 pt-4">
                        <motion.p layoutId={"subTitle"} className="text-white-dark text-sm selfCaption">
                            {caption}

                        </motion.p>
                        {/* <SmallP label={caption} /> */}
                    </motion.div>
                    <motion.div className="text-end">
                        <motion.p className="text-purple-default pt-4 font-t cursor-pointer underline" onClick={toggleOpen}>Voir plus ...</motion.p>
                    </motion.div>
                </motion.div>

            </motion.div>
            <AnimatePresence>
                {
                    open && (

                        <motion.div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-70" id="bgSelfPopUp"

                            ref={backgroundRef}
                            onClick={closePopUp}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >


                            <motion.div layoutId={"selfCard"} className=" relative max-w-2xl bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark p-px rounded">
                                <motion.div className="bg-footer-default p-6 px-10 rounded">
                                    <motion.div className="flex justify-between">
                                        <motion.div className="text-start items-center flex gap-2 mt-0.5">
                                            <motion.img src="" alt="" />
                                            <BigP label={"Cascales Vitrice"} />
                                        </motion.div>
                                        <motion.div>
                                            <motion.a href="https://www.linkedin.com/in/vitrice-cascales-b15039276/" className="font-t  mt-0.5 text-white-dark hover:bg-gray-700 hover:bg-opacity-30 p-2 transition-all duration-500 flex gap-2 items-center rounded px-4">

                                                <motion.span className=" text-2xl">+</motion.span>Linkedin
                                            </motion.a>

                                        </motion.div>
                                    </motion.div>
                                    <motion.div>
                                        <motion.p layoutId={"subTitle"} layout className="text-white-dark text-md mt-4 border-t border-solid border-gray-500 border-opacity-50 py-6">
                                            <span className="font-p font-semibold   "
                                                style={{
                                                    background: "linear-gradient(to right, #E0AAFF 15%, #C77DFF 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent"
                                                }}>Dynamique</span>,
                                            <span className="font-p font-semibold   "
                                                style={{
                                                    background: "linear-gradient(to right, #E0AAFF 15%, #C77DFF 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent"
                                                }}> curieux</span> et <span className="font-p font-semibold   "
                                                    style={{
                                                        background: "linear-gradient(to right, #E0AAFF 15%, #C77DFF 100%)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent"
                                                    }}>passioné</span>
                                            , j'ai toujours aimé la technologie et de fait le developpement. Durant mon ma formation (BTS SIO OPTION SLAM) j'ai developpé des competences dans divers languages de programmation mais aussi dans l'organisation et la conceptualisation du developpement. De plus la réalisation de projets personnels qui m'ont fait gagner en autonomie.
                                        </motion.p>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="absolute top-1 right-1">
                                    <motion.button className="text-white-default flex p-2 cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 rounded  " onClick={toggleOpen}>
                                        <motion.i className="gg-close"></motion.i>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                    )
                }
            </AnimatePresence>
        </motion.div>



    )
};
