
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="flex items-center justify-between">
        <span className="text-white text-xl font-semibold">Vibe</span>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/80 hover:text-white transition">Home</Link>
          
          <Link to="/features" className="text-white/80 hover:text-white transition">Features</Link>
          <button className="px-5 py-2 border border-white rounded-full text-white flex items-center gap-2 hover:bg-white hover:text-[#1a0a0a] transition">
            Roadmap
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <Link to="/" className="text-white/80 hover:text-white transition">Home</Link>
          
          <Link to="/features" className="text-white/80 hover:text-white transition">Features</Link>
          <button className="px-5 py-2 border border-white rounded-full text-white w-fit">
            Get in touch
          </button>
        </div>
      )}
    </nav>
  );
}
