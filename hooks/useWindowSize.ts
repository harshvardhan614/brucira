"use client"
import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // Only execute this code on the client side
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener('resize', handleResize);
            // Set initial size
            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowSize;
};

export default useWindowSize;
