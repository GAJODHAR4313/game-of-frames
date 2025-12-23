import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // --- AUTOPLAY LOGIC ---
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.log("Autoplay prevented:", error));
      }
    }
  }, []);

  // --- ANIMATIONS (GSAP) ---
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from(".ghost-text", { opacity: 0, scale: 1.1, duration: 1 })
      .from(".hero-title span", { y: 80, opacity: 0, stagger: 0.05, duration: 0.8 }, "-=0.8") 
      .from(".video-container", { scale: 1.05, opacity: 0, duration: 1 }, "-=0.7")
      .from(".ui-element, .hero-content", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.6");

  }, { scope: containerRef });

  return (
    // ADJUSTMENT 1: Changed min-h-screen to support dynamic mobile viewports (dvh) and centered content better
    <section id="hero" ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-center lg:flex-row lg:items-center bg-[#050505] overflow-hidden py-24 lg:py-0 font-sans">
      
      {/* Background Ghost Text - Scaled for mobile readability */}
      <div className="ghost-text absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] lg:text-[15vw] font-black text-white/[0.02] uppercase select-none pointer-events-none whitespace-nowrap leading-none z-0">
        Cinema / Visuals / Stories
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: Text Content */}
        <div className="lg:col-span-7 z-10 space-y-6 md:space-y-8 text-white order-2 lg:order-1">
          <div className="space-y-2 md:space-y-3 hero-title">
            <div className="flex items-center space-x-4 ui-element">
              <span className="h-[2px] w-8 md:w-12 bg-amber-500 animate-pulse"></span>
              <span className="text-amber-500 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs font-black">
                Now Filming // Global
              </span>
            </div>
            
            {/* ADJUSTMENT 2: Responsive text sizes (text-5xl -> text-7xl -> 115px) */}
            <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-[115px] font-black uppercase tracking-tighter leading-[0.9] lg:leading-[0.8] flex flex-col overflow-hidden">
              <span className="relative z-10">Game</span>
              <div className="relative h-10 sm:h-12 md:h-16 flex items-center overflow-hidden">
                <span className="absolute left-0 text-[1.2em] md:text-[1.4em] italic stroke-text opacity-30 tracking-widest select-none -z-10 translate-x-4 md:translate-x-8">OF</span>
                <span className="text-amber-500 text-[0.4em] md:text-[0.35em] tracking-[0.4em] font-bold ml-1 relative z-10">OF</span>
              </div>
              <span className="text-amber-500 relative z-10">Frames.</span>
            </h1>
          </div>
          
          <p className="hero-content text-gray-300 max-w-lg text-sm md:text-lg leading-relaxed font-light tracking-wide border-l-2 border-amber-500/30 pl-6">
            Visualizing emotions through the lens of <span className="text-white font-medium italic underline decoration-amber-500/50 underline-offset-4">Game of Frames</span>. Every shot is an intention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 hero-content">
            <a 
              href="#showreel"
              className="group relative overflow-hidden bg-white text-black px-8 py-4 sm:px-10 sm:py-5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:text-white inline-block text-center cursor-pointer w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> View Showreel
              </span>
              <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
            </a>
            
            <a 
              href="https://www.instagram.com/gameofframes_01?igsh=YTkweWYxbWJtb29t&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-8 py-4 sm:px-10 sm:py-5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-500 inline-block text-center w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Video Container */}
        {/* ADJUSTMENT 3: Changed height to be responsive (h-[40vh] on mobile) vs fixed pixels */}
        <div className="lg:col-span-5 relative h-[40vh] sm:h-[500px] md:h-[600px] lg:h-[75vh] w-full mt-0 lg:mt-16 group video-container order-1 lg:order-2">
          
          {/* Rec Card - Kept hidden on mobile/tablet to save space (xl:block), can change to md:block if desired */}
          <div className="ui-element absolute -left-14 top-20 bg-black/95 backdrop-blur-xl border border-amber-500 p-5 z-30 hidden xl:block shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
               <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Live Feed</p>
            </div>
            <div className="text-white text-[11px] font-mono space-y-1">
              <p>REC: <span className="text-green-500 uppercase font-bold animate-pulse">Active</span></p>
              <p>4K RAW // 60 FPS</p>
              <p>ISO 400 // f/2.8</p>
            </div>
          </div>

          <div className="w-full h-full overflow-hidden relative border border-white/10 shadow-2xl bg-black">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover brightness-105"
              muted
              loop
              playsInline
              autoPlay
            >
              <source src="/IMG_2951 3.MOV" type="video/quicktime" />
            </video>
            
            {/* Corners UI - Adjusted positioning for smaller screens */}
            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-8 h-8 lg:w-10 lg:h-10 border-t-2 border-l-2 border-amber-500 z-40 opacity-80"></div>
            <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 lg:w-10 lg:h-10 border-t-2 border-r-2 border-amber-500 z-40 opacity-80"></div>
            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 w-8 h-8 lg:w-10 lg:h-10 border-b-2 border-l-2 border-amber-500 z-40 opacity-80"></div>
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-8 h-8 lg:w-10 lg:h-10 border-b-2 border-r-2 border-amber-500 z-40 opacity-80"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
    </section>
  );
};

export default Hero;