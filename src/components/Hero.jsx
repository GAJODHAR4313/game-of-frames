import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
// Note: Agar @gsap/react install nahi ho raha, toh hum standard useEffect use karenge niche

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  // State for Time and Logic
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState({
    mode: "INITIALIZING",
    color: "bg-gray-500",
    textColor: "text-gray-500",
    message: "Loading...",
    sub: "Please wait",
    icon: "..."
  });

  // --- LOGIC: TIME & STATUS ---
  useEffect(() => {
    // Clock Timer
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Status Logic
    const hour = new Date().getHours();
    if (hour >= 22 || hour < 5) {
      setStatus({ 
        mode: "LATE NIGHT GRIND", 
        color: "bg-purple-600", 
        textColor: "text-purple-500",
        message: "Editing in progress",
        sub: "Fueled by Caffeine",
        icon: "🌙" 
      });
    } else if (hour >= 9 && hour < 18) {
      setStatus({ 
        mode: "ON SET / SHOOTING", 
        color: "bg-red-600", 
        textColor: "text-red-500",
        message: "Recording visuals",
        sub: "Do Not Disturb",
        icon: "🔴" 
      });
    } else {
      setStatus({ 
        mode: "PRE-PRODUCTION", 
        color: "bg-green-500", 
        textColor: "text-green-500",
        message: "Planning next shoot",
        sub: "Available for Calls",
        icon: "🟢" 
      });
    }

    return () => clearInterval(timer);
  }, []);

  // --- ANIMATIONS (Standard GSAP Context) ---
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".ghost-text", { opacity: 0, scale: 1.1, duration: 1 })
        .from(".hero-title span", { y: 80, opacity: 0, stagger: 0.05, duration: 0.8 }, "-=0.8") 
        .from(".video-container", { scale: 1.05, opacity: 0, duration: 1 }, "-=0.7")
        .from(".status-card", { x: -50, opacity: 0, duration: 0.8, clearProps: "all" }, "-=0.5");
        
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-center lg:flex-row lg:items-center bg-[#050505] overflow-hidden py-24 lg:py-0 font-sans">
      
      {/* Background Ghost Text */}
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
                Cinematic Portfolio
              </span>
            </div>
            
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
            Visualizing emotions through the lens. Creating timeless visuals for brands and stories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 hero-content">
             <a href="#showreel" className="group relative overflow-hidden bg-white text-black px-8 py-4 sm:px-10 sm:py-5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:text-white inline-block text-center w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">View Showreel</span>
              <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Video Container */}
        <div className="lg:col-span-5 relative h-[40vh] sm:h-[500px] md:h-[600px] lg:h-[75vh] w-full mt-0 lg:mt-16 group video-container order-1 lg:order-2">
          
          {/* --- STATUS CARD --- */}
          <div className="status-card absolute -left-0 md:-left-20 top-5 md:top-20 bg-black/80 backdrop-blur-md border border-white/10 p-4 md:p-6 z-30 shadow-[0_0_30px_rgba(0,0,0,0.5)] w-64 md:w-72 rounded-sm overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${status.color}`}></div>
            
            <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-3">
              <div>
                <p className="text-[9px] md:text-[10px] text-gray-400 font-mono tracking-widest uppercase mb-1">Local Time</p>
                <p className="text-white font-mono text-sm md:text-base font-bold">
                  {time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : "--:--:--"}
                </p>
              </div>
              <div className={`${status.color} w-2 h-2 rounded-full animate-ping mt-2`}></div>
            </div>

            <div className="space-y-1">
              <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${status.textColor}`}>
                Status {status.icon}
              </p>
              <h3 className="text-white text-lg md:text-xl font-bold uppercase leading-none font-sans">
                {status.mode}
              </h3>
              <p className="text-gray-400 text-xs italic font-light pt-1">
                "{status.sub}"
              </p>
            </div>
            
             {/* Visualizer */}
             <div className="mt-4 flex items-end gap-1 h-6 opacity-50">
               {[...Array(8)].map((_, i) => (
                 <div 
                   key={i} 
                   className={`w-1 ${status.color} animate-pulse`} 
                   style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}
                 ></div>
               ))}
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
              <source src="/IMG_2951 3.mp4" type="video/mp4" />
            </video>
            
            {/* UI Corners */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-amber-500 z-40 opacity-80"></div>
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-amber-500 z-40 opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;