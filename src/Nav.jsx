import React from "react"
import { NavLink } from "react-router-dom"
import logo from './assets/logo.svg'
export default function NavBar() {
    const navOption = [
        { id: 'nav-home', label: "Accueil", path: "/" },
        { id: 'nav-parcours', label: "Mon parcours", path: "/" },
        { id: 'nav-projects', label: "Mes projets", path: "/projects" },
        { id: 'nav-rest', label: "REST à jour", path: "/" },
        { id: 'nav-contact', label: "Contact", path: "/" }
    ]
    return (
        <div className="w-full sticky top-0 bg-background-def bg-opacity-90">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-center h-20">
                    <div className="w-2/12">
                        <NavLink to={"/"}>
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="w-8/12 md:w-10/12 text-center">

                        <ul className="hidden md:block">
                            {navOption.map(option => (
                                <div className="inline-block mx-3">
                                    <li className="inline-block md:text-xs lg:text-sm font-semibold text-white-default hover:text-white-lightest py-2 transition duration-200 ease-in-out">
                                        <NavLink to={option.path} className={({ isActive }) => (
                                            isActive ? "border-b-2 border-solid border-purple-default  pb-1" : ""
                                        )}>{option.label}</NavLink>
                                    </li>

                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="w-2/12">

                    </div>
                </div>
            </div>
        </div>
    )
};
