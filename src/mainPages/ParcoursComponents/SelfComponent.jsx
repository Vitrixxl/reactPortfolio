import React from "react"
import MidP from "../../font/MidP.jsx";
import SmallP from "../../font/SmallP.jsx"
export default function SelfComponent() {
    return (
        <div className=" sticky top-28 bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark p-px rounded">
            <div className="bg-footer-default p-4 rounded">
                <div className="text-start flex-root">
                    <a href="https://www.linkedin.com/in/vitrice-cascales-b15039276/" className="hover:bg-gray-700 hover:bg-opacity-10 p-4 transition-all duration-500 flex flex-row rounded-lg">
                        <img src="" alt="" />
                        <MidP label={"Cascale Vitrice"} />
                    </a>
                </div>
                <div className="text-start py-2 border-t border-solid border-white-dark mt-4 pt-4">
                    <SmallP label={"Dynamique, curieux et passioné, j'ai toujours aimé la technologie et de fait le developpement. Durant mon ma formation (BTS SIO OPTION SLAM) j'ai "} />
                </div>
                <div className="text-end">
                    <a href="" className="text-purple-default pt-4 font-t">Voir plus ...</a>
                </div>
            </div>
        </div>

    )
};
