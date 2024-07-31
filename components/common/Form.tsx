"use client";
import React from 'react';
import Button from './Button';

const EmailForm: React.FC = () => {
  return (
    <form name="email-form" method="get" className="relative mb-5 w-full pb-4 md:mb-6 lg:mb-4 max-w-md">
      <input 
        type="email" 
        className="h-14 w-full rounded-xl border border-solid  px-3 py-6 text-sm placeholder:text-gray-30 text-black" 
        placeholder="Your work email" 
        required 
      />
      <input type="submit" value="Request Demo" className="relative right-0 top-[5px] w-full cursor-pointer rounded-xl bg-violet px-4 py-3 text-center text-white sm:absolute sm:right-[5px] sm:w-auto" />
    </form>
  );
};

export default EmailForm;
