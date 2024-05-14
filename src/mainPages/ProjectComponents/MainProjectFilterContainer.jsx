import React, { useEffect, useState } from "react"
import { useToggle } from "@uidotdev/usehooks"
import * as Icon from 'react-bootstrap-icons';
import { useContext } from "react";
import { filterProps, motion } from "framer-motion";
import { ProjectContext } from "../../Context/ProjectContext";
export default function MainFilterContainer() {
    const [mainFilter, setMainFilter] = useState([])
    const { mainFiltring, setMainFiltring } = useContext(ProjectContext)


    const [active, setActive] = useState([

    ]
    )

    const isFiltring = (id) => {

        return mainFiltring && mainFiltring.find(filter => filter.id === id)
    }

    const handleClickFilter = (id, all) => {

        if ((mainFiltring[0] && mainFiltring[0].all == true) || all == true) {
            setMainFiltring([{ id, all }])
        } else if (mainFiltring.find(filter => filter.id === id)) {

            setMainFiltring(prevFilters => prevFilters.filter(filter => filter.id !== id));
        } else {

            setMainFiltring(prevFilters => [...prevFilters, { id, all }]);
        }


    }
    useEffect(() => {
        const url = "https://api-portfolio-l1tc.vercel.app/api/typeProject/getall"
        fetch(url, {
            method: "get"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error: " + response.status);
                }
                return response.json();
            })
            .then(data => {

                setMainFilter(data);

                setMainFiltring([data.find(filter => filter.all === true)])

            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div className="sticky top-28  bg-gradient-to-tr from-purple-lightest via-purple-default to-purple-dark rounded-md">
            <div className="h-full w-full bg-gray-700 p-0.5 hover:bg-opacity-0 transition-all duration-200 rounded-md">
                <div className="h-full w-full flex flex-col gap-2 p-4 bg-footer-default rounded">
                    {mainFilter && mainFilter.map((filter, index) => {

                        return (

                            <motion.div className={"w-full"} whileHover={{ scale: 1.04, duration: 50 }} whileTap={{ scale: 0.95, duration: 50 }}>
                                <motion.button onClick={() => handleClickFilter(filter._id, filter.all)} className={" w-full font-t font-semibold font-lg text-white-dark hover:text-white-light  p-2 px-4 transition-all duration-200 flex gap-2 rounded text-start " + (isFiltring(filter._id) && "bg-gray-500 bg-opacity-30 text-white-lightest")}  >
                                    <Icon.Folder2Open size={20} className={"text-white-lightest  text-sm font-semibold"} />
                                    <p className=" ">{filter.typeProjectLabel}</p>
                                </motion.button>
                            </motion.div>
                        )
                    }
                    )}










                </div>
            </div>
        </div >
    )

};
