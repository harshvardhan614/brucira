"use client"
import React from 'react'
import Button from './common/Button'
import Heading from './common/Heading'
import Para from './common/Para'
import Image from 'next/image'

const Pipeline = () => {
  return (
    <section className={`max-container relative my-20`}>      
      <div className="flex flex-col">
                <Button
                    type="button"
                    title="Explore the Product"
                    icon=""
                    variant="violetButton mx-auto"
                />
                <Image src="/revenuebg.svg" alt="" className="h-full md:h-auto max-h-[300px] w-full object-cover bg-white" width={1440} height={320} />
            </div>
      <div className={`w-full mx-auto flex lg:flex-row flex-col justify-around gap-8 bg-white px-4 md:px-2`}
      >
        <div
          className={`md:flex-1 flex-center`}
        >
          <Image
            src="/useCase.svg"
            width={600}
            height={700}
            alt="useCase"
            className="w-[90%] h-[90%] md:w-[100%] md:h-[100%] object-contain"
          />
        </div>
        <div
          className="md:flex-[0.75] flex justify-center flex-col"
        >
          {/* Content */}
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-start flex-col gap-3 md:gap-6">
            <Button
              type="button"
              title="Use Case"
              icon=""
              variant="lightButton"
            />
            <Heading title="Intelligence for any part of the customer journey" variant="text-DarkBlue font-bold text-start mb-[0px]" />
            <Para title="FunnelStory is designed to let go-to-market leaders leverage product and conversational data to drive conversions, adoption, renewals, and expansion." variant="text-gray-30 text-justify mx-auto" />
          </div>

          <div className="flex flex-col gap-10 my-5">
            <div className="flex-1 flex gap-4">
              <Image src='/growth.svg' alt="icon" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-contain" width={24} height={24} />
              <div
                className={`flex flex-col gap-4`}
              >
                <h1 className="font-bold text-[24px] leading-[30.24px] text-black-100">
                  Growth
                </h1>
                <p className="flex-1 font-normal text-[14px] text-gray-30 leading-[20.4px]">
                  Identify engaged or at-risk accounts in seconds. Use built-in signals to help your team prioritize any opportunity to grow your business. Say goodbye to your leaky pipeline, and hello to better win rates.
                </p>
              </div>
            </div>

            <div className="border bg-gray-20 hidden md:block" />

            <div className="flex-1 flex gap-4">
              <Image src='/retention.svg' alt="icon" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-contain" width={24} height={24} />
              <div
                className={`flex flex-col gap-4`}
              >
                <h1 className="font-bold text-[24px] leading-[30.24px] text-black-100">
                  Retention
                </h1>
                <p className="flex-1  font-normal text-[14px] text-gray-30 leading-[20.4px]">
                  Keep customers happy and retain them by making sure product milestones are reached and problems are solved before it&apos;s too late. Nothing hurts more than churn you could have prevented.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Pipeline