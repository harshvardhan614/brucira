"use client"
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TESTIMONIALS } from '@/data';

export interface Testimonial {
    testimonial: string;
    companyImage: string;
    person: string;
    personImage: string;
    position: string;
    companyName: string;
}

const TestimonialCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024, // Breakpoint for tablets and smaller screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonial-carousel-container mx-auto my-5 md:my-10 bg-transparent max-w-5xl h-[400px] md:h-[520px]">
            <Slider {...settings}>
                {TESTIMONIALS.map((value, index) => (
                    <div key={index} className="flex flex-col gap-4 md:gap-6 overflow-hidden rounded-2xl border border-solid border-[#7e7e7e] bg-[#ffffff11] p-6 h-auto cursor-pointer w-full">
                        <Image
                            src={value.companyImage}
                            width={100}
                            height={100}
                            alt={value.companyName}
                            className="mb-4 inline-block w-[120px] h-auto object-cover rounded-full"
                        />
                        <blockquote className="flex-grow">
                            <p className="mb-4 text-sm md:text-base text-white break-words">{value.testimonial}</p>
                        </blockquote>
                        <div className="flex flex-row items-center">
                            <Image
                                src={value.personImage}
                                width={48}
                                height={48}
                                alt={value.person}
                                className="mr-4 inline-block h-12 w-12 object-cover rounded-full"
                            />
                            <div className="flex flex-col">
                                <h5 className="text-base font-semibold">{value.person}</h5>
                                <p className="text-sm text-gray-30">{value.position}, {value.companyName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialCarousel;
