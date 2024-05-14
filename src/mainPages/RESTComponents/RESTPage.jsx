import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import RESTHeader from "./RESTHeader"
import RESTPost from "./RESTPost"
import RESTFilter from "./RESTFilter"
import { useToggle } from "@uidotdev/usehooks"
import { AnimatePresence } from "framer-motion"
const pageVariant = {
    "initial": { opacity: 0, y: 300 },
    "animate": { opacity: 1, y: 0 },
    "exit": { opacity: 0, y: -300 },
    "transition": { duration: 0.5 }
}
export default function RESTPage() {
    const [restPost, setRestPost] = useState([])
    const [loading, toggleLoading] = useToggle(true)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [search, setSearch] = useState("")

    const searched = (p) => {
        const regex = new RegExp(search, "i"); // "i" pour une correspondance insensible à la casse
        return regex.test(p); // 
    }
    const [themeFilters, setThemeFilters] = useState([])

    const searchFilter = (p) => {
        console.log(themeFilters)
        if (themeFilters.length ==0){
            return true
        }
        for (const theme of themeFilters) {
            for (const pr of p) {
                if (pr._id === theme) {
                    return true;
                }
            }
        }
        return false;

    }
    useEffect(() => {
        const url = "https://api-portfolio-l1tc.vercel.app/api/rest/getpost"
        fetch(url, {
            method: "get",
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRestPost(data)
                toggleLoading()
            })
    }, [])
    return (
        <motion.div variants={pageVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            className=" w-full">
            <div className="flex flex-col gap-4 max-w-3xl lg:max-w-6xl px-4 mx-auto min-h-screen">
                <RESTHeader />
                <div className="grid grid-cols-10 mt-4 gap-4">
                    <div className="col-span-10 lg:col-span-7 flex flex-col gap-6">
                        <AnimatePresence mode='wait'>
                            {restPost.posts && restPost.posts.map((post, index) => {

                                return (

                                    searched(post.postTitle) && searchFilter(post.postThemes) ?
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -400 : 400 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ type: "just", delay: index * 0.2 }}
                                            exit={{ opacity: 0, y: -300 }} key={post._id + index} >
                                            <RESTPost postContent={post} connected={restPost.connected} index={index} key={post._id} />
                                        </motion.div>

                                        :
                                        <motion.div
                                            key={post._id}
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: 0 }}
                                            exit={{ opacity: 0 }}
                                        />

                                )
                            })

                            }
                        </AnimatePresence>
                    </div>
                    <div className="col-span-10  row-start-1 col-start-1  lg:col-span-3 lg:col-start-8 ">
                        <RESTFilter setSearch={setSearch} setThemeFilters={setThemeFilters} themeFilters={themeFilters} />
                    </div>




                </div>
                {/* <RESTFilter />
                <div className="flex flex-col gap-2">
                    {
                        restPost.map(post => {
                            <RESTPost postContent={post}/>
                        })
                    }
                </div> */}
            </div>

        </motion.div>
    )
};
