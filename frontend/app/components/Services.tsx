import React from 'react'
import { services } from '../assets';
import { motion , Variants } from 'motion/react';
export default function Services() {
    const boxsVariants:Variants = {
        hidden: {
            y:60,
            opacity:0
        },
        show: {
            y:0,
            opacity: 1,
            transition: {
                duration: .5,
                staggerChildren: .2,
            }
        },
    }
    const boxVariants:Variants = {
        hidden: {
            y:60,
            opacity:0
        },
        show: {
            y:0,
            opacity:1
        }
    }
    const mapping = services.map(service => {
        return (
            <motion.article variants={boxVariants} key={service.id} className="p-4 rounded-3xl border flex flex-col justify-center items-center text-center border-violet-600  hover:bg-violet-300 ">
                <service.icon className='text-5xl mb-2' />
                <h3 className='text-2xl'> {service.name} </h3>
            </motion.article>
        )
    })
    return (
        <section id='services' className='px-2.5 py-10 md:px-10'>
            <div className="flex items-center gap-1 mb-2.5">
                <span className='w-20 h-px bg-violet-600'></span> 
                <h3 className='text-5xl text-violet-600 mb-2.5 font-semibold'> our services </h3>
            </div>
            <motion.article
                variants={boxsVariants}
                initial="hidden"
                whileInView="show"
                viewport={{amount:.4}}
                className="grid grid-cols-2 md:grid-cols-4 gap-2.5"
            >
                {mapping}
            </motion.article>
        </section>
    )
}
