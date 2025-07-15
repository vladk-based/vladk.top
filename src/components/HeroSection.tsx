import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ReactTyped, Typed } from "react-typed";

import HomeSocialIcons from "./HomeSocialIcons";

const HeroSection: React.FC = () => {
    const [typedText1, setTypedText1] = useState<Typed>()
    const [typedText2, setTypedText2] = useState<Typed>()
    
    const tl = gsap.timeline();
    // Step 1: Animate letters
    tl.fromTo(
        '.letter',
        {
            y: -200,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            ease: "bounce.out",
            color: "yellow",
            duration: 1,
            stagger: 0.05,
        }
    );
    
    useEffect(() => {
        if (typedText1) tl.add(() => typedText1?.start(), "-=0.2");
    }, [typedText1, tl]);
    
    useEffect(() => {
        if (typedText2) tl.add(() => typedText2?.start(), "+=0.2");
    }, [typedText2, tl]);
    
    const socialAnim = gsap.fromTo(
        '.social-icon',
        {
            y: -10,
            opacity: 0,
            rotationX: -90,
        },
        {
            ease: 'power3.in',
            y: 0,
            opacity: 1,
            stagger: 0.1,
            rotationX: 0,
        }
    );
    
    tl.add(socialAnim, '+=0.5');
    
    return <section className="m-20 p-16 flex flex-col items-center gap-3">
        {/* hi i am */}
        <ReactTyped
            className='min-h-8 text-4xl'
            typedRef={setTypedText1}
            strings={["Hi, I am"]}
            typeSpeed={100}
            showCursor={false}
            stopped={true}
        />
        
        <h1 className="text-5xl lg:text-7xl flex">
            {"Vlad\u00A0Krstevski".split("").map((char, i) => (
                <span className="letter" key={`${char}_${i}`}>{char}</span>
            ))}
        </h1>

        {/* Roles */}
        <ReactTyped
            className='min-h-8 text-2xl text-gray-300'
            typedRef={setTypedText2}
            strings={['Full Stack Developer', 'Software Solutions Architect', 'Software Engineer']}
            typeSpeed={35}
            showCursor={false}
            stopped={true}
        />

        <HomeSocialIcons className="mt-4" />
    </section>
}

export default HeroSection;
