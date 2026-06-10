"use client"

import { useThemeContext } from "../context"
import { motion } from "motion/react"
export default function Footer() {
    const {mode} = useThemeContext()
    return (
        <motion.footer
            initial={{ opacity: 0 , y:20 }}
            whileInView={{ opacity: 1 , y:0 }}
            viewport={{amount:.4}}
            transition={{duration:1}}
            className={` ${mode === "light" ? "bg-gray-200 border-gray-600 text-black" : "bg-gray-900 border-gray-600 text-white"}     border-t `}
        >
            <div className=" px-2.5 md:px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                
                <div className="  flex flex-col gap-3">
                    <h2 className="text-2xl font-bold text-violet-600 capitalize ">
                        s&m group
                    </h2>
                    <p className="">
                        Building modern web experiences with cutting-edge technologies. Connecting ideas with robust and elegant code.
                    </p>
                </div>

                <div className="flex flex-col gap-3 text-center">
                    <h3 className="text-lg font-semibold text-violet-600 capitalize">Quick Links</h3>
                    <ul className=" flex flex-col gap-1 ">
                        <li><a href="#home" className="hover:text-violet-600  inline-block text-[17px]  hover:translate-x-2.5 ">Home</a></li>
                        <li><a href="#about" className="hover:text-violet-600 inline-block  text-[17px]  hover:translate-x-2.5 ">About Us</a></li>
                        <li><a href="#services" className="hover:text-violet-600  inline-block text-[17px]  hover:translate-x-2.5 ">services</a></li>
                        <li><a href="#contact" className="hover:text-violet-600  inline-block  text-[17px] hover:translate-x-2.5 ">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 text-center">
                    <h3 className="text-lg font-semibold text-violet-600 capitalize">social Links</h3>
                    <ul className=" flex flex-col gap-1 ">
                        <li><a href="https://www.facebook.com/share/1D2TRFEVHV/?mibextid=wwXIfr" className="hover:text-violet-600  inline-block text-[17px]  hover:translate-x-2.5 ">facebook</a></li>
                        <li><a href="https://www.instagram.com/s.m.group256?utm_source=qr" className="hover:text-violet-600  inline-block text-[17px]  hover:translate-x-2.5 ">instagram</a></li>
                        <li><a href="https://www.tiktok.com/@sm.group95?_r=1&_t=ZS-975rHnIPIFk" className="hover:text-violet-600  inline-block text-[17px]  hover:translate-x-2.5 ">tik tok</a></li>
                        <li><a href="https://wa.me/+201012567815" className="hover:text-violet-600  inline-block  text-[17px] hover:translate-x-2.5 ">whatsapp</a></li>
                    </ul>
                </div>

                <div className="  flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-violet-600 capitalize">get your special discount</h3>
                    <p className="">  if you make a deal on our website you will get 10% off</p>
                    
                </div>

            </div>

            <div className="border-t border-gray-600 flex flex-col justify-center items-center  p-2.5 md:px-10 py-5 text-center ">
                <p>copyrights 2026 s&m group. All rights reserved.</p>
                <p> created with passion by <a className='hover:underline text-violet-600' href="https://kerollos-melad-jqdb.vercel.app/">kerollos melad</a> </p>
            </div>
        </motion.footer>
    )
}
