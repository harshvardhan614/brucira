import React from 'react';
import Image from 'next/image';

interface CardProps {
  iconSrc: string;
  heading: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ iconSrc, heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-[#ffffff11] ">
      <Image src={iconSrc} alt={heading} width={64} height={64} className="mb-4" />
      <h3 className="text-xl font-bold mb-2 text-white">{heading}</h3>
      <p className="text-gray-20 text-center">{paragraph}</p>
    </div>
  );
};

export default Card;