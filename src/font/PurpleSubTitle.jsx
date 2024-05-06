import React from "react"

export default function PurpleSubTitle({ label }) {
    return (
        <h2 className="text-2xl font-p font-semibold text   my-5 tracking-widest" style={{
            background: "linear-gradient(to right, #E0AAFF 35%, #8300C4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }}>{label}
        </h2>
    )
};
