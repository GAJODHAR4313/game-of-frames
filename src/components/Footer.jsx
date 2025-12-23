import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const videoRef = useRef(null);

  // Video Autoplay Logic
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    // ADJUSTMENT 1: Adjusted top padding (pt-16 on mobile vs pt-24 on desktop)
    <footer id="contact" className="bg-[#020202] pt-16 md:pt-24 pb-0 overflow-hidden border-t border-white/5 relative z-10 font-sans">
      
      {/* =========================================
          UPPER FOOTER CONTENT
      ========================================= */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 mb-12 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24 relative z-20">
          
          {/* Left Side: Call to Action */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left">
            <h4 className="text-amber-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em]">Next Step</h4>
            {/* ADJUSTMENT 2: Responsive Headline (text-4xl -> text-7xl) */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Let's craft your <br /> <span className="italic">Visual Legacy.</span>
            </h2>
            <div className="pt-4 md:pt-6">
              <a 
                href="mailto:imrajputyashraj@gmail.com" 
                className="inline-block bg-white text-black px-8 py-4 md:px-10 md:py-5 font-black uppercase text-xs md:text-sm tracking-widest hover:bg-amber-500 transition-all duration-500 rounded-sm"
              >
                Send an Inquiry
              </a>
            </div>
          </div>

          {/* Right Side: Links & Info */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {/* Socials */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-white/20 font-mono text-[8px] md:text-[9px] uppercase tracking-widest">Socials</p>
              <ul className="space-y-2 text-white/60 font-black uppercase text-[10px] md:text-xs tracking-tighter">
                <li><a href="https://www.instagram.com/gameofframes_01?igsh=YTkweWYxbWJtb29t&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors tracking-widest">Instagram</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors tracking-widest">YouTube</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors tracking-widest">9823129836</a></li>
                <li>
                  <a href="mailto:imrajputyashraj@gmail.com" className="hover:text-amber-500 transition-colors tracking-widest">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-white/20 font-mono text-[8px] md:text-[9px] uppercase tracking-widest">Location</p>
              <p className="text-white/60 font-black uppercase text-[10px] md:text-xs tracking-widest leading-relaxed">
                Chhatrapati Sambhajinagar , India <br /> Available Worldwide
              </p>
            </div>

            {/* Time / Status - Hidden on small mobile to save space, visible on MD+ */}
            <div className="space-y-4 hidden md:block text-right lg:text-left">
              <p className="text-white/20 font-mono text-[9px] uppercase tracking-widest">Local Time</p>
              <p className="text-white font-black uppercase text-xl italic tracking-tighter">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST
              </p>
              <div className="flex items-center gap-2 justify-end lg:justify-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-500/50 text-[8px] font-mono uppercase tracking-widest">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          VIDEO TEXT MASK SECTION
      ========================================= */}
      {/* ADJUSTMENT 3: Height changed to 30vh on mobile, 60vh on desktop */}
      <div className="relative w-full h-[30vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        
        {/* VIDEO LAYER */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/Madeira  Cinematic FPV - Ellis van Jason (1080p, h264).mov" type="video/mp4" />
        </video>

        {/* MASK LAYER - Adjusted blend mode logic for better mobile contrast if needed */}
        <div className="absolute inset-0 bg-[#020202] mix-blend-multiply flex flex-col items-center justify-center select-none z-10">
          <h1 className="text-[15vw] md:text-[18vw] font-black text-white uppercase leading-none tracking-tighter text-center">
            GAME OF <br className="md:hidden" /> FRAMES
          </h1>
        </div>
        
        {/* Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20 opacity-30">
             <div className="w-[90%] border-t border-b border-white/20 h-16 md:h-24 absolute"></div>
        </div>
      </div>


      {/* =========================================
          BOTTOM BAR
      ========================================= */}
      <div className="bg-[#020202] py-6 md:py-8 border-t border-white/5 relative z-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          
          {/* Copyright - Centered on mobile */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-10 text-center md:text-left">
            <p className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.3em] md:tracking-[0.4em]">© 2025{currentYear} All Rights Reserved </p>
            <p className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.3em] md:tracking-[0.4em]">Designed by Yashraj Vijaysing Rajput</p>
          </div>
          
          {/* Back to Top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 md:gap-4 text-white/40 hover:text-white transition-colors mt-2 md:mt-0"
          >
            <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest">Back to top</span>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 transition-colors">
              <svg className="w-2.5 h-2.5 md:w-3 md:h-3 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;