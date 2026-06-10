
//home swiper
import { Icon , CodeSlash , PaletteFill , CameraVideoFill , DisplayFill , } from "react-bootstrap-icons"
export const images: string[] = [
    "/dC84A.jpg", 
    "/UqlTh.jpg",
    "/YMeEl.jpg",
]
//about 
export const aboutText:string = "At SM Group, we bridge the gap between imagination and technology by delivering top-tier media production, cutting-edge software development, and high-impact graphic design. We specialize in crafting comprehensive digital identities, building scalable web and mobile applications with flawless user interfaces, and producing captivating visual stories that resonate with audiences. From strategic content creation to advanced full-stack programming and striking brand visuals, our team combines creative artistry with robust engineering. We don’t just build digital interfaces; we level up your business, streamline your digital presence, and design your future in an ever-evolving"
// services 
interface Service {
    id: number,
    name: string,
    icon: Icon , 
}

export const services: Service[] = [
    {
        id: 0, 
        name: "web devlopment",
        icon: CodeSlash
    },
        {
        id: 1, 
        name: "graphic design",
        icon: PaletteFill
    },
        {
        id: 2, 
        name: "social media advertising",
        icon: CameraVideoFill
    },
    {
        id: 3, 
        name: "video editing",
        icon: DisplayFill
    },
]
//owners  
interface Owener {
    id: number,
    name: string,
    img:string
    facebook: string,
    whatsapp: string,
    instagram:string,
}

export const oweners: Owener[] = [

        {
        id: 1,
        name: "mazen al hawashi",
        facebook: "https://www.facebook.com/share/14bkHNAUsc1/?mibextid=wwXIfr",
        whatsapp: "01016385507",
        instagram: "https://www.instagram.com/mazen_alhawashi?igsh=MWtwaHZoYWx1eWlweA%3D%3D&utm_source=qr",
        img:"/Zfsea.jpg"
    },
        {
        id: 2,
        name: "samy sameh",
        facebook: "https://www.facebook.com/share/1CVwjLwqZM/?mibextid=wwXIfr",
        whatsapp: "01228573686",
        instagram: "https://www.instagram.com/samy.samh.777?igsh=MTk2ZjMwMDNiY2Fzcw%3D%3D&utm_source=qr",
        img:"/Vdlou.jpg"
    }
]
//question
export interface QuestionType {
    id: number,
    title: string,
    answer:string
}
export interface QuestionType {
    id: number;
    title: string;
    answer: string;
}

export const questions: QuestionType[] = [
    {
        id: 0,
        title: "Who are you?", 
        answer: `We are a full-service digital marketing and media agency dedicated to bringing your brand’s vision to life. We combine strategic thinking, cutting-edge creativity, and data-driven insights to help businesses grow, stand out, and connect meaningfully with their audience. From startups to established brands, we are your growth partners in the digital world.`
    },
    {
        id: 1,
        title: "Which services do you provide?", 
        answer: `We offer a comprehensive suite of media and advertising solutions tailored to your business needs, including:
Social Media Management: Content creation, page moderation, and community building.
Media Production: Professional photography, videography, and motion graphics.
Digital Advertising: Targeted ad campaigns on Facebook, Instagram, Google, and TikTok to maximize your ROI.
Branding & Graphic Design: Logo creation, visual identity, and marketing materials.
Web Development: Designing and building modern, responsive websites and landing pages.`
    },
    {
        id: 2,
        title: "How can I get my service?", 
        answer: `Getting started with us is simple and straightforward. Just follow these three easy steps:
Connect: Click on our 'Contact' section, fill out the form, or reach out directly via WhatsApp/Social Media.
Consultation: We will schedule a brief discovery call to understand your business goals, target audience, and budget.
Execution: Our team will craft a customized proposal and strategy. Once approved, we launch your campaign and start delivering results!`
    }
];
//contact
export interface Message{
    name: string,
    email: string,
    text:string
}