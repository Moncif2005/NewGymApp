"use client"

import React from "react"
import Image from "next/image";
import Rectangle3 from "../Images/Rectangle-3.png"
import Rectangle4 from "../Images/Rectangle 4.png"


function Hello1(){
    return(
        <div className=" flex justify-around items-center  flex-col md:flex-row p-1 pt-[170px] pb-[120px] ">

            <Image
            className="w-[650px] h-[550px] md:w-[650px] md:h-[559px] "
              src={Rectangle3}
            />

            <div className="felex p-2">
            


            <div className="flex p-[30px] md:p-4">
                   <Image
                     width={7}
                     height={70}
                     src={Rectangle4}
                   />

                  <h2 className="p-4 m-2 font-bold text-6xl ">how we got starte in<br/> this business </h2>
            </div>
            

            <p className="w-[350px] p-[30px] md:p-4"> Learn the basics of Figma, the popular design tool for UI and UX designers.
                In this beginner-friendly tutorial we cover the essential features of Figma, including how to use auto layout,<br/>
                 the color systems and the grid. 
                Whether you're new to design or looking to switch to Figma from another tool, this tutorial is for you. Stay ahead of the game in 2023 by mastering Figma!
            </p>

            <div className=" p-[13px] md:p-0">
                <a className="text-[var(--white)] m-4 p-2.5 px-4 justify-center items-center gap-2.5 bg-[var(--red)] cursor-pointer">Sign up </a>
            </div>
            
            </div>

   
            
        </div>
    )
}

export default Hello1;