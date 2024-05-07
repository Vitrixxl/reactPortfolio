import React, { useEffect } from "react"
import MidP from "../../font/MidP.jsx";
import SmallP from "../../font/SmallP.jsx"
import { AnimatePresence, motion } from "framer-motion";
import { useStatenp } from "react";
import { useToggle } from "@uidotdev/usehooks";
import BigP from "../../font/BigP.jsx";
export default function SelfComponent() {
    const [open, toggleOpen] = useToggle(false)
    useEffect(() => {
        console.log(open)
    }, [open])
    const caption = "Dynamique, curieux et passioné, j'ai toujours aimé la technologie et de fait le developpement. Durant mon ma formation (BTS SIO OPTION SLAM) j'ai developpé des competences dans divers languages de programmation mais aussi dans l'organisation et la conceptualisation du developpement. De plus j'ai réalisé quelques projets personnels qui m'ont fait gagner en autonomi"
    return (
        <motion.div className="sticky top-28">
            <motion.div layoutId={"selfCard"} className="bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark p-px rounded">
                <motion.div className="bg-footer-default p-4 rounded">
                    <motion.div className="text-start flex-root">

                        <motion.a href="https://www.linkedin.com/in/vitrice-cascales-b15039276/" className="hover:bg-gray-700 hover:bg-opacity-10 p-4 transition-all duration-500 flex flex-row rounded-lg">
                            <motion.img src="" alt="" />
                            <MidP label={"Cascale Vitrice"} />
                        </motion.a>
                    </motion.div>
                    <motion.div className="text-start py-2 border-t border-solid border-white-dark mt-4 pt-4">
                        <SmallP label={caption} />
                    </motion.div>
                    <motion.div className="text-end">
                        <motion.p href="" className="text-purple-default pt-4 font-t cursor-pointer underline" onClick={toggleOpen}>Voir plus ...</motion.p>
                    </motion.div>
                </motion.div>

            </motion.div>
            {
                open && (
                    <motion.div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-30">


                        <motion.div layoutId={"selfCard"} className=" relative max-w-2xl bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark p-px rounded">
                            <motion.div className="bg-footer-default p-4 rounded">
                                <motion.div className="flex justify-between">
                                    <motion.div>
                                        <motion.img src="" alt="" />
                                        <BigP label={"Cascales Vitrice"} />
                                    </motion.div>
                                    <motion.div>

                                    </motion.div>
                                </motion.div>
                                <motion.div>
                                    <motion.p className="text-white-dark text-sm">
                                        {caption}
                                    </motion.p>
                                </motion.div>
                            </motion.div>

                            <motion.div className="absolute top-3 right-3">
                                <motion.button className="text-white-default cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 rounded-full" onClick={toggleOpen}>
                                    <motion.i className="gg-close"></motion.i>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )
            }
        </motion.div>



    )
};
