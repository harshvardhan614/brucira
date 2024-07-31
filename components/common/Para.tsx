import React from 'react';

type ParaProps = {
    title: string;
    variant: string;
  }

const Para = ({  title,  variant}: ParaProps) => {
  return (
    <h1 className={`mb-3 text-sm md:text-md lg:text-xl ${variant}`}>
        {title}
    </h1>
  )
}

export default Para