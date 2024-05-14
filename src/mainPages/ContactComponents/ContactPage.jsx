import React from "react"
import { motion } from "framer-motion"
import Title from "../../font/Title"
import ContactHeader from "./ContactHeader"
import ContactForm from "./ContactForm"
const pageVariant = {
    "initial": { opacity: 0, y: 300 },
    "animate": { opacity: 1, y: 0 },
    "exit": { opacity: 0, y: -300 },
    "transition": { duration: 0.5 }
}
export default function ContactPage() {
    return (
        <motion.div
            variants={pageVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            className="w-full">

            <div className="w-full">
                <div className="max-w-5xl px-4 sm:px-6  mx-auto ">
                    <ContactHeader />
                    <ContactForm />
                </div>
            </div>

        </motion.div>
    )
};
