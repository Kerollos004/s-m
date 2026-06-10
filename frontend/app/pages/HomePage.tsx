"use client"
import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Oweners from '../components/Oweners'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Button from '../components/Button'
import { useThemeContext } from '../context'
export default function HomePage() {
    const {mode} = useThemeContext()
    return (
        <main className={`w-full min-h-screen ${mode==="light"?"bg-gradient-light text-black":"bg-gradient-dark text-white"} bg-fixed`}>
            <Hero />
            <About />
            <Services />
            <Oweners />
            <Faq/>
            <Contact />
            <Button/>
        </main>
    )
}
