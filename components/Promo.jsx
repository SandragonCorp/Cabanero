'use client'

import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Promo = () => {
    const slides = [
        {
            url: 'https://img.freepik.com/free-vector/sales-promo-with-abstract-shapes_79603-1400.jpg'
        },
        {
            url: 'https://img.freepik.com/free-vector/gradient-sale-background_23-2148934477.jpg'
        },
        {
            url: 'https://c8.alamy.com/comp/2A5AH2N/sale-banner-template-design-big-sale-web-ad-banners-illustration-2A5AH2N.jpg'
        },
        {
            url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-banner-design-template-402d7432ee0c5cae3733a21e6c71c436_screen.jpg?ts=1609236766'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    })

    return (
        <section className="h-1/4 mt-4 mb-10 sm:px-10 md:px-20 lg:px-20 xl:px-52 md:mt-10">
            <div className='max-w-[14000px] h-full w-full m-auto px-10 relative group'>
                <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 sm:bg-contain' style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((_, slideIndex) => (
                        <div key={slideIndex} className="text-2xl cursor-pointer hover:bg-gray-200 rounded-full" onClick={() => setCurrentIndex(slideIndex)}>
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Promo