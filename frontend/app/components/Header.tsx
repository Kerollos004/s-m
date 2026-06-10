"use client"
import { useEffect, useState } from 'react';
import {  MoonFill , BrightnessHighFill } from 'react-bootstrap-icons';
import Image from 'next/image';
import img from "../../public/WhatsApp Image 2026-05-17 at 3.53.24 PM.jpeg"
import { useThemeContext } from '../context';
import { motion } from 'motion/react';
export default function Header() {
    const [scroll, setScroll] = useState<boolean>(false)
    const [activeIcon, setActiveIcon] = useState<boolean>(false)
    const [activeMenu, setActiveMenu] = useState<boolean>(false)
    const { mode, setMode } = useThemeContext()
    const [activeLink , setActiveLink] = useState<number>(0)
    
    const IconToRender = mode === "light" ? MoonFill : BrightnessHighFill;
    const handleTheme = () => {
        if (mode === "light") {
            setMode("dark")
            localStorage.setItem("mode", "dark")
        }
        else {
            setMode("light")
            localStorage.setItem("mode", "light")
        }
    }
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    useEffect(() => {
        const currentMode = localStorage.getItem("mode") 
        if (currentMode === "light") {
            setMode("light")
        } else {
            setMode("dark")
        }
    },[setMode])
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return()=>{window.removeEventListener("scroll" , handleScroll)}
    }, [])
    //change active class
    return (
        <motion.header
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{amount:0}}
            transition={{duration:.6 , delay:.5}}
            className={`fixed  top-0 w-full z-20 left-0 px-2.5 flex items-center justify-between md:px-10 h-20  ${mode === "light" ? "bg-white/70 text-black" : "bg-black/70 text-white"}    ${scroll ? "backdrop-blur-md" : ""} `}
        >
            <Image
                src={img}
                alt='img'
                width={100}
                height={100}
                className='w-25 object-cover h-16 rounded-full '
            />
            <nav className={`${activeMenu ? "active" : ""}`} >
                <ul className={`list-none  ${mode==='light'?"bg-white/70  text-black":"bg-black/70 text-white "}  backdrop-blur-md md:bg-transparent md:backdrop-blur-none flex gap-3.5`}>
                    <li><a 
                    onClick={()=>{
                        setActiveLink(0)
                        setActiveIcon(false)
                        setActiveMenu(false)
                    }}
                        href="#home" 
                        className={`text-[20px]   ${activeLink==0?'text-violet-600':""}  capitalize hover:text-violet-600 `} 
                        >
                        home
                        </a>
                        </li>
                    <li>
                        <a 
                        onClick={()=>{
                            setActiveLink(1)
                            setActiveIcon(false)
                            setActiveMenu(false)
                        }}
                        href="#about" 
                        className={`text-[20px]   ${activeLink==1?'text-violet-600':""}  capitalize hover:text-violet-600 `} 
                        >
                        about
                        </a>
                        </li>
                    <li>
                        <a 
                        onClick={()=>{
                            setActiveLink(2)
                            setActiveIcon(false)
                            setActiveMenu(false)
                        }}
                        href="#services" 
                        className={`text-[20px]   ${activeLink==2?'text-violet-600':""}  capitalize hover:text-violet-600 `} 
                        >
                        services
                        </a>
                        </li>
                    <li>
                        <a 
                        onClick={()=>{
                            setActiveLink(3)
                            setActiveIcon(false)
                            setActiveMenu(false)
                        }}
                        href="#owners"
                        className={`text-[20px]   ${activeLink==3?'text-violet-600':""}  capitalize hover:text-violet-600 `} 
                        >
                        owners
                        </a>
                        </li>
                    <li>
                        <a 
                        onClick={()=>{
                            setActiveLink(4)
                            setActiveIcon(false)
                            setActiveMenu(false)
                        }}
                        href="#contact" 
                        className={`text-[20px]        ${activeLink==4?'text-violet-600':""}  capitalize hover:text-violet-600 `} 
                        >
                        contact
                        </a>
                        </li>
                </ul>
            </nav>
            <div className="flex items-center gap-2">
                < IconToRender onClick={handleTheme} className='text-[30px] hover:text-violet-600' />
                <div onClick={() => {
                    setActiveIcon(!activeIcon)
                    setActiveMenu(!activeMenu)
                    }} className='menu-btn block md:hidden lg:hidden w-8 h-8 relative'>
                        <div className={` ${mode==="light"?"bg-black":"bg-white"} ${activeIcon?"   w-full top-1/2 -translate-y-1/2 rotate-45 ":" w-full top-1/4 -translate-y-1/2"}  absolute  left-0     h-0.5  `}  ></div>
                        <div className={` ${mode==="light"?"bg-black":"bg-white"} ${activeIcon?"   w-full  top-1/2 -translate-y-1/2 opacity-0 ":" w-1/2 top-1/2 -translate-y-1/2 opacity-100"}  absolute  left-0    h-0.5   `} ></div>
                        <div className={` ${mode==="light"?"bg-black":"bg-white"} ${activeIcon?"   w-full top-1/2 -translate-y-1/2 -rotate-45 ":"  w-1/4 top-3/4 -translate-y-1/2"}  absolute  left-0    h-0.5   `} ></div>
                </div>
            </div>
        </motion.header>
    )
}
