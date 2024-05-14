import React, { useEffect, useState,useContext } from "react"
import { useToggle } from "@uidotdev/usehooks"
import * as Icon from 'react-bootstrap-icons';
import "boxicons"
import { ProjectContext } from "../../Context/ProjectContext";

import { motion } from "framer-motion";
export default function ToolsFilterContainer() {

    const  {toolsFilter,setToolsFilter} = useContext(ProjectContext)
    const [tools, setTools] = useState([])
    const toggleFiltre = (id) => {
        if (toolsFilter.includes(id)) {
            setToolsFilter(prevFilters => prevFilters.filter(filterId => filterId !== id))
            console.log(toolsFilter)
        } else {
            setToolsFilter(prevFilters => [...prevFilters, id]);

        }

    }
    useEffect(() => {
        {
            fetch("https://api-portfolio-l1tc.vercel.app/api/tools/getTools", {
                method: "get",
            }).then(res => res.json()).then(data => {
                setTools(data)
            })
        }
    }, [])

    return (
        <div className="sticky top-28  bg-gradient-to-tr from-purple-lightest via-purple-default to-purple-dark rounded-md">
            <div className="h-full w-full bg-gray-700 p-0.5 hover:bg-opacity-0 transition-all duration-200 rounded-md">
                <div className="h-full w-full grid grid-cols-2 p-4 bg-footer-default rounded gap-2">

                    {tools.map(tool => {
                        const iconName = tool.icon.toString()

                        return (
                            <motion.div key={tool._id} className={"w-full"}whileHover={{scale:1.05}} whileTap={{scale:0.95, transition:{duration:0.05}}}>
                                <motion.button  className={" w-full font-t font-semibold font-lg text-white-dark hover:text-white-light  p-2 px-4 transition-all duration-200 flex gap-3 rounded text-start " + (toolsFilter.includes(tool._id) ? "bg-white-darkest  bg-opacity-30 text-white-lightest" : "")} onClick={() => { toggleFiltre(tool._id) }}>
                                    <box-icon name={iconName}  type={tool.typeIcon} color="#ededed" className={"text-white-lightest  text-sm font-semibold"} ></box-icon>
                                    <p className="">{tool.name}</p>
                                </motion.button>
                            </motion.div>
                        )
                    })}






                </div>
            </div>
        </div >
    )
};
