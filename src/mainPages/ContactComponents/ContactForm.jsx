import React, { useState } from "react"

export default function ContactForm() {


    const [mail, setMail] = useState("")
    const [header, setHeader] = useState("")
    const [body, setBody] = useState("")
    const [validMail, setValidMail] = useState("")
    const [reqBody, setReqBody] = useState({
        mail: "",
        header: "",
        body: "",
    })

    const handleMailInput = (e) => {
        const { name, value } = e.target
        setReqBody(prevBody => ({
            ...prevBody,
            [name]: value
        }))
        setMail(e.target.value)
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setReqBody(prevBody => ({
            ...prevBody,
            [name]: value
        }))
    }
    const sendMessage = (e) => {
        e.preventDefault()
        console.log()
        fetch("https://api-portfolio-l1tc.vercel.app/api/message/sendmessage", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody)
        })
            .then(response => {
                if (!response.ok) {

                }
            })

    }
    return (
        <div className="w-full mt-10 flex justify-center">
            <form className="flex flex-col gap-4">
                <div className="">
                    <h1 className="text-white-default font-p font-semibold text-xl ">Votre addresse mail</h1>
                    <input onInput={(e) => handleMailInput(e)} name="mail" className="text-purple-light lowercase transition-all duration-200   mt-2 bg-footer-default ring-gray-700 ring-2 rounded text-lg px-2 py-1 min-w-96 focus:outline-none focus:ring-purple-light" placeholder={"votremail@exemple.test"} type="text" />
                </div>
                <div className="">
                    <h1 className="text-white-default font-p font-semibold text-xl ">Objet du message</h1>
                    <textarea onInput={(e) => handleInput(e)} name="header" style={{ resize: 'none' }} className=" text-purple-light transition-all duration-200 mt-2 bg-footer-default ring-gray-700 ring-2 rounded text-lg px-2 py-0.5 min-w-96 focus:outline-none focus:ring-purple-light" placeholder={"Saisissez l'objet du message ici..."} type="text" />
                </div>
                <div className="">
                    <h1 className="text-white-default font-p font-semibold text-lg ">Votre message</h1>
                    <textarea onInput={(e) => handleInput(e)} name="body" placeholder='Saisissez le contenu du message ici...' rows={10} className=" mt-2 bg-footer-default ring-gray-700 ring-2 rounded text-lg px-2 py-0.5 min-w-96 focus:outline-none focus:ring-purple-light text-purple-light" id=""></textarea>
                </div>
                <div className="flex justify-end">
                    <div className="bg-gradient-to-tl from-purple-lightest via-purple-default to-purple-dark rounded">
                        <div className="bg-gray-700 hover:bg-opacity-0 transition-all duration-200 p-0.5 rounded">

                            <div className="bg-footer-default rounded-sm  duration-200 transition-all">
                                <button onClick={(e) => sendMessage(e)} className="w-full h-full  text-white-light hover:text-purple-light transition-all duration-200  text-sm font-t font-semibold text-md py-0.5 px-4">
                                    Envoyer le message
                                </button>
                            </div>

                        </div>

                    </div>
                </div>


            </form>

        </div>
    )
};
