import React from "react"
import { motion, transform } from "framer-motion"
import Title from "../../font/Title"
import PurpleSubTitle from "../../font/PurpleSubTitle"
export default function RESTHeader() {
    const Letters = ["U", "n", "e", " ", "v", "e", "i", "l", "l", "e", " ", "o", "r", "g", "n", "i", "q", "u", "e"]
    const orgAnim = () => {
        return {
            transform: [
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ]
        }

    }
    return (

        <div className="mt-12 text-center">
            <Title label={"Une veille oui..."} />
            <PurpleSubTitle label={"Mais une veille organique !"} />
        </div>
    )
};
