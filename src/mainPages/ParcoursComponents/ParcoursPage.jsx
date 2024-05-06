import React from "react"
import { motion } from "framer-motion"
import ParcoursHeader from "./ParcoursHeader"
import SelfComponent from "./SelfComponent"
import ParcoursList from "./ParcoursList"
const pageVariant = {
    "initial": { opacity: 0, y: 300 },
    "animate": { opacity: 1, y: 0 },
    "exit": { opacity: 0, y: -300 },
    "transition": { duration: 0.5 }
}

export default function ParcoursPage() {
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
                <div className="max-w-6xl m-auto grid grid-cols-12 px-4 sm:px-6 gap-8">
                    {/* <div className="bg-white-default col-span-4">

                    </div> */}
                    <div className=" col-span-8 min-h-screen">
                        <ParcoursList/>
                    </div>
                    <div className="col-span-4">
                        <SelfComponent />
                    </div>
                </div>
            </div>
        </motion.div>
    )
};
