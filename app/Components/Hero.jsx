"use client"

import React from "react";
import Image from "next/image";

function Hero() {
    return (
     
        <div className=" h-full  md:h-[100vh]   flex custom-img" id='home'>
          
          <h2 className="text-[var(--white)]  sm:text-4xl p-32 m-28 md:text-8xl font-bold leading-tight " >Fight like<br/>a <span className="text-[var(--red)] " >champion</span></h2>
    
          <div className="absolute top-0 left-0 w-full h-fullz-[10]"></div>
          
        </div>
        
    );
  }
  export default Hero