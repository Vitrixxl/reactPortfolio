import react, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion"
import ParcoursHeader from "./ParcoursHeader"
import SelfComponent from "./SelfComponent"
import ParcoursCard from "./ParcoursCard"
import { ParcoursCardContent } from "./ParcoursCardContent.jsx"
import { ParcoursProjects } from "../../Context/ParcoursProjectsContext";

let right = false
export default function ParcoursPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [exitDirection, setExitDirection] = useState("top")
    const { setDirection } = useContext(ParcoursProjects)
    const { direction } = useContext(ParcoursProjects)
    const pageVariant = {
        "initial": { opacity: 0, y: 300 },
        "animate": { opacity: 1, y: 0 },
        "exit": { opacity: 0, y: direction == "top" ? -300 : 0, x: direction != "top" ? direction == "left" ? 300 : -300 : 0 },
        "transition": { duration: 0.5 }
    }
    return (
        <motion.div className="min-h-screen"
            variants={pageVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
        >
            <ParcoursHeader />
            <div className="pt-14 text-center">
                <div className="max-w-3xl  lg:max-w-6xl m-auto grid grid-cols-12 px-4 sm:px-6 gap-8">
                    {/* <div className="bg-white-default col-span-4">

                    </div> */}
                    <div className="col-span-12 lg:col-span-8 min-h-screen">
                        <div className="w-full flex flex-col gap-8">
                            {ParcoursCardContent.map((content, index) => (

                                <ParcoursCard content={content} key={index} right={index % 2 === 0} index={index} />
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block col-span-4">
                        <SelfComponent />
                    </div>
                </div>
            </div>
        </motion.div>
    )
};
