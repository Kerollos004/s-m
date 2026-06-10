import React, { useState } from 'react'
import { Plus } from 'react-bootstrap-icons'
import { QuestionType } from '../assets'
import {motion , Variants} from "motion/react"

export default function Question({ question }: { question: QuestionType }) {
    const faqVariant:Variants = {
        hidden: {
            opacity: 0,
            y:20
        },
        show: {
            y:0,
            opacity:1
        }
    }
    const [open, setOpen] = useState<boolean>(false)
    return (
        <motion.article
            variants={faqVariant}
                onClick={() => { setOpen(!open) }}
                className='overflow-hidden rounded-2xl py-4 px-6 border bg-violet-300 border-violet-600 cursor-pointer'
            >
                    <div className='flex justify-between items-center z-10 relative'>
                    <h3 className='text-2xl capitalize mb-1 text-slate-800'>{ question.title}?</h3>
                        <Plus className={`text-3xl   ${open ? "rotate-45 text-red-600" : "rotate-360 text-slate-800"}`} />
                    </div>
            
                    <div className={`grid  ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                        <div className="overflow-hidden">
                            <p className="text-[21px] p-2 w-full text-slate-800  ">   {question.answer} </p>
                        </div>
                    </div>
            </motion.article>
    )
}
