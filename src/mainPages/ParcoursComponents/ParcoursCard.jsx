import React from "react"

export default function ParcoursCard({title,caption,img}) {
    return (
        <div className="w-full  ParcoursCard relative bg-gradient-to-r from-purple-lightest via-purple-default to-purple-dark p-px rounded-sm">
            <div className="w-full bg-footer-default h-full text-white-lightest p-4">
            {title + caption + img} 
            </div>
            
        </div>
    )
};
