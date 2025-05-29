
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation.tsx";
import gsap from "gsap";
import { ReactTyped, Typed } from "react-typed";

import CursorBackgroundEffect from "../components/effects/CursorBackgroundEffect.tsx";

function HomePage() {
  const [typedText1, setTypedText1] = useState<Typed>()
  const [typedText2, setTypedText2] = useState<Typed>()
  
  const tl = gsap.timeline();
  // Step 1: Animate letters
  tl.fromTo(
    ".letter",
    {
      y: -300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "bounce.out",
      color: "yellow",
      duration: 1,
      stagger: 0.1,
    }
  );

  useEffect(() => {
    if (typedText1) tl.add(() => typedText1?.start(), "-=0.2");
  }, [typedText1, tl]);

  useEffect(() => {
    if (typedText2) tl.add(() => typedText2?.start(), "+=0.2");
  }, [typedText2, tl]);

  
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-900 relative text-white">
      <Navigation />
      <CursorBackgroundEffect />
      <div style={{ position: "relative", flex: 1 }}>
        <div className="m-20 p-16 flex flex-col">
          {/* hi i am */}
          <ReactTyped
            className='min-h-8 text-2xl mb-4'
            typedRef={setTypedText1}
            strings={["Hi, I am"]}
            typeSpeed={100}
            showCursor={false}
            stopped={true}
          />
          
          <h1 className="text-6xl flex gap-2">
            {"Vlad Krstevski".split("").map((char, i) => (
              <span className="letter" key={`${char}_${i}`}>
              {char}
              </span>
            ))}
          </h1>

          {/* Roles */}
          <ReactTyped
            className='min-h-8 text-2xl text-gray-300 mt-4'
            typedRef={setTypedText2}
            strings={['Full Stack Developer', 'Software Solutions Architect', 'Software Engineer']}
            typeSpeed={35}
            showCursor={false}
            stopped={true}
          />

          
          
        </div>
      </div>
    </div>
  );
}

export default HomePage;
