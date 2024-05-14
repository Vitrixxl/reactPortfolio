import React, { useContext, useEffect, useState } from "react"
import { motion } from 'framer-motion';
import MainFilterContainer from "./MainProjectFilterContainer";
import { Routes, Router, useLocation } from "react-router-dom";
import { ParcoursProjects } from "../../Context/ParcoursProjectsContext";
import ProjectHeader from "./ProjectHeader";
import { ProjectContext } from "../../Context/ProjectContext";
import ToolsFilterContainer from "./ToolsFilterContainer";
import ProjectCard from "./ProjectCard";
import { useToggle } from "@uidotdev/usehooks";


export default function ProjectPage() {
    const location = useLocation()

    const [toolsFilter, setToolsFilter] = useState([])
    const [viewing, toggleViewing] = useToggle(false)
    const [projects, setProjects] = useState()
    const [animationEnded, toggleAnimationEnded] = useToggle(false)
    const { setDirection } = useContext(ParcoursProjects)
    const { direction } = useContext(ParcoursProjects)
    const handleAnimationEnding = () => {
        toggleAnimationEnded()
    }
    useEffect(() => {
        toggleViewing(false)
    }, [location.pathname]);




    useEffect(() => {
        window.scrollTo(0, 0);
        const timeout = setTimeout(() => {
            toggleAnimationEnded();
        }, 500);

        return () => clearTimeout(timeout);

    }, []);
    useEffect(() => {

        const url = toolsFilter[0] ? "https://api-portfolio-l1tc.vercel.app/projects/getAll/" + toolsFilter.join("-") : "https://api-portfolio-l1tc.vercel.app/api/projects/getAll/all"
        console.log(url)

        fetch(url, {
            method: "get"
        })
            .then(response => response.json())
            .then(data => {

                setProjects(data)
            })



    }, [toolsFilter])
    const [mainFiltring, setMainFiltring] = useState([])
    const filtring = (id) => {
        if (mainFiltring && mainFiltring.find(filter => filter.all === true) || !mainFiltring[0]) {
            return true
        }

        return mainFiltring.find(filter => filter.id === id)
    }

    const pageVariant = {
        "initial": { opacity: 0, y: direction === "bottom" ? 300 : 0, x: direction === "right" ? 300 : direction === "left" ? -300 : 0 },
        "animate": { opacity: 1, y: 0, x: 0 },
        "exit": { opacity: 0, y: -300 },
        "transition": { duration: 0.5 }
    }

    return (
        <motion.div variants={pageVariant}
            initial="initial"
            animate="animate"
            exit="exit"

            transition="transition"
            className=" w-full">
            <div className="max-w-6xl  px-4 mx-auto relative ">
                <ProjectHeader />
                <ProjectContext.Provider value={{ toolsFilter, setToolsFilter, viewing, toggleViewing, setMainFiltring, mainFiltring }}>
                    <div className="w-full min-h-screen grid grid-cols-8 lg:grid-cols-10 pt-8 gap-4 ">
                        {

                        }
                        <div className="hidden md:block col-span-2">
                            <MainFilterContainer />
                        </div>

                        <div className={"col-span-8 md:col-span-5 col-start-0"}>

                            {projects && animationEnded && projects.map((project, index) => (
                                filtring(project._id) &&
                                <ProjectCard project={project} index={index} key={project._id} x />
                            ))}

                        </div>


                        <div className="col-span-3 hidden lg:block">
                            <ToolsFilterContainer />

                        </div>




                    </div>
                </ProjectContext.Provider>

            </div>


        </motion.div>
    )
};

