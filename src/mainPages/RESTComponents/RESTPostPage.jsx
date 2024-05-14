import { useToggle } from "@uidotdev/usehooks"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LinearGradientPurple from "../../font/LinearGradientPurple"
import { LinearGradient } from "react-text-gradients"
import { MagnifyingGlass } from "react-loader-spinner"
import { motion } from "framer-motion"
import "boxicons"
import { NavLink } from "react-router-dom"
export default function RESTPostPage() {
    const [restPostContent, setRestPostContent] = useState()
    const [loading, toggleLoading] = useToggle(true)
    const { postId } = useParams()
    useEffect(() => {

        fetch(`https://api-portfolio-l1tc.vercel.app/api/rest/getpost/${postId}`, {
            method: "get"
        }).then(res => res.json())
            .then(data => {
                setRestPostContent(data)
                toggleLoading(false)

            })
    }, [])



    return (
        <motion.div className="max-w-6xl  min-h-screen mx-auto"
            initial={{opacity:0,x:-300}}
            animate={{opacity:1 ,x:0}}
            exit={{opacity:0,x:300}}

        >


            {
                !restPostContent || loading ?
                    (

                        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
                            <MagnifyingGlass
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="magnifying-glass-loading"
                                wrapperStyle={{}}
                                wrapperClass="magnifying-glass-wrapper"
                                glassColor="#c0efff"
                                color="#9D4EDD"


                            />
                        </div>


                    ) :
                    (
                        <div className="grid grid-cols-12 mt-14">
                            <div className="col-span-10 px-4">
                                <div className="mx-auto max-w-6xl px-4 min-h-screen ">
                                    <div className=" flex justify-between   items-center">
                                        <h1 className="font-t font-bold text-3xl text-white-lightest">
                                            {restPostContent.postTitle}
                                        </h1>
                                        <h3 className="font-p font-semibold text-lg text-white-dark">
                                            {restPostContent.postThemes[1] ? "Themes : " : "Theme : "}

                                            {restPostContent.postThemes.map((postTheme, index) => (
                                                postTheme[index + 1] ? <span> {postTheme.postThemeName} - </span> : <span> {postTheme.postThemeName} </span>

                                            ))

                                            }
                                        </h3>
                                    </div>

                                    <div className="flex flex-col gap-2 mt-8 pb-6 border-b-2 border-solid border-gray-700 ">
                                        <LinearGradientPurple label={restPostContent.postSubTitle} className="font-t font-semibold text-2xl" />
                                    </div>
                                    {restPostContent.postSection.map(section => (
                                        <div className="w-full mt-10">
                                            <h1 className="font-t font-semibold text-2xl text-white-default my-6">
                                                {section.postSectionTitle}
                                            </h1>
                                            <p className="font-p font-medium text-md  text-white-dark">
                                                {section.postSectionParagraph}
                                            </p>
                                        </div>

                                    ))}
                                </div>
                            </div>
                            <div className="col-span-2 text-center">
                                <NavLink to="../rest" className="sticky top-24 flex gap-2 text-white-default p-2 hover:bg-gray-500 hover:bg-opacity-15 justify-end ">
                                    <LinearGradient gradient={["to right", "#C77DFF,#9D4EDD"]} className={"font-p font-semibold "}>
                                        Retour
                                    </LinearGradient>
                                    <box-icon name='arrow-back' rotate='180' color="#7B2CBF"></box-icon>
                                </NavLink>
                            </div>
                        </div>
                    )

            }




        </motion.div >
    )
};
