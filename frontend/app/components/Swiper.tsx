"use client"
import { images } from '../assets'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation  , Autoplay} from 'swiper/modules';
export default function SwiperImages() {

        const imagesMapping = images.map((img , i) => {
        return (
            <SwiperSlide className='w-full h-full' key={i}>
                <div className='w-full h-full'>
                <Image
                    src={img}
                    alt='img'
                    width={500}
                    height={500}
                    className='w-full h-full object-cover'
                />
                </div>
            </SwiperSlide>
        )
    })

return (
    <>
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="h-full w-full"
        >
            {imagesMapping}
        </Swiper>
    </>
);
} 

