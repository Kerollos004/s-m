import Question from './Question'
import { questions } from '../assets'
import {motion , Variants} from "motion/react"
export default function Faq() {
    const faqsVariants:Variants = {
        hidden: {
            opacity: 0,
            y:20
        },
        show: {
            opacity: 1,
            y:0,
            transition: {
                duration: .5,
                staggerChildren: .2,
            }
        },
    }
    const mapping = questions.map(question => {
        return (
            <Question key={question.id} question={question} />
        )
    })
    return (
        <section className='px-2.5 py-10 md:px-10'>
            <div className="flex items-center gap-1 mb-2.5">
                <span className='w-20 h-px bg-violet-600'></span> 
                <h3 className='text-5xl text-violet-600 mb-2.5 font-semibold'> our faqs </h3>
            </div>

            <motion.article
                whileInView="show"
                variants={faqsVariants}
                viewport={{amount:.4}}
                initial="hidden"
                className='grid gap-2 w-full'
            >
                {mapping}
            </motion.article>
                

        </section>
    )
}
