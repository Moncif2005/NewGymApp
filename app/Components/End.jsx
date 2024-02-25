"use client"

import React from "react"
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function End(){
    return(
            <div className="text-white bg-[var(--black)] p-10">

                <div className="flex items-center justify-between">
                    <h2 className="p-12 m-14 text-4xl">Ready for your<br/> <span className="text-[var(--red)]">next</span> lesson?</h2>
                        <div className="flex p-10">
                            <FaInstagram className="text-[var(--white)] p-2 text-[40px]  cursor-pointer  " />
                            <FaFacebook className="text-[var(--white)] p-2 text-[40px]  cursor-pointer  " />
                            <FaLinkedin className="text-[var(--white)] p-2 text-[40px]  cursor-pointer  " />
                        </div> 
                </div>

                <div className="flex px-24 ">
                    <MdEmail className="text-[var(--white)]  text-[30px] " />
                    <h4 className="p-1">info@yourdemain.com</h4>
                </div>
                
            </div>
    )
}
export default End