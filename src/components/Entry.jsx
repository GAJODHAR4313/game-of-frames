import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Entry = ({ onEnter }) => {
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (isClicked) return;
    setIsClicked(true);
    
    // Smooth transition ke liye timeout
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 800); 
  };

  return (
    <div 
      // 'cursor-pointer' add kiya taaki click karne ka pata chale
      className={`relative w-full h-[100dvh] bg-black overflow-hidden select-none 
      ${isClicked ? 'cursor-auto' : 'cursor-pointer'}`} 
      onClick={handleClick}
    >
      
      {/* ================= BACKGROUND VIDEO ================= */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={
          isClicked 
            ? { scale: 2, opacity: 0 } 
            : { scale: 1, opacity: 1, filter: "grayscale(0%) blur(0px)" }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/Madeira  Cinematic FPV - Ellis van Jason (1080p, h264).mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>


      {/* ================= MAIN CONTENT (Perfect Center) ================= */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        
        <motion.div
          key="hero"
          animate={isClicked ? { scale: 10, opacity: 0, filter: 'blur(10px)' } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative text-center group mix-blend-overlay w-full max-w-5xl mx-auto"
        >
            <h1 className="text-6xl md:text-[9vw] leading-[0.9] font-black uppercase tracking-tighter text-white drop-shadow-2xl">
              <span className="block relative z-20">Game of</span>
              <span className="block relative z-20">Frames</span>
            </h1>
            
            {!isClicked && (
              <>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 md:mt-6 text-xs md:text-lg text-white font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase drop-shadow-md"
                >
                  By Yashraj Rajput
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 md:mt-12 text-[10px] md:text-xs text-white border border-white/50 px-4 py-2 rounded-full inline-block tracking-widest uppercase animate-pulse"
                >
                    Click to Enter
                </motion.div>
              </>
            )}
        </motion.div>

      </div>

      {/* ================= UI OVERLAYS ================= */}
      <motion.div 
        animate={{ opacity: isClicked ? 0 : 1 }} 
        transition={{ duration: 0.5 }}
        className="pointer-events-none"
      >
          {/* Top Left */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-1 z-20">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
                <span className="text-white text-xs font-mono font-bold tracking-widest shadow-black drop-shadow-md">REC</span>
            </div>
            <span className="text-white/80 text-[10px] font-mono shadow-black drop-shadow-md">00:00:04:12</span>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20">
            <span className="text-white/50 text-[10px] font-sans tracking-widest shadow-black drop-shadow-md">© 2025 WRKD</span>
          </div>
      </motion.div>

    </div>
  );
};

export default Entry;