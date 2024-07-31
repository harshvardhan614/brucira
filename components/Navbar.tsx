// Create or modify `components/Navbar.tsx`
"use client";
import { useState } from 'react';
import { NAV_LINKS } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import Button from './common/Button';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flexBetween max-container padding-container relative z-10 py-5">
            <Link href="/">
                <Image src="/logo.svg" alt="logo" width={100} height={40} className="w-auto h-[30px] lg:h-[40px]" />
            </Link>

            <ul className="hidden lg:flex h-full gap-6">
                {NAV_LINKS.map((link) => (
                    <li key={link.key} className="flexCenter">
                        <Link href={link.href} className="regular-16 text-DarkBlue cursor-pointer transition-all font-semibold hover:text-violet-10">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden lg:flex lg:flexCenter gap-4">
                <Button
                    type="button"
                    title="Sign In"
                    icon=""
                    variant="bg-none text-violet border-none font-semibold"
                />
                <Button
                    type="button"
                    title="Request Demo"
                    icon=""
                    variant="violetButton"
                />
            </div>

            <button
                onClick={toggleMenu}
                className="lg:hidden"
                aria-label="Toggle menu"
            >
                <Image
                    src={isMenuOpen ? "/cross.svg" : "/menu.svg"}
                    alt="menu"
                    width={28}
                    height={28}
                    className="inline-block cursor-pointer"
                />
            </button>

            <div className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

            <ul className={`flex justify-between flex-col fixed top-0 right-0 z-30 h-full w-3/4 max-w-sm bg-white shadow-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4"
                    aria-label="Close menu"
                >
                    <Image
                        src="/cross.svg"
                        alt="close menu"
                        width={32}
                        height={32}
                        className="inline-block cursor-pointer"
                    />
                </button>
                <div className="flex flex-col gap-4 p-4 mt-10">                    
                {NAV_LINKS.map((link) => (
                    <li key={link.key} className="border-b border-gray-200">
                        <Link href={link.href} className="block p-4 text-gray-900 hover:bg-gray-200">
                            {link.label}
                        </Link>
                    </li>
                ))}                    
                </div>
                <li className="p-4 space-y-2">
                    <Button
                        type="button"
                        title="Sign In"
                        icon=""
                        variant="violetButton"
                    />
                    <Button
                        type="button"
                        title="Request Demo"
                        icon=""
                        variant="violetButton"
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
