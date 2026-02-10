import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showreel from "./components/Showreel";
import Gear from "./components/Gear";
import Skills from "./components/Skills";
import SoftwareMarquee from "./components/SoftwareMarquee";
import Footer from "./components/Footer";
import Entry from "./components/Entry";

function App() {
  // STATUS: 'entry' -> 'loading' -> 'home'
  const [status, setStatus] = useState('entry');

  // Helper to handle the transition flow
  const handleEnter = () => {
    setStatus('loading'); // 1. Show the loader immediately after Entry exits
    
    // 2. Fake a "Rendering" delay (2 seconds), then show Home
    setTimeout(() => {
      setStatus('home');
    }, 2000);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white/20">
      
      <AnimatePresence mode="wait">
        
        {/* === STAGE 1: ENTRY SCREEN === */}
        {status === 'entry' && (
          <motion.div 
            key="entry-screen"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} // Fade out into blur
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <Entry onEnter={handleEnter} />
          </motion.div>
        )}

        {/* === STAGE 2: TRANSITION LOADER (The "Blank Screen" Fix) === */}
        {status === 'loading' && (
          <motion.div 
            key="loader-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }} // Slide up when done
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
          >
             {/* Simple Cinematic Loader UI */}
             <div className="w-[300px] flex flex-col gap-2">
                <div className="flex justify-between text-[10px] font-mono text-white/50 uppercase tracking-widest">
                   <span>Rendering</span>
                   <span className="animate-pulse">Processing Assets...</span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
                   {/* Moving Bar */}
                   <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 1.8, ease: "easeInOut" }} // Matches the setTimeout
                      className="absolute inset-0 bg-white shadow-[0_0_10px_white]"
                   />
                </div>
             </div>
          </motion.div>
        )}

        {/* === STAGE 3: MAIN WEBSITE === */}
        {status === 'home' && (
          <motion.div 
            key="main-site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} 
          >
            <div className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
              <Navbar />
            </div>

            <div className="relative z-30">
              <Hero />
              <About />
              <Showreel />
              <Gear />
              <Skills />
              <SoftwareMarquee />
              <Footer />
            </div>
          </motion.div>
        )}

      </AnimatePresence>
   
    </div>
  );
}

export default App;