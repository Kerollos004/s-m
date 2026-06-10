"use client"
import { ArrowUp } from 'react-bootstrap-icons'
import { useState , useEffect  } from 'react'
import { useThemeContext } from '../context'
export default function Button() {
    const { mode } = useThemeContext()
    const [activeBtn, setActiveBtn] = useState<boolean>(false)
    const handleScroll = () => {
        if (window.scrollY > 50) {
                setActiveBtn(true)
            }
            else {
                setActiveBtn(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return()=>{window.removeEventListener("scroll" , handleScroll)}
    }, [])
    const handleScrollBack = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
    })
    }
    return (
        < ArrowUp
            size={45}
            onClick={handleScrollBack}
            className={`fixed bottom-5  ${activeBtn ? "right-5" : "-right-[200px]"}  hover:bg-violet-600 hover:scale-105  p-3 rounded-2xl bg-violet-400 text-2xl z-10 ${mode === "light" ? "text-black" : "text-white"} `}
        />
    )
}
