import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
export default function RESTFilter({ setSearch, setThemeFilters, themeFilters }) {
    const [filters, setFilters] = useState()
    useEffect(() => {
        fetch("http://localhost:3000/api/postTheme/gettheme", {
            method: "get"
        }).then(res => res.json())
            .then(data => setFilters(data))
    }, [])
    const handleFilter = (e) => {

        if (!themeFilters.includes(e)) {
            setThemeFilters(prevFilter => ([
                ...prevFilter,
                e
            ]))
        } else {
            setThemeFilters(prevFilter => {
                const newFilters = [...prevFilter];
                const index = newFilters.indexOf(e);
                if (index !== -1) {
                    newFilters.splice(index, 1);
                }
                return newFilters;
            })

        }

    }
    const isFiltring = (id) => {
        for (let index = 0; index < themeFilters.length; index++) {
            const themeId = themeFilters[index];
            if (themeId == id) {
                return true
            }

        }
        return false

    }
    return (
        <div className=" w-fit lg:w-full  bg-transparent lg:bg-gradient-to-tl from-purple-lightest via-purple-default to-purple-dark rounded-md">
            <div className="w-full h-full  bg-transparent lg:bg-gray-700 p-0.5 rounded-md  hover:bg-opacity-0 transition-all duration-200 ">
                <div className="w-full h-full bg-transparent lg:bg-footer-default p-0 lg:p-4 flex flex-row lg:flex-col rounded gap-4">
                    <input onInput={(e) => setSearch(e.target.value)} type="text" placeholder="Rechechez ici ..." className="font-t focus:outline-none focus:ring-none  focus:border-2 focus:border-purple-default px-4 py-0.5 rounded-md bg-footer-default  text-white-dark border-solid border-gray-700 border-2" />
                    <div className="hidden lg:grid grid-cols-2 gap-2">
                        {filters && (filters.map((filter, index) => (
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, transition: { duration: 0.05 } }} onClick={() => handleFilter(filter._id)} key={filter._id} className={"font-p font-semibold text-start text-white-dark p-2 px-4 rounded-md focus:outline-none   bg-opacity-0 bg-gray-500 hover:bg-opacity-15 transition-[background] duration-100 " + (isFiltring(filter._id) ? "bg-opacity-20" : "")}>
                                {filter.postThemeName}
                            </motion.button>
                        )))}

                    </div>

                </div>
            </div>
        </div>
    )
};
