"use client"
import React from 'react'
import { motion , Variants } from 'motion/react'
import SwiperImages from './Swiper'
export default function Hero() {
const homeVariants:Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0, 
        transition: {
            staggerChildren: 0.2, 
            duration: 0.5,
            delayChildren:1
        }
    }
    }
const textVariants:Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
    }
}
    return (
        <section
            id="home" className=' grid grid-cols-1 md:grid-cols-2  overflow-hidden relative flex-col w-full h-screen '
        >
            <motion.article
                initial="hidden"
                whileInView="show"
                viewport={{amount:0}}
                variants = {homeVariants}
                transition={{duration:1 , delay:1}}
                className=" h-[60vh] md:h-screen  pt-23 p-3 flex flex-col justify-center text-center"
            >
            <motion.h3   variants={textVariants} className="text-5xl  mb-2.5"> design your future   </motion.h3>
            <motion.p   variants={textVariants} className=' text-2xl' >build your digital interface and level up your business in</motion.p>
            <motion.span   variants={textVariants} className='text-5xl font-extrabold bg-linear-to-r from-violet-600 to-white bg-clip-text py-3 uppercase text-transparent'>sm  group </motion.span>
            </motion.article>

            <motion.article
                initial={{ x: 2000 }}
                animate={{ x: 0 }}
                viewport={{amount:0}}
                transition={{ duration: 1, delay: 1 }}
                className=" h-[40vh] md:h-screen  "
            >
                <SwiperImages/>
            </motion.article>

        </section>
    )
}
