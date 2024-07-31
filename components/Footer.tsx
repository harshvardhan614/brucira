import { FOOTER_LINKS, SOCIALS, POLICY } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './common/Button'

const Footer = () => {
    return (
        <footer className="flexCenter">
            <div className="padding-container max-container flex w-full flex-col gap-10">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <div className="flexCenter flex-col">
                        <Link href="/">
                            <Image src="/logo.svg" alt="logo" width={100} height={40} className="w-auto h-[30px] lg:h-[40px] mb-5" />
                        </Link>
                        <div className="hidden md:flex gap-2 ">
                            <Image src='/email.svg' alt="logo" width={16} height={16} className='w-[16px]' />
                            <p className="medium-14 text-gray-30">
                                sales@funnelstory.com
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                        {FOOTER_LINKS.map((columns, index) => (
                            <FooterColumn title={columns.title} key={index}>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                                    {columns.links.map((link) => (
                                        <Link href="/" key={link} className='text-DarkBlue'>
                                            {link}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className="flex flex-col gap-5">
                            <p className="font-semibold text-DarkBlue whitespace-nowrap">
                                Trust Report
                            </p>
                            <Link href="/">
                                <Image src="/service.svg" alt="logo" width={100} height={40} className="w-auto h-[40px]" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border bg-gray-20 hidden md:block" />
                <div className="flexBetween flex-col-reverse md:flex-row gap-8 mb-8">
                    <div className="flexCenter gap-4 flex-col md:flex-row text-[10px] md:text-[15px]">
                        <p className="regular-14 w-full text-center text-gray-30">Copyright © 2023 FunnelStory. All Rights Reserved.</p>
                        <div className="flexCenter gap-4">
                            {POLICY.map((value, index) => (
                                <p className="medium-14 text-DarkBlue whitespace-nowrap" key={index}>
                                    {value}
                                </p>
                            ))}
                        </div>
                    </div>

                    <ul className="regular-14 flex gap-4 text-gray-30">
                        {SOCIALS.map((link) => (
                            <Link href="/" key={link}>
                                <Image src={link} alt="logo" width={24} height={24} />
                            </Link>
                        ))}
                    </ul>

                </div>
            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap text-violet-10">{title}</h4>
            {children}
        </div>
    )
}

export default Footer