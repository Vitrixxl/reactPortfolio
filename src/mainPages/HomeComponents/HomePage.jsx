
import Scroller from "./Scroller.jsx";
import HomeTitle from "./HomeTitle.jsx";
import { motion } from 'framer-motion';
import react, { useEffect } from "react";
const pageVariant = {
    "initial": { opacity: 0, y: 300 },
    "animate": { opacity: 1, y: 0 },
    "exit": { opacity: 0, y: -300 },
    "transition": { duration: 0.5 }
}

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <motion.div
            variants={pageVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            className="w-full min-h-screen">
            <HomeTitle />
            <Scroller />
        </motion.div>
    )
};
