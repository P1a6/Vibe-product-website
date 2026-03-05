import Navbar from "../components/navbar";
import videohp from "../assets/vibe-display-vid.mp4";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a0a] via-[#4a1510] via-40% to-[#d45520] relative overflow-hidden">
      <Navbar />

      <main className="min-h-screen flex flex-row justify-between items-center px-6 md:px-12">
        {/* Left Text */}
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
            Vibe
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-normal">
            More Social Less Media
          </p>
        </div>

        {/* Center Video */}
        <video 
          src={videohp} 
          autoPlay
          muted
          loop
          playsInline
          className="w-64 md:w-90 h-auto object-cover rounded-3xl"
        />

        {/* Empty right side for balance */}
        <div className="hidden md:block w-64"></div>

        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/20 pt-6">
          </div>
        </div>
      </main>
    </div>
  );
}
