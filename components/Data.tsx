"use client";
import React from 'react';
import Heading from './common/Heading';
import Para from './common/Para';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

type WindowSize = {
    width: number;
    height?: number;
  };

const Data: React.FC = () => {
    const size: WindowSize = useWindowSize();
  const isMobile = size.width < 768

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
        <Heading title="More data shouldn&apos;t create more problems" variant="text-DarkBlue font-bold text-center" />
        <Para title="Your customer data is spread across dashboards, spreadsheets, emails, and more. It&apos;s time you had a 360-degree view of customer data so you can make decisions that drive your business." variant="text-gray-30 text-center w-[90%] mx-auto" />
      </div>

      {/* Conditional Image Rendering */}
      {isMobile ? (
        <Image src="/dataImgMobile.svg" alt="Data" className="inline-block w-full max-w-6xl object-cover py-10 padding-container" width={768} height={432} />
      ) : (
        <Image src="/dataImg.svg" alt="Data" className="inline-block w-full max-w-6xl object-cover py-10 padding-container" width={1320} height={720} />
      )}
    </div>
  );
};

export default Data;
