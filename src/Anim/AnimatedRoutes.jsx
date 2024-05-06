import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from "../mainPages/HomeComponents/HomePage"
import ProjectPage from "../mainPages/ProjectComponents/ProjectPage"
import { AnimatePresence } from "framer-motion"
import ParcoursPage from "../mainPages/ParcoursComponents/ParcoursPage"
export default function AnimatedRoutes() {
    const location = useLocation();
    
    return (

        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element={<HomePage />} />
                <Route path="/parcours" element={<ParcoursPage/>} />
                <Route path="/projects" element={<ProjectPage />} />
            </Routes>
        </AnimatePresence>


    )
};
