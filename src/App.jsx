import React from "react"
import NavBar from "./Nav"

import Footer from "./Footer"
import AnimatedRoutes from "./Anim/AnimatedRoutes.jsx"

import { BrowserRouter as Router } from 'react-router-dom'
export default function App() {


    return (


        <Router>
            <NavBar />
            <AnimatedRoutes />
            <Footer />
        </Router>



    )
};
