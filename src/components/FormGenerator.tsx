'use client'

import { useState } from "react"
import { LuQrCode } from "react-icons/lu";
import { generateQR } from "../services/qrService";

export default function FormGenerator() {

    const [type, setType] = useState("URL")
    const [qrvalue, setQrValue] = useState("")
    const [inputVal, setInputVal] = useState("")

    const typegenerator: Record<string,
        {
            name: string,
            type: string,
            taghtml: string,
        }[]
    > = {
        "URL": [
            {
                name: "Your URL Here",
                type: "url",
                taghtml: "<input type='url' id='url' placeholder='http://' /> ",
            }
        ],
        "Text": [
            {
                name: "Enter Your Text",
                type: "text",
                taghtml: "<textarea id='text' placeholder='Type ...'></textarea> "
            }
        ]
    }
    const dataType = typegenerator[type]

    

    return (
        <section className="flex flex-col max-w-[740px] mt-12 mx-auto p-3 ">
            <div className="rounded-xl bx-shadow p-3 bg-[#fafaff] pb-[100px]">
                <h2
                className="mt-4 mb-8 text-[#161616] text-[1rem] font-semibold tracking-[.5px] text-center "
                >Content Type</h2>
                <div className="flex gap-3 scroll-x ">
                    {Object.keys(typegenerator).map((item) => {
                        return (
                            <button
                            key={item}
                                onClick={() => setType(item)}
                                className={`text-[1rem] tracking-[.5px] px-3 cursor-pointer hover:text-primary transition-all ${
                                    type === item
                                    ? "text-primary font-semibold text-[1.05rem] border-b-2 border-b-primary pb-1 "
                                    : "text-gray-400 "
                                } `}
                            >
                                {item}
                            </button>
                        )
                    })}
                </div>
                <div className="mt-8">
                    {dataType.map((item, index) => {
                        return (
                            <div
                            key={index}
                            className="content-form">
                                <label
                                htmlFor={item.type}
                                >{item.name}</label>
                                {type === "URL" ? (
                                    <input
                                        type="url"
                                        id="url"
                                        placeholder="http://"
                                        value={inputVal}
                                        onChange={(e) => setInputVal(e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                    ) : (
                                    <textarea
                                        id="text"
                                        placeholder="Type ..."
                                        value={inputVal}
                                        onChange={(e) => setInputVal(e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col mt-8 items-center justify-center">
                    <h3 className="text-[#161616] font-semibold mb-4 ">Live Preview</h3>
                    <img
                    className="max-w-[200px] sm:max-w-[250px] w-full"
                    src={!qrvalue ? "/images/QrCode-preview.png" : qrvalue} alt="qr code"
                    />
                </div>
                <div className="mt-10">
                    <button type="button"
                        onClick={() => generateQR({ type, value:inputVal, setQrValue })}
                        className="flex gap-1 w-full p-[10px] py-4 justify-center items-center bg-primary text-[#fafaff] rounded-md hover:brightness-90 "
                    >
                        <LuQrCode size={24} />
                        Generate QR
                    </button>
                </div>
            </div>
        </section>
    )
}