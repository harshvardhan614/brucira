"use client"
import React from 'react'
import Image from 'next/image'
import Heading from './common/Heading'
import Para from './common/Para'
import EmailForm from './common/Form'

const InsightCorner = () => {
    return (
        <div className="relative flexCenter flex-col my-20 py-10 mx-auto">
            {/* Background Image */}
            <div className="absolute inset-50 flexCenter -z-10 h-full">
                <Image
                    src="/insight.svg"
                    alt="Background"
                    // layout="fill"
                    objectFit="cover"
                    width={1320} height={720}
                    className="inline-block w-full max-w-6xl object-cover padding-container py-10 h-full md:h-auto -z-10"
                    priority
                />
            </div>
            {/* Content */}
            <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[50vw] flexCenter flex-col gap-4 py-4 px-2">
                <Heading title="Follow the latest trial insights on the Story Corner!" variant="text-white font-bold text-center lg:text-4xl" />
                <Para title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." variant="text-gray-30 text-center w-[90%] mx-auto" />
                {/* Email Form */}
                <EmailForm />
            </div>
        </div>
    )
}

export default InsightCorner