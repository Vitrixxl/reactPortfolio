import React, { useEffect, useState, useContext } from "react"
import "boxicons"
import cookie from "cookiejs"
import { AnimatePresence, motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { useLocalStorage, useToggle } from "@uidotdev/usehooks"
import { LogginContext } from "../../Context/LoggingContext"
export default function RESTPost({ postContent, index, connected }) {



    const { setNewsSignIn } = useContext(LogginContext)
    const [upVoteHover, setUpVoteHover] = useToggle(false)
    const [downVoteHover, setDownVoteHover] = useToggle(false)
    const [likes, setLikes] = useState(postContent.postLikes - postContent.postDislikes)
    const [isLiked, setIsLiked] = useState(connected && postContent.isLiked)
    const [isDisliked, setIsDisliked] = useState(connected && postContent.isDisliked)

    const like = () => {
        if (cookie.get("newsletterToken")) {
            fetch("https://api-portfolio-l1tc.vercel.app/api/rest/post/like/" + postContent._id, {
                method: "put",
                credentials: 'include'
            }).then(response => {
                if (!response.ok) throw new Error(response.status);
                else return response.json();
            })
                .then(data => {
                    data.toggle ? setIsLiked(false) : setIsLiked(true)

                    setIsDisliked(false)
                    setLikes(data.newLikes)
                })
        } else {
            setNewsSignIn(true)
        }
    }
    const dislike = () => {
        if (cookie.get("newsletterToken")) {
            fetch("https://api-portfolio-l1tc.vercel.app/api/rest/post/dislike/" + postContent._id, {
                method: "put",
                credentials: 'include'
            }).then(response => {
                if (!response.ok) throw new Error(response.status);
                else return response.json();
            })
                .then(data => {
                    data.toggle ? setIsDisliked(false) : setIsDisliked(true)

                    setIsLiked(false)
                    setLikes(data.newLikes)
                })
        } else {
            setNewsSignIn(true)
        }

    }

    return (
        <AnimatePresence>
            <motion.div className="w-full bg-gradient-to-tl from-purple-lightest via-purple-default to-purple-dark  rounded-md"

            >
                <div className="w-full h-full  bg-gray-700 p-0.5 rounded-md hover:bg-opacity-0 transition-all duration-200 ">
                    <div className="w-full h-full bg-footer-default p-4 flex flex-col rounded ">
                        <div className="text-start border-b-2 border-gray-700 border-solid pb-4 ">
                            <h1 className="text-white-light font-t text-2xl font-bold">{postContent.postTitle}</h1>
                        </div>
                        <div className="gap-2  grid grid-cols-10 mt-4  ">
                            <NavLink to={"./" + postContent._id} className="pt-2  px-2 rounded-lg text-start col-span-9 bg-opacity-0 bg-gray-700 hover:bg-opacity-20 transition-all duration-200">
                                <div>
                                    <p className="text-white-default font-t font-semibold text-lg">Themes :
                                        {postContent.postThemes.map(theme => (
                                            <span key={theme._id} className="text-white-dark font-t font-semibold text-base"> {theme.postThemeName}</span>
                                        ))}
                                    </p>
                                </div>
                                <p className="font-p  overflow-hidden text-ellipsis text-white-dark font-p mt-2">
                                    {postContent.postSubTitle}
                                </p>

                            </NavLink>
                            <div className="flex flex-col col-span-1  pb-0 gap-2 items-center text-center">
                                <button onClick={() => like()} onMouseOver={() => setUpVoteHover(true)} onMouseLeave={() => setUpVoteHover(false)} className=" rounded-lg max-w-max  p-2 hover:bg-gray-500 hover:bg-opacity-30 text-white-default transition-all duration-200  flex items-center justify-center">
                                    < box-icon name='upvote' type={upVoteHover || isLiked ? "solid" : "regular"} color={upVoteHover || isLiked ? "#C77DFF" : "#ededed"} />
                                </button>
                                <p className="text-lg font-p text-white-light font-bold ">{likes}</p>
                                <button onClick={() => dislike()} onMouseOver={() => setDownVoteHover(true)} onMouseLeave={() => setDownVoteHover(false)} className="  rounded-lg  max-w-max p-2 hover:bg-gray-500 hover:bg-opacity-30 text-white-default flex items-center justify-center">
                                    <box-icon name='upvote' rotate='180' type={downVoteHover || isDisliked ? "solid" : "regular"} color={downVoteHover || isDisliked ? "#C77DFF" : "#ededed"}></box-icon>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </motion.div>
        </AnimatePresence>
    )
};
