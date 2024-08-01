"use client"
import React from 'react'
import Heading from './common/Heading'
import Button from './common/Button'
import Image from 'next/image'
import TestimonialCarousel from './common/TestimonialCarousel'

const Testimonials = () => {
    return (
        <section className={`max-container relative py-10 `}>
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/Testimonials.svg"
                    alt="Background"
                    layout="fill"
                    className="h-full md:h-auto max-h-screen w-full object-cover md:object-contain -z-10"
                    priority
                />
            </div>
            <div className="flexCenter flex-col gap-6 padding-container">
                <Button
                    type="button"
                    title="Testimonials"
                    icon="/button/heart.png"
                    variant="lightButton bg-[#ffffff11] text-white"
                />
                <Heading title="Why teams love FunnelStory" variant="text-white font-bold text-center" />
                <TestimonialCarousel />
            </div>
        </section>
    )
}

export default Testimonials