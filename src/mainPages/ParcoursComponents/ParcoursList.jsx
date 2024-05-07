import React from "react"
import ParcoursCard from "./ParcoursCard"
export default function ParcoursList() {
  return (
    <div className=" w-full h-full bg-gray-500 bg-opacity-20 p-0.5 rounded">
      <div className="bg-footer-default w-full h-full rounded p-6 grid grid-cols-8 gap-6">
        <div className="p-0 pr-1  col-span-1 bg-gradient-to-b from-purple-lightest via-purple-default to-purple-dark z-10">
          <div className="bg-footer-default w-full h-full">

          </div>
        </div>
        <div className="col-span-1"></div>
        <div className=" col-span-6 flex flex-col gap-8">
          <ParcoursCard title={"HTML"} caption={"Comme souvent "} img={"test"}/>
          <ParcoursCard title={"HTML"} caption={"Comme souvent "} img={"test"}/>
          <ParcoursCard title={"HTML"} caption={"Comme souvent "} img={"test"}/>
        </div>

      </div>


    </div >
  )
};
