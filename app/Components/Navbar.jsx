"use client"

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from "next/link";



const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 108) {
        setColor('#000');
      } else {
        setColor('');
      }
    };
  
    window.addEventListener('scroll', changeColor);
  
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);
  

  return (
   
    <div 
    style={{backgroundColor:`${color}`}}
    className={`  fixed top-[0] left-[0] right-0 flex bg-[ transparent] justify-between items-center h-2 max-w-full m-auto p-12  z-50  ${!nav ? 'w-full bg-[var(--black)] ease duration-700' : ''}`}>  


                         <h1 className="w-full p-10 text-3xl font-bold text-[var(--white)] flex items-center z-10">


                           <div className="text-[var(--red)] mr-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="42.657" height="45.338" viewBox="0 0 32.657 34.338">
                               <path id="play" d="M23.594,8.474v-.15A8.334,8.334,0,0,0,15.27,0H9.324A8.334,8.334,0,0,0,1,8.324v8.167a9.463,9.463,0,0,0,1.724,5.462l.654.933v.9A4.757,4.757,0,0,0,8.135,28.54h10.7a4.757,4.757,0,0,0,4.757-4.757v-.762l.61-.579a9.552,9.552,0,0,0,2.957-6.894V13.081a4.766,4.766,0,0,0-3.567-4.607ZM18.837,26.161H8.135a2.378,2.378,0,0,1-2.378-2.378H21.216A2.378,2.378,0,0,1,18.837,26.161Zm5.946-10.613a7.167,7.167,0,0,1-2.219,5.17l-.722.686H5.244l-.573-.817a7.105,7.105,0,0,1-1.293-4.1V12.442a4.733,4.733,0,0,0,2.378.639h8.324a1.189,1.189,0,0,0,0-2.378H5.757A2.378,2.378,0,0,1,3.378,8.324,5.953,5.953,0,0,1,9.324,2.378H15.27a5.953,5.953,0,0,1,5.946,5.946v.15a4.766,4.766,0,0,0-3.567,4.607v3.567a1.189,1.189,0,0,0,2.378,0V13.081a2.378,2.378,0,1,1,4.757,0Z" transform="matrix(0.966, -0.259, 0.259, 0.966, -0.966, 7.03)" fill="#E73539"/>
                             </svg>
                           </div>


                           <span className="text-white font-saira font-semibold text-2xl leading-tight ">
                             BOXCHAMPY
                           </span>
                         </h1>

    


      <ul 

      className=" hidden p-1 md:p-8  md:flex text-[var(--white)]  ">


        <li className="p-6 hover:text-[var(--red)] text-sm	cursor-pointer drop-shadow-2xl ">
          <Link legacyBehavior href="#home" ><a>Home</a></Link>
        </li>


        <li className="p-6 hover:text-[var(--red)] text-sm	cursor-pointer drop-shadow-2xl ">
        <Link legacyBehavior href="#about" ><a>About</a></Link>
        </li>


        
        <li className="p-6 hover:text-[var(--red)] text-sm	cursor-pointer drop-shadow-2xl ">
          <Link legacyBehavior href="#services" ><a>Services</a></Link>
        </li>


        <li className="p-6 hover:text-[var(--red)] text-sm	cursor-pointer drop-shadow-2xl ">
        <Link legacyBehavior href="#contact" ><a>Contact</a></Link>
        </li>

 <li className="p-[14px] text-sm cursor-pointer drop-shadow-2xl">
    <Link legacyBehavior href="#">
        <a className="flex w-28 justify-center items-center gap-4.5 bg-[var(--red)] hover:bg-[var(--Dark-red)]  text-md p-2.5 px-4">Sign up</a>
    </Link>
</li>
       


      </ul>













      <div onClick={handleNav} className="block md:hidden">


        {!nav ? <AiOutlineClose className="text-[var(--white)]" size={20} /> : <AiOutlineMenu className="text-[var(--white)]" size={20} />}
      </div>


      <div className={!nav ? "fixed  left-0 top-14 w-[40%] h-[100vh] bg-[var(--black)] ease duration-500 py-24 lg:hidden " : "fixed left-[-100%] "}>

        
        <ul className="p-4 uppercase  text-[var(--white)]  ">


          <li className="p-4  hover:text-[var(--red)] text-sm	cursor-pointer drop-shadow-2xl ">
          <Link href="#home" >Home</Link>
          </li>


          <li className="p-4  hover:text-[var(--red)] text-sm	cursor-pointer drop-shadow-2xl ">
          <Link href="#about" >About</Link>
          </li>


          <li className="p-4  hover:text-[var(--red)] text-sm	cursor-pointer drop-shadow-2xl ">
          <Link href="#services" >Location</Link>
          </li>


          <li className="p-4  hover:text-[var(--red)] text-sm	cursor-pointer drop-shadow-2xl ">
          <Link href="#contact" >Contact</Link>
          </li>

          <li className="p-4 hover:text-[var(--text-s-color)] text-sm	cursor-pointer drop-shadow-2xl ">
          <Link legacyBehavior href="#contact" ><a className=" p-2.5 px-4 justify-center items-center gap-2.5 bg-[var(--red)]">Signup </a></Link>
          </li> 


        </ul>


      </div>


    </div>

    

    
  );
}

export default Navbar;