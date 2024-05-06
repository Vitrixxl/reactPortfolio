import React from "react"
import { NavLink } from "react-router-dom"
import logo from "./assets/logo.svg"
import FooterLink from "./FooterLinks/FooterLinks"
export default function Footer() {
    const footerLinkSection = [
        {
            title: "A propos",
            align:"text-left",
            links: [
                {
                    label: "VSXplore ?",
                    path: "/vsxplore",
                    key: "footer-vsxplore"
                },
                {
                    label: "Tarif",
                    path: "/tarif",
                    key: "footer-tarif"
                }
            ]
        },
        {
            title: "Portfolio",
            align:"text-center",
            links: [
                {
                    label: "Accueil",
                    path: "/",
                    key: "footer-home"
                },
                {
                    label: "Mon parcours",
                    path: "parcours",
                    key: "footer-parcours"
                },
                {
                    label: "Mes projets",
                    path: "projects",
                    key: "footer-projects"
                },
                {
                    label: "Veille informationelle",
                    path: "rest",
                    key: "footer-rest"
                },
                {
                    label: "Contact",
                    path: "/contact",
                    key: "footer-contact"
                }
            ]
        },
        {
            title:"Reseaux",
            align:"text-right",
            links:[
                {
                    label:"GitHub",
                    path:"/",
                    key:"footer-github"
                },
                {
                    label:"Linkedin",
                    path:"/",
                    key:"footer-linkedin"
                }
            ]
        }
    ]
    return (
        <div className="w-full bg-footer-default border-t border-solid border-gray-500 border-opacity-25 mt-10 md:mt-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="w-full flex flex-col gap-10 py-10 md:flex-row">
                    <div className="flex flex-col min-w-max">
                        <NavLink key={"footerLogo"}>
                            <img src={logo} alt="" className="w-16  mb-2" />
                        </NavLink>
                        <h2 className="text-white-default font-p my-0 text-lg font-bold">CASCALES Vitrice</h2>
                        <h2 className="text-white-dark font-p my-0 text-b mt-2  ">Developer Front-End Freelance</h2>
                        <h2 className="text-white-dark font-p my-0 text-b mb-2">Accesoirement alternant</h2>
                        <p className="text-white-dark font-p text-xs m-0 border-b border-white-default border-solid border-opacity-25 pb-2">
                            11 rue des bergères <br />
                            91940 Les Ulis <br />
                            FRANCE
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-2">
                        {footerLinkSection.map(section=>{
                            console.log(section)
                            return(
                                <FooterLink title={section.title} align={section.align} links={section.links}/>
                            )
                        })}
                        {/* <div className="w-full flex flex-col gap-2 text-left px-10">
                            <h2 className="text-white-default font-bold text-base">
                                A propos
                            </h2>

                        </div> */}
                    </div>


                </div>

            </div>
        </div>
    )
};
