import React from "react"
import NavBar from "./Nav"
import { NavLink,Outlet } from "react-router-dom"
import Footer from "./Footer"
export default function App() {
    return (
        <div className="w-full">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
};
