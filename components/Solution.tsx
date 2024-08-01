"use client"
import React from 'react'
import Image from 'next/image'
import Para from './common/Para'
import Heading from './common/Heading'
import Button from './common/Button'

const Solution = () => {
    return (
        <div className="relative flexCenter flex-col my-20">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/databg.svg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="h-full md:h-auto max-h-screen w-full object-cover -z-10"
                    priority
                />
            </div>

            {/* Content */}
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flexCenter flex-col gap-6">
                <Button
                    type="button"
                    title="Solutions"
                    icon=""
                    variant="bg-[#ffffff2a] text-white border border-[#ffffff2a] font-semibold"
                />
                <Heading title="How we turn data into insights" variant="text-white font-bold text-center" />
                <Para title="Connect your revenue tech stack and build your data model - in minutes." variant="text-gray-30 text-center w-[90%] mx-auto" />
            </div>

            <Button
                type="button"
                title="Request Demo"
                icon=""
                variant="violetButton"
            />

        </div>
    )
}

export default Solution