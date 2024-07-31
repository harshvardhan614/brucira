import React from 'react';

type HeadingProps = {
    title: string;
    variant: string;
  }

const Heading = ({  title,  variant}: HeadingProps) => {
  return (
    <h1 className={`mb-4 text-[40px] md:text-5xl lg:text-6xl ${variant}`}>
        {title}
    </h1>
  )
}

export default Heading