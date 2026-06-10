import React from 'react'
import img from "../../public/Gemini_Generated_Image_6snpil6snpil6snp.png"
import Image from 'next/image'
import { aboutText } from '../assets'
import {motion, Variants} from "motion/react"

export default function About() {
    const aboutElements = aboutText.split(" ")
    const textVariants:Variants = {
        hidden: {
            opacity:0
        },
        show: {
            opacity: 1,
            transition: {
                duration: .05,
                staggerChildren: .05,
            }
        },
    }
    const charVariants:Variants = {
        hidden: {
            opacity:0
        },
        show: {
            opacity:1
        }
    }
    const aboutMap = aboutElements.map((p:string , index:number) => {
        return (
            <motion.p
                className='text-[16px]'
                variants={charVariants}
                key={index}
            >
                {p}
            </motion.p>
        )
    })
    return (
        <section id="about" className='px-2.5 py-10 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-2.5 items-center'>
            <article className="">
                <div className="flex items-center gap-1">
                    <span className='w-20 h-px bg-violet-600'></span> 
                    <h3 className='text-5xl text-violet-600 mb-2.5 font-semibold'> our story </h3>
                </div>
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{amount:.4}}
                    className='flex gap-1 flex-wrap'
                >
                    {aboutMap}
                </motion.div>
            </article>
            <motion.article
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{amount:.4}}
                className="rounded-3xl overflow-hidden h-[380px]"
            >
                <Image
                    src={img} 
                    alt='img'
                    width={200}
                    height={200}
                    loading='lazy'
                    className='w-full object-cover h-full hover:scale-110'

                />
            </motion.article>
        </section>
    )
}
