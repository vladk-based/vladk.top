import { ArrowUp, Home, Info } from "lucide-react";

function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="w-full flex justify-center gap-6 px-6 py-4 backdrop-blur-xl shadow-md fixed top-0 left-0 z-40">
      <button onClick={scrollToTop} title="Scroll to top" className="hover:text-blue-600 transition-colors">
        <ArrowUp size={24} />
      </button>
      <Home size={24} className="text-gray-700" />
      <Info size={24} className="text-gray-700" />
    </nav>
  );
}

export default Navigation;
