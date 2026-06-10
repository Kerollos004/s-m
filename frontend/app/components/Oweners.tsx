import React from 'react'
import { oweners } from '../assets'
import { Facebook , Instagram , Whatsapp } from "react-bootstrap-icons"
import Image from 'next/image'
import { motion  , Variants} from 'motion/react'
export default function Oweners() {
    const owenersVariants:Variants = {
        hidden: {
            opacity:0
        },
        show: {
            opacity: 1,
            transition: {
                duration: .5,
                staggerChildren: .2,
            }
        },
    }
    const owenerVariants:Variants = {
        hidden: {
            opacity:0
        },
        show: {
            opacity:1
        }
    }
    const mapping = oweners.map(owener => {
        return (
            <motion.article
                variants={owenerVariants}
                className=" owner rounded-2xl relative h-[480px] overflow-hidden "
                key={owener.id}
            >
                <Image
                    src={owener.img}
                    alt='img'
                    width={200}
                    height={200}
                    loading='lazy'
                    className='w-full h-full object-cover object-top  '
                />
                <div className="  absolute w-11/12 top-1/2 left-1/2 -translate-x-1/2 p-4 -translate-y-1/2 border-4  opacity-0 layer border-violet-600 rounded-2xl h-11/12 ">
                    <ul>
                        <li><a className='text-white text-3xl mb-2 hover:text-violet-600 inline-block' href={owener.facebook}><Facebook/></a></li>
                        <li><a className='text-white text-3xl mb-2 hover:text-violet-600 inline-block' href={owener.instagram}><Instagram/></a></li>
                        <li><a className='text-white text-3xl mb-2 hover:text-violet-600 inline-block' href={`https://wa.me.2${owener.whatsapp}`}><Whatsapp/></a></li>
                    </ul>
                    <h3 className='  absolute left-4 bottom-4 text-4xl text-white font-bold capitalize '> {owener.name} </h3>
                </div>
            </motion.article>
        )
    })
    return (
        <section id='owners' className='px-2.5 py-10 md:px-10'>
            <div className="flex items-center gap-1 mb-2.5">
                <span className='w-20 h-px bg-violet-600'></span> 
                <h3 className='text-5xl text-violet-600 mb-2.5 font-semibold'> our owners </h3>
            </div>
            <motion.article
                variants={owenersVariants}
                initial="hidden"
                whileInView="show"
                viewport={{amount:.4}}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2.5"
            >
                {mapping}
            </motion.article>
        </section>
    )
}
