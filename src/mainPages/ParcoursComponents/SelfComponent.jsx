import React from "react"
import MidP from "../../font/MidP.jsx";
import SmallP from "../../font/SmallP.jsx"
export default function SelfComponent() {
    return (
        <div className=" sticky top-28 bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark p-px rounded">
            <div className="bg-footer-default p-4 rounded">

                <div className="border-solid border-b border-gray-500 border-opacity-20 text-start p-4">
                    <img src="" alt="" />
                    <a href="https://www.linkedin.com/in/vitrice-cascales-b15039276/"><MidP label={"Cascale Vitrice"} /></a>

                </div>
                <div className="text-start py-2">
                    <SmallP label={"Dynamique, curieux et passioné, j'ai toujours aimé la technologie et de fait le developpement. Durant mon ma formation (BTS SIO OPTION SLAM) j'ai "}/>
                </div>
            </div>
        </div>

    )
};
