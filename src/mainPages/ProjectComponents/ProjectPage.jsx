import React from "react"
import { motion } from 'framer-motion';
const pageVariant = {
    "initial":{opacity:0,y:300},
    "animate":{ opacity: 1, y: 0 },
    "exit" : { opacity: 0, y: -300 },
    "transition" : { duration: 0.5 }
}
export default function ProjectPage() {
    return ( 
        <motion.div variants={pageVariant}
        initial= "initial"
        animate= "animate"
        exit= "exit" 
        transition=  "transition"
            className="h-screen">
                <h1 className="text-white-default w-full text-center">HEEEEEy</h1>
            Project
        </motion.div>
    )
};
