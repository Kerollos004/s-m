"use client"
import React, { useState , useRef } from 'react'
import { Message } from '../assets'
import emailjs from '@emailjs/browser';
import { useThemeContext } from '../context';
import {motion } from "motion/react"

export default function Contact() {
    const [message, setMessage] = useState<Message>({ name: "", text: "", email: "" })
    const form = useRef<HTMLFormElement | null>(null);
    const {mode} = useThemeContext()
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
            try {
                emailjs
                    .sendForm('service_cx2y8lr', 'template_xdpk10i', form.current, {
                        publicKey: 'FNOKCmc_vD4QP74to',
                    })
            }
            catch (err) {
                console.error( err);
            }
            finally {
                setMessage({ name: "", text: "", email: "" })
            }
        }
    }

    return (
        <motion.section 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{amount:.4}}
            transition={{duration:1}}
            id="contact"
            className='px-2.5 py-10 md:px-10'
        >
            <div className="flex items-center gap-1 mb-2.5">
                <span className='w-20 h-px bg-violet-600'></span> 
                <h3 className='text-5xl text-violet-600 mb-2.5 font-semibold'> contact us </h3>
            </div>
            <div className={`  ${mode==="light"?"bg-gray-200  text-black":"bg-gray-900 b text-white"}  grid grid-cols-1 md:grid-cols-2 items-center bg-gray-200 rounded-2xl overflow-hidden`}>
                <form action= "" ref={form} onSubmit={sendEmail} className='  p-3 flex flex-col items-center justify-center'>
                    <h3 className='mb-2.5 text-3xl font-semibold text-violet-600'> keep up with us </h3>
                    <input
                        value={message.name}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                            setMessage({...message , name:e.target.value})
                        }}
                        className='w-full p-3 border border-gray-400 focus:bg-violet-300 focus:border-violet-200  mb-2.5 rounded-2xl'
                        type="text"
                        placeholder='your name'
                        name='name'
                    />
                    <input
                        value={message.email}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                            setMessage({...message , email:e.target.value})
                        }}
                        className='w-full p-3 border border-gray-400 focus:bg-violet-300 focus:border-violet-200  mb-2.5 rounded-2xl'
                        type="email"
                        placeholder='email address'
                        name='email'
                    />
                    <textarea
                        value={message.text}
                        onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
                            setMessage({...message , text:e.target.value})
                        }}
                        className='w-full p-3 border border-gray-400 focus:bg-violet-300 focus:border-violet-200  mb-2.5 rounded-2xl'
                        placeholder='your message'
                        name='message'
                    />
                    <button type='submit' className='w-full p-3 bg-violet-400 text-2xl hover:bg-violet-600  mb-2.5 rounded-2xl'>send message</button>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22012.90345739481!2d30.46081497220947!3d31.032872096383105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f66baf0955e18f%3A0x9a76aa92d2843067!2sDamanhour%2C%20Naqraha%2C%20Damanhour%2C%20Beheira%20Governorate!5e0!3m2!1sen!2seg!4v1779202912108!5m2!1sen!2seg" className='w-full h-full'></iframe>
            </div>
        </motion.section>

    )
}
