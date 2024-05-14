import React from "react"
import { LinearGradient } from "react-text-gradients"

const LinearGradientPurple = ({label, className}) => {

    return (

        <LinearGradient gradient={["to left", "#E0AAFF,#9D4EDD"]} className={className}>
            {label}
        </LinearGradient>

    )
}

export default LinearGradientPurple;
