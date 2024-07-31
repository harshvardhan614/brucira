"use client";
import Image from 'next/image';
import React from 'react';
import Para from './common/Para';
import Heading from './common/Heading';
import EmailForm from './common/Form';

const Header: React.FC = () => {
  return (
      <div className="flexCenter flex-col my-20">
        {/* Component */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flexCenter flex-col gap-6">
          {/* Hero Title */}
          <Heading title="Let your product data drive revenue decisions." variant="text-DarkBlue font-bold text-center" />
          {/* Hero PAragraph */}
          <Para title="FunnelStory is a funnel intelligence platform designed to give go-to-market leaders complete visibility into their trial funnels to accelerate their product-led strategy." variant="text-gray-30 text-center w-[90%] mx-auto" />
          {/* Email Form */}
          <EmailForm />
        </div>
        {/* Hero Image */}
        <Image src="/dashboard.svg" alt="" className="inline-block w-full max-w-6xl object-cover padding-container py-10" width={1320} height={720} />
      </div>    
  );
};

export default Header;
