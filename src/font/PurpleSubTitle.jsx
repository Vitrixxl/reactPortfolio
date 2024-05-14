import React from "react"
import FancyText from '@carefully-coded/react-text-gradient';
export default function PurpleSubTitle({ label }) {
    return (
        <FancyText className="text-xl md:text-xl lg:text-2xl font-p font-semibold  my-5 tracking-widest mt-4 text-balance"
            gradient={{ from: '#E0AAFF', to: '#7B2CBF', type: 'linear' }}
            animate
            animateDuration={1000}
        >{label}
        </FancyText>
    )
};
