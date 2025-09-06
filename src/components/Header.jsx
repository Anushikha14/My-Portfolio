import {Menu , X} from "lucide-react";
import React, { useEffect, useState } from 'react'

function Header() {
   const [isMenuOpen , setIsOpen] = useState(false);
   const [isScrolled , setIsScrolled] = useState(false);

   useEffect(()=>{
       const handleScroll = ()=>{
        setIsScrolled(window.screenY > 50);
       }
       window.addEventListener("scroll", handleScroll);
       return ()=> window.removeEventListener("scroll", handleScroll)

   },[]);

   const scrollToSection = (href)=>{
    const element = document.querySelector(href);
    if(elemnent){
        element.scrollIntoVies({behaviour: 'smooth'})
    }
    setIsOpen(false); 
   };

   const navItems = [
    { name: "Home", href: "#home"},
    { name: "About", href: "#about"},
    { name: "Skills", href: "#skills"},
    { name: "Projects", href: "#projects"},
    { name: "Experience", href: "#experience"},
    { name: "Contact", href: "#contact"},
   ]

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-puplr-900 backdrop-blur-lg shadow-lg border-b border-purple-900":"bg-tranparent"}`}>
    <div className="container mx-0 px-6 py-4">
        <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
                <span className='text-pink-600'>ANU</span>
                <span className='text-white'>SHIKHA</span>
                <span className='text-pink-600'>.</span>

            </div>
            <nav className="hidden md:flex space-x-8">
                {navItems.map((item,index) => {
                    return (
                    <button className="text-gray-300 hover:text-pink-600    transition-all duration-300 font-medium relative group" style={{animationDelay: `${index * 0.1}s`}}>{item.name}
                      
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    );
                })}
            </nav>

            <button className="hidden md:flex items-center gap-2 bg-pink-800 text-white px-6 py-2.5 rounded-lg hover:bg-pink-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                Dowmload CV Now
            </button>

            <button className="text-white md:hidden" onClick={()=> setIsOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}
            </button>

        </div>

        {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-purple-900 pt-4 bg-darkblue-600 rounded-lg shadow-lg">

            {navItems.map((item) => {
            return (
                    <button className="block w-full text-left py-3 px-4 text-gray-300 hover:text-pink-700 hover:bg-purple-900 transition-all duration-300 rounded-lg">{item.name}</button>
                );
            })}     

            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-pink-800 text-white px-6 py-2.5 rounded-lg hover:bg-pink-700 transition-all duration-300">
                Dowmload CV Now
            </button>
        </nav>
        )} 

    </div>

  </header>
}

export default Header