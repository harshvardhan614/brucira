"use client"
import Image from 'next/image'
import React from 'react'
import Heading from './common/Heading'
import Para from './common/Para'
import Button from './common/Button'

const Revenue = () => {
    return (
        <section className={`max-container padding-container relative mt-20 flexCenter flex-col gap-10`}>
            <Heading title="Don&apos;t let any revenue escape your pipeline" variant="text-DarkBlue font-bold text-center" />

            <div className={`w-full max-w-7xl mx-auto flex lg:flex-row flex-col gap-8`}
            >
                <div
                    className="md:flex-1 flex justify-center flex-col"
                >
                    {/* Content */}
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-start flex-col gap-3 md:gap-6">
                        <Button
                            type="button"
                            title="Funnel Visiblity"
                            icon="/button/eyes.png"
                            variant="lightButton"
                        />
                        <Heading title="You can&apos;t action what you can&apos;t see" variant="text-DarkBlue font-bold text-start mb-[0px]" />
                        <Para title="View all of your account funnel activity in real-time so you know where your pipeline stands." variant="text-gray-30 text-justify mx-auto" />
                    </div>
                </div>
                
                <div
                    className={`md:flex-1 flex-center`}
                >
                    <Image
                        src="/funnel.svg"
                        width={600}
                        height={700}
                        alt="useCase"
                        className="w-[90%] h-[90%] md:w-[100%] md:h-[100%] object-contain"
                    />
                </div>
            </div>

            <div className={`w-full max-w-7xl mx-auto flex lg:flex-row flex-col gap-8`}
            >
                <div
                    className={`md:flex-1 flex-center`}
                >
                    <Image
                        src="/accelerate.svg"
                        width={600}
                        height={700}
                        alt="useCase"
                        className="w-[90%] h-[90%] md:w-[100%] md:h-[100%] object-contain"
                    />
                </div>
                <div
                    className="md:flex-1 flex justify-center flex-col"
                >
                    {/* Content */}
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-start flex-col gap-3 md:gap-6">
                        <Button
                            type="button"
                            title="Accelerate Revenue"
                            icon="/button/forward.png"
                            variant="lightButton"
                        />
                        <Heading title="Coach your team and close more deals" variant="text-DarkBlue font-bold text-start mb-[0px]" />
                        <Para title="Act on funnel intelligence and make revenue more predictable. " variant="text-gray-30 text-justify mx-auto" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Revenue