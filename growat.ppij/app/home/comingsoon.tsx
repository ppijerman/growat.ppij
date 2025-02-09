"use client";

import React, { useEffect, useState } from 'react';
import WhatToExpect from './what-to-expect';
//import AIPSE from './aipse-registration';
//import Recap from './recap';
import MentorshipSurvey from './mentorship-survey';

const Comingsoon: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowHeight(window.innerHeight);
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const opacity = windowHeight ? Math.max(1 - (scrollY - 8) / windowHeight, 0) : 1;

    return (
        <div>
            <div className="relative w-full h-screen">
                <div className="absolute top-0 left-0 w-full h-full bg-landing bg-cover bg-center transition-opacity duration-500" style={{ opacity }}></div>
                <div className="flex items-center justify-center h-full">
                    <div className="text-center text-black transition-opacity duration-500" style={{ opacity }}>
                        <h1 className="text-6xl font-bold">Coming Soon</h1>
                        <p className="text-2xl mt-4">Scroll down for more</p>
                        <div className="mt-8 animate-bounce text-4xl">⬇️</div>
                    </div>
                </div>
            </div>
            {/* WhatToExpect and MentorshipSurvey Sections */}
            <div className="transition-opacity duration-500" style={{ opacity: 1 - opacity }}>
                <WhatToExpect isVisible={scrollY > windowHeight / 2} />
            </div>

            {/* Added some spacing between sections */}
            <div className="mt-16">
                <MentorshipSurvey isVisible={scrollY > windowHeight} />
            </div>

        </div>
    );
};

export default Comingsoon;