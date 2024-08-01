import React from 'react';

type HeadingProps = {
    title: string;
    variant: string;
  }

const Heading = ({  title,  variant}: HeadingProps) => {
  return (
    <h1 className={`mb-4 text-[27px] md:text-4xl lg:text-5xl ${variant}`}>
        {title}
    </h1>
  )
}

export default Heading