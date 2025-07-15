import Navigation from "../components/Navigation.tsx";

import CursorBackgroundEffect from "../components/effects/CursorBackgroundEffect.tsx";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import WorkExperienceSection from "../components/WorkExperienceSection.tsx";

function HomePage() {

  
  return <>
    <CursorBackgroundEffect />
    <div className="min-h-screen w-full flex flex-col bg-gray-900 relative text-white items-center">
      <Navigation />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <div className="h-1 w-[80%] bg-blue-900"></div>
        <WorkExperienceSection />
        <div className="h-1 w-[80%] bg-blue-900"></div>
        <ContactSection />
      </main>
    </div>
  </>;
}

export default HomePage;
