import React from 'react';

const SoftwareMarquee = () => {
  const softwares = [
    { name: "DaVinci Resolve", color: "hover:text-blue-500" },
    { name: "Adobe Premiere", color: "hover:text-purple-500" },
    { name: "After Effects", color: "hover:text-indigo-500" },
    { name: "Lightroom", color: "hover:text-sky-400" },
    { name: "Photoshop", color: "hover:text-blue-600" },
    { name: "Figma", color: "hover:text-pink-500" },
    { name: "CapCut Pro", color: "hover:text-white" },
    { name: "Audition", color: "hover:text-green-500" },
  ];

  // 4x repeat for ultra-seamless looping
  const fullList = [...softwares, ...softwares, ...softwares, ...softwares];

  return (
    // ADJUSTMENT 1: Reduced vertical padding on mobile (py-6)
    <section className="bg-[#020202] py-6 md:py-10 border-b border-white/5 overflow-hidden select-none">
      
      {/* Minimal Header */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 mb-4 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4 opacity-60">
          {/* ADJUSTMENT 2: Reduced tracking on mobile to prevent overflow/awkward spacing */}
          <span className="text-[7px] md:text-[8px] font-mono uppercase tracking-[0.5em] md:tracking-[1em] text-white">Stack</span>
          <div className="h-[0.5px] flex-1 bg-white"></div>
        </div>
      </div>

      {/* THE TIGHT & SMOOTH MARQUEE */}
      <div className="flex whitespace-nowrap overflow-hidden group relative py-1 md:py-2">
        <div className="flex animate-marquee-liquid-tight items-center">
          {fullList.map((sw, i) => (
            // ADJUSTMENT 3: Reduced padding between items on mobile (px-4)
            <div key={i} className="flex items-center px-4 md:px-8"> 
              {/* Smaller separator spacing */}
              <div className="w-[2px] h-[2px] bg-amber-500/30 rounded-full mr-4 md:mr-8 group-hover:bg-amber-500 transition-all duration-700"></div>
              
              {/* ADJUSTMENT 4: Responsive text size (text-base -> text-2xl) */}
              <h4 className={`text-base sm:text-lg md:text-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.25em] text-white/20 ${sw.color} transition-all duration-1000 cursor-default hover:opacity-100`}>
                {sw.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Edge Fading for depth */}
        {/* ADJUSTMENT 5: Scaled gradient width (w-12 on mobile) so it doesn't hide center text */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 lg:w-64 bg-gradient-to-r from-[#020202] via-[#020202]/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 lg:w-64 bg-gradient-to-l from-[#020202] via-[#020202]/90 to-transparent z-10 pointer-events-none"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-liquid-tight {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
        .animate-marquee-liquid-tight {
          animation: marquee-liquid-tight 50s linear infinite;
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .group:hover .animate-marquee-liquid-tight {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default SoftwareMarquee;