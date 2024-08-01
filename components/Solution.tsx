"use client"
import React from 'react'
import Image from 'next/image'
import Para from './common/Para'
import Heading from './common/Heading'
import Button from './common/Button'
import Card from './common/Card'
import { cardData } from '@/data'

const Solution = () => {
    return (
        <div className="relative flexCenter flex-col py-20">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/solution.svg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="h-full md:h-auto max-h-screen w-full object-cover -z-10"
                    priority
                />
            </div>

            {/* Content */}
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flexCenter flex-col gap-4">
                <Button
                    type="button"
                    title="Solutions"
                    icon=""
                    variant="lightButton bg-[#ffffff11] text-white"
                />
                <Heading title="How we turn data into insights" variant="text-white font-bold text-center mb-[0px]" />
                <Para title="Connect your revenue tech stack and build your data model - in minutes." variant="text-gray-20 text-center w-[90%] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-auto max-w-6xl px-4">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        iconSrc={card.iconSrc}
                        heading={card.heading}
                        paragraph={card.paragraph}
                    />
                ))}
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