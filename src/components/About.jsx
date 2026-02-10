import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// --- MOCK BACKEND DATA ---
const API_DATA = {
  bio: {
    intro: "I am a cinematographer and director dedicated to the profound art of visual storytelling.",
    philosophy: "My creative philosophy is anchored in technical precision and an unwavering soul for aesthetic perfection."
  },
  stats: { years: 4, projects: 87 },
  currentStatus: { location: "Jalgaon, India", isTravelling: false, focus: "Documentary" },
  skills: ["Cinematography", "Direction", "Color Grading", "Post-Production", "Lighting Design"],
  cameraMeta: { iso: "800", shutter: "1/50", wb: "5600K", lens: "35mm f/1.4" }
};

const About = () => {
  const containerRef = useRef(null);
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOGIC: Data Fetching
  useEffect(() => {
    setTimeout(() => {
      setData(API_DATA);
      setLoading(false);
    }, 500);
  }, []);

  // --- SCROLL ANIMATIONS ---
  useGSAP(() => {
    if (loading) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", 
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".about-image-wrapper", { y: 80, opacity: 0, duration: 1.8, ease: "power3.out" })
      .from(".reveal-item", { y: 40, opacity: 0, stagger: 0.2, duration: 1.5, ease: "power3.out" }, "-=1.2");

    tl.from(".stat-number", {
      textContent: 0,
      duration: 2.5,
      ease: "power1.out",
      snap: { textContent: 1 },
      stagger: 0.2,
    }, "-=1.5");

  }, { scope: containerRef, dependencies: [loading] });

  if (loading) return <div className="bg-[#050505] py-40 text-center text-white/20">Loading Profile...</div>;

  return (
    <section ref={containerRef} id="about" className="relative bg-[#050505] py-16 md:py-24 lg:py-40 overflow-hidden font-sans border-t border-white/5">
      
      {/* BRAND WATERMARK */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] select-none pointer-events-none rotate-12">
        <img src="/Frame 38.png" alt="Watermark" className="w-[200px] md:w-[400px] h-auto grayscale" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-center relative z-10">
        
        {/* LEFT SIDE: Image Section (Tilt Removed) */}
        <div className="lg:col-span-5 relative group about-image-wrapper">
          {/* Border Offset */}
          <div className="absolute -inset-2 md:-inset-4 border border-amber-500/20 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700 -z-10"></div>
          
          {/* Main Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
            
            {/* Viewfinder Overlay (Visible on Hover) */}
            <div className="absolute inset-0 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {/* Crosshair Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                </div>
                
                {/* Camera Data (Top) */}
                <div className="absolute top-4 left-4 right-4 flex justify-between text-[9px] font-mono text-white/80 tracking-widest">
                    <span>ISO {data.cameraMeta.iso}</span>
                    <span className="text-amber-500">REC [00:00:04]</span>
                    <span>{data.cameraMeta.wb}</span>
                </div>

                {/* Camera Data (Bottom) */}
                <div className="absolute bottom-16 left-4 right-4 flex justify-between text-[9px] font-mono text-white/80 tracking-widest border-t border-white/10 pt-2">
                    <span>{data.cameraMeta.shutter}</span>
                    <span>{data.cameraMeta.lens}</span>
                </div>
                
                {/* Focus Brackets */}
                <div className="absolute top-1/3 left-1/3 w-4 h-4 border-t border-l border-white/50"></div>
                <div className="absolute top-1/3 right-1/3 w-4 h-4 border-t border-r border-white/50"></div>
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 border-b border-l border-white/50"></div>
                <div className="absolute bottom-1/3 right-1/3 w-4 h-4 border-b border-r border-white/50"></div>
            </div>

            <img 
              src="/bg010 copy.jpeg" 
              alt="Director at work" 
              className="w-full h-full object-cover grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
            />
            
            {/* Dynamic Location Tag */}
            <div className="absolute bottom-0 right-0 bg-neutral-900/90 backdrop-blur-md text-white p-3 md:p-4 flex flex-col items-end border-t border-l border-white/10 z-50">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${data.currentStatus.isTravelling ? 'bg-amber-500 animate-ping' : 'bg-green-500'}`}></span>
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter">
                        {data.currentStatus.isTravelling ? 'On Tour' : 'Base Location'}
                    </span>
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase italic tracking-tighter text-gray-400">
                    {data.currentStatus.location}
                </span>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest italic md:tracking-[0.2em]">Authentic Production</p>
            </div>
            <div className="text-amber-500/40 text-[9px] md:text-[10px] font-mono animate-pulse">
                ● FOCUS: {data.currentStatus.focus.toUpperCase()}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content Section */}
        <div className="lg:col-span-7 space-y-8 md:space-y-12">
          <div className="space-y-4 reveal-item">
            <div className="flex items-center gap-4 group">
                <span className="h-[2px] w-8 md:w-12 bg-amber-500 group-hover:w-20 transition-all duration-500"></span>
                <h2 className="text-amber-500 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-black">Founder & Visionary</h2>
            </div>
            <h3 className="text-5xl sm:text-6xl md:text-8xl font-black text-white uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
              Defining <br />
              <span className="italic">Aesthetics.</span>
            </h3>
          </div>

          <div className="space-y-6 md:space-y-8 text-gray-300 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl reveal-item">
            <p className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-black first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left">
              {data.bio.intro}
            </p>
            <p>{data.bio.philosophy}</p>
          </div>

          {/* Skills Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 reveal-item">
            {data.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1.5 md:px-4 md:py-2 border border-white/10 rounded-full text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest hover:border-amber-500 hover:text-white transition-all duration-300 cursor-default bg-white/5">
                {skill}
              </span>
            ))}
          </div>

          {/* Stats Counter */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 pt-8 md:pt-10 border-t border-white/5 reveal-item">
            <div className="flex gap-8 md:gap-10">
                <div>
                  <div className="flex items-baseline">
                    <p className="stat-number text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">{data.stats.years}</p>
                    <span className="text-2xl font-black text-amber-500">+</span>
                  </div>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-amber-500 font-bold mt-2 md:mt-3">Years Exp.</p>
                </div>

                <div>
                   <div className="flex items-baseline">
                    <p className="stat-number text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">{data.stats.projects}</p>
                    <span className="text-2xl font-black text-amber-500">+</span>
                  </div>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-amber-500 font-bold mt-2 md:mt-3">Projects</p>
                </div>
            </div>
                              
            <button className="relative group self-start">
              <div className="flex items-center gap-4 md:gap-6 py-3 px-6 md:py-4 md:px-8 border border-white/10 bg-white/5 group-hover:border-amber-500 transition-all duration-500">
                <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Explore Journey</span>
                <span className="w-6 md:w-8 h-[1px] bg-white group-hover:bg-amber-500 group-hover:translate-x-2 transition-all duration-500"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;