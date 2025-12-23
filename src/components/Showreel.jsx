import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showreel = () => {
  const containerRef = useRef(null);

  const reels = [
    { id: 1, videoSrc: "/gym.MOV", title: "Gym Shoot" },
    { id: 2, videoSrc: "/hometour.MP4", title: "Home Tour" }, 
    { id: 3, videoSrc: "/59A53E53-005E-42B1-91F7-CF1F2CDFE14D.MP4", title: "Car Shoot" }, 
    { id: 4, videoSrc: "/mohit eng.mp4", title: "Engagement Reel " }, 
  ];

  useGSAP(() => {
    gsap.from(".reel-card", {
      y: 80,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: containerRef });

  return (
    // ADJUSTMENT 1: Adjusted padding for mobile (py-16) vs desktop (lg:py-40)
    <section id="showreel" ref={containerRef} className="relative bg-zinc-50 dark:bg-[#050505] py-16 md:py-24 lg:py-40 border-t border-zinc-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      
      {/* Background Ambience - Scaled size for mobile */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-amber-500/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
            <span className="h-[1px] w-8 md:w-12 bg-amber-600 dark:bg-amber-500 transition-colors duration-500"></span>
            <h2 className="text-amber-600 dark:text-amber-500 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] font-black transition-colors duration-500">Edits</h2>
          </div>
          
          {/* ADJUSTMENT 2: Responsive font sizes (text-5xl -> 8xl) */}
          <h3 className="text-5xl sm:text-6xl md:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none transition-colors duration-500">
            Selected <br />
            <span className="italic text-zinc-300 dark:text-white/20 transition-colors duration-500">Moments.</span>
          </h3>
        </div>

        {/* Grid Section */}
        {/* ADJUSTMENT 3: 'sm:grid-cols-2' ensures tablets/large phones see 2 columns instead of 1 giant column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              // Light: White Card | Dark: Neutral-900 Card
              className="reel-card relative aspect-[9/16] group overflow-hidden bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-sm shadow-2xl transition-colors duration-500"
            >
              <video 
                src={reel.videoSrc}
                className="w-full h-full object-cover brightness-100 dark:brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 pointer-events-none border-[1px] border-transparent group-hover:border-amber-500/30 transition-colors duration-500">
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-amber-600 dark:border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-amber-600 dark:border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white font-black text-base md:text-lg italic uppercase tracking-tighter leading-none drop-shadow-md">{reel.title}</p>
                <p className="text-amber-500 text-[8px] font-bold uppercase tracking-[0.4em] mt-1 drop-shadow-md">Scene #{reel.id}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Link Section */}
        <div className="mt-12 md:mt-16 flex justify-center md:justify-end">
            <a 
                href="https://www.instagram.com/gameofframes_01?igsh=YTkweWYxbWJtb29t&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            >
                <span className="text-zinc-900 dark:text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500">Load More Clips</span>
                <span className="w-8 md:w-12 h-[1px] bg-zinc-900 dark:bg-white group-hover:w-16 md:group-hover:w-20 group-hover:bg-amber-600 dark:group-hover:bg-amber-500 transition-all duration-500"></span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Showreel;