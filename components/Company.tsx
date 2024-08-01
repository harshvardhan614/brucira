import React from 'react'
import Image from 'next/image'
import { companies } from '@/data';
import Para from './common/Para';

const Company = () => {
    return (
        <div className="flexCenter flex-col max-container bg[#F9F7FE]">
            <Para title="TRUSTED BY" variant="text-DarkBlue uppercase font-light py-5" />
            <div className="flexCenter flex-wrap gap-4 md:gap-16 max-w-7xl border-b-2 border-gray-10 pb-16">
                {companies.map((company) => (
                    <React.Fragment key={company.id}>
                        <div className="flex md:max-w-60 max-w-32 gap-2">
                            <Image
                                src={company.img}
                                alt="company img"
                                className="md:w-24 w-20"
                                width={200}
                                height={100}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Company