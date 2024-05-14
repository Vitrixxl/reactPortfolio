import React, { useState } from "react"
import NavBar from "./Nav"

import Footer from "./Footer"
import AnimatedRoutes from "./Anim/AnimatedRoutes.jsx"

import { BrowserRouter as Router } from 'react-router-dom'
import { LogginContext } from "./Context/LoggingContext.jsx"
export default function App() {
    const [newsSignIn, setNewsSignIn] = useState(false)
    return (


        <Router>
            <LogginContext.Provider value={{newsSignIn,setNewsSignIn}} >
                <NavBar />
                <AnimatedRoutes />
                <Footer />
            </LogginContext.Provider>
        </Router>



    )
};
