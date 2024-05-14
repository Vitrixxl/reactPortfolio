import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from "../mainPages/HomeComponents/HomePage"
import ProjectPage from "../mainPages/ProjectComponents/ProjectPage"
import { AnimatePresence } from "framer-motion"
import ParcoursPage from "../mainPages/ParcoursComponents/ParcoursPage"
import RESTPage from "../mainPages/RESTComponents/RESTPage"
import RESTPostPage from "../mainPages/RESTComponents/RESTPostPage.jsx"
import { ParcoursProjects } from "../Context/ParcoursProjectsContext.jsx"
import ContactPage from "../mainPages/ContactComponents/ContactPage.jsx"
export default function AnimatedRoutes() {
    const location = useLocation();
    const [direction, setDirection] = useState("top")
    return (
        <ParcoursProjects.Provider value={{ direction, setDirection }}>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index element={<HomePage />} />

                    <Route path="/parcours" element={<ParcoursPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/rest/:postId" element={<RESTPostPage />} />
                    <Route path="/rest" element={<RESTPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </AnimatePresence>
        </ParcoursProjects.Provider>

    )
};
