import React, { useState, forwardRef, useImperativeHandle, useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import logo from './assets/biggyLogo.svg'
import { useToggle } from "@uidotdev/usehooks"
import cookie from "cookiejs"
import { ThreeCircles } from "react-loader-spinner"
import { LogginContext } from "./Context/LoggingContext"
const NavBar = ((props, ref) => {
 
    const {newsSignIn} = useContext(LogginContext)
    const {setNewsSignIn} = useContext(LogginContext)
    const navigate = useNavigate()
    const navOption = [
        { id: 'nav-home', label: "Accueil", path: "/" },
        { id: 'nav-parcours', label: "Mon parcours", path: "/parcours" },
        { id: 'nav-projects', label: "Mes projets", path: "/projects" },
        { id: 'nav-rest', label: "REST à jour", path: "/rest" },
        { id: 'nav-contact', label: "Contact", path: "/contact" }
    ]

    const controls = useDragControls()
    function startDrag(event) {
        controls.start(event)
    }
    const [mailed, setMailed] = useState(cookie.get("usermail"))
    const [invalidCode, setInvalideCode] = useState(false)
    const [wrongMail, setWrongMail] = useState(false)
    const [invalidMail, setInvalidMail] = useState(false)
    const [userCode, setUserCode] = useState("")
    const [logged, setLogged] = useState(cookie.get("usermail") && cookie.get("newsletterToken"))
    const [mail, setMail] = useState("")
    const [newsLoading, setNewsLoadind] = useState(false)
  

    const signIn = (e) => {
        e.preventDefault()
        setNewsLoadind(true)

        const url = "https://api-portfolio-l1tc.vercel.app/api/user/createuser"
        fetch(url, {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ userMail: mail })
        })
            .then(response => {
                if (!response.ok) {
                    setWrongMail(true);
                    setMailed(false);
                    throw new Error()
                }
                response.json()
            })
            .then(() => {

                setMailed(true);
                setMail("")
                cookie("usermail", mail, { expires: new Date(2300, 11, 31) })
                setWrongMail(false);
                setNewsLoadind(false)
                document.querySelector(".inputNewsLetter").value=""

            })
            .catch(() => { setWrongMail(true); setMailed(false); setNewsLoadind(false) })
    }



    const activating = (e) => {
        e.preventDefault()
        setNewsLoadind(true)
        const url = "https://api-portfolio-l1tc.vercel.app/api/user/verifycode"
        fetch(url, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ userMail: cookie.get("usermail"), userCode: userCode })
        }).then(response => {
            if (!response.ok) {
                setNewsLoadind(false)
                setInvalideCode(true);
                throw new Error()
            }
            return response.json()

        }).then(data => {
            cookie("newsletterToken", data.token, { expires: new Date(2300, 11, 31) })
            setNewsLoadind(false)
            setLogged(true)

        })
            .catch(() => console.log("error"))
    }

    const handleMailInput = (e) => {
        setMail(e.target.value)
        if (!mail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            setInvalidMail(true)
        } else {
            setInvalidMail(false)
        }
    }




    const handleCodeInput = (e) => {
        e.target.value.length > 6 ? e.target.value = e.target.value.substring(1) : e.target.value = e.target.value
        e.target.value < 6 ? setInvalideCode(true) : setInvalideCode(false)
        setUserCode(e.target.value)

    }


 
        const handleNewsletter = ()=> {
            cookie.get("newsletterToken") ? navigate("/rest") : setNewsSignIn(true)
        }




    return (
        <div className="w-full sticky top-0 bg-background-def bg-opacity-90 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-center h-20">
                    <div className="w-6/12  sm:w-4/12 md:w-3/12 lg:w-2/12" >
                        <NavLink to={"/"} key={"nav-logo"}>
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="w-8/12 md:w-10/12 text-center">

                        <ul className="hidden md:block">
                            {navOption.map(option => (
                                <li key={option.id} className="inline-block mx-4 md:text-xs lg:text-sm font-semibold text-white-default hover:text-white-lightest py-2 transition duration-200 ease-in-out">
                                    <NavLink to={option.path} className={({ isActive }) => (
                                        isActive ? "border-b-2 border-solid border-purple-default  pb-1" : ""
                                    )}>{option.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-2/12 flex justify-end">
                        <AnimatePresence>
                            <motion.div layout layoutId="newsletterKey" key={"buttonNews"} className="bg-gradient-to-br from-purple-light via-purple-default to-purple-dark rounded" transition={{ duration: 0 }}>
                                <div className="bg-gray-700 w-full h-full p-0.5 hover:bg-opacity-0 transition-all duration-200 rounded">
                                    <div className="bg-footer-default w-full h-full rounded-sm">
                                        <button className="py-0.5 px-2 xs:px-4 xs:py-2 text-white-default hover:text-white-lightest text-sm xs:text-md" onClick={() => handleNewsletter()}>
                                            Newsletter
                                        </button>
                                    </div>
                                </div>

                            </motion.div>

                            {
                                newsSignIn && !logged &&
                                (
                                    <motion.div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black bg-opacity-30"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}

                                    >

                                        {


                                            <motion.div onPointerDown={startDrag} layout layoutId="newsletterKey" key={"containerNews"} className={(mailed ? " w-max " : "min-w-96 ") + " rounded-md relative  bg-gradient-to-tr from-purple-light via-purple-default to bg-purple-dark"}
                                                dragControls={controls}
                                                drag
                                                exit={{ scale: 0, transition: { duration: 0.3 } }}
                                                dragConstraints={{ left: -500, right: 500, top: -200, bottom: 200 }}
                                                transition={{ delay: 0.3, type: "spring", velocity: 1.5, mass: 0.5 }}
                                                animate={{ scale: 1 }}

                                            >
                                                <div className="w-full p-0.5  h-full bg-gray-700 hover:bg-opacity-0 transition-all duration-200 rounded-md">
                                                    <div className="w-full h-full bg-footer-default flex flex-col gap-4 p-6 rounded text-center">
                                                        {newsLoading &&
                                                            (
                                                                <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-60">
                                                                    <ThreeCircles
                                                                        visible={true}
                                                                        height="50"
                                                                        width="50"
                                                                        color="#9D4EDD"
                                                                        strokeWidth="5"
                                                                        animationDuration="0.75"
                                                                        ariaLabel="rotating-lines-loading"
                                                                        wrapperStyle={{}}
                                                                        wrapperClass=""
                                                                    />
                                                                </div>

                                                            )
                                                        }
                                                        <motion.button className="absolute right-2 top-2 text-white-default flex p-1 cursor-pointer hover:bg-red-600 hover:bg-opacity-80 rounded transition-all duration-200" onClick={() => setNewsSignIn(false)}>
                                                            <motion.i className="gg-close"></motion.i>
                                                        </motion.button>
                                                        <motion.h1 className="font-p font-semibold text-white-light">
                                                            {mailed ? "Saisissez le code envoyer par mail" : "Inscription à la Newsletter"}
                                                        </motion.h1>

                                                        <form className="flex gap-4 justify-center">
                                                            <input onInput={(e) => mailed ? handleCodeInput(e) : handleMailInput(e)}
                                                                type={mailed ? "number " : "text"}
                                                                placeholder={mailed ? "123456" : "dupontmichel@exemple.com"}
                                                                className={"inputNewsLetter "+(mailed ? "w-20 px-3" : "w-full px-4") + "  ring-1 focus:ring-2  " + (invalidMail || (mailed && invalidCode) ? "ring-red-500 " : "ring-purple-light") + "   font-t focus:outline-none  py-0.5 rounded-md bg-footer-default  text-purple-lightest "} />
                                                            <button className="text-white-default " onClick={(e) => mailed ? activating(e) : signIn(e)}>{mailed ? "Valider" : "M'inscrire"}</button>
                                                        </form>
                                                    </div>

                                                </div>





                                            </motion.div>


                                            // <motion.div onPointerDown={startDrag} layout layoutId="" key={"containerNewsCode"} className="p-4 bg-footer-default border-white-default border-solid border flex flex-col gap-2"
                                            //     dragControls={controls}
                                            //     drag
                                            //     initial={{ x: 0, y: 0, scale: 0 }}
                                            //     animate={{ x: 0, y: 0, scale: 1 }}
                                            //     dragConstraints={{ left: -500, right: 500, top: -200, bottom: 200 }}
                                            //     exit={{ scale: 0 }}
                                            //     transition={{ delay: 0.3, type: "spring", velocity: 1.5, mass: 2 }}

                                            // >
                                            //     <motion.h1 className="font-p font-semibold text-white-light">
                                            //         {"Entrez le code de confirmation qui vous à été envoyé par mail"}
                                            //     </motion.h1>

                                            //     <form className="flex gap-4 pt-">
                                            //         <input onInput={(e) => handleCodeInput(e)}
                                            //             type="text"
                                            //             placeholder="Rechechez ici ..."
                                            //             className={" ring-1 focus:ring-2  " + (invalidMail ? "ring-red-500 " : "ring-purple-light") + "   font-t focus:outline-none   px-4 py-0.5 rounded-md bg-footer-default  text-purple-lightest "} />
                                            //         <button className="text-white-default" onClick={(e) => activating(e)}>Verifier</button>

                                            //     </form>

                                            // </motion.div>


                                        }


                                    </motion.div>
                                )
                            }

                        </AnimatePresence>


                    </div>
                </div>
            </div>
        </div>
    )
})

export default NavBar

