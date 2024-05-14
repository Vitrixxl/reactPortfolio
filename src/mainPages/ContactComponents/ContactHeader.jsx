import React from "react"
import Title from "../../font/Title"

import FancyText from '@carefully-coded/react-text-gradient'

import PurpleSubTitle from "../../font/PurpleSubTitle"
import { LinearGradient } from "react-text-gradients"
export default function ContactHeader() {
    return (
        <div className="w-full text-center  mt-10">
            <Title label={"Besoin d'aide ? Un projet ou une question ?"} />
            <FancyText className="text-xl md:text-2xl lg:text-3xl font-p font-semibold   my-5   text-balance"
                gradient={{ from: '#E0AAFF', to: '#7B2CBF', type: 'linear' }}
                animate
                animateDuration={700}
            >
                Ça se passe juste là
            </FancyText>

        </div>
    )
};
