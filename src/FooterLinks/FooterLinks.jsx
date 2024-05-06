import React from "react"
import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion'
export default function FooterLink({ title, align, links }) {

    return (

        <div className={` w-full flex flex-col gap-2 px-10" + ${align} `}>
            <h2 className="text-white-default font-bold text-base">
                {title}
            </h2>
            {links.map(link => (

                <NavLink key={link.key} to={link.path} className="text-white-dark text-sm hover:text-white-default transition-all duration-200">
                    <motion.h1 initial={{ opacity: 0}} animate={{opacity:1}} transition={{duration:1}}>
                        {link.label}
                    </motion.h1>

                </NavLink>





            ))}
        </div>

    )
};
