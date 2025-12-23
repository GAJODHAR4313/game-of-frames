import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const skills = ["Cinematography", "Direction", "Color Grading", "Post-Production", "Lighting Design"];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", 
        toggleActions: "play none none reverse",
      }
    });

    // 1. Image Entrance
    tl.from(".about-image", {
      y: 80,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out"
    })
    // 2. Text & Content Reveal
    .from(".reveal-item", {
      y: 40,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1.2");

  }, { scope: containerRef });

  return (
    // ADJUSTMENT 1: Adjusted padding for mobile (py-16) vs desktop (lg:py-40)
    <section ref={containerRef} id="about" className="relative bg-[#050505] py-16 md:py-24 lg:py-40 overflow-hidden font-sans border-t border-white/5">
      
      {/* BRAND WATERMARK - Scaled down for mobile */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] select-none pointer-events-none rotate-12">
        <img src="/Frame 38.png" alt="Watermark" className="w-[200px] md:w-[400px] h-auto grayscale" />
      </div>

      {/* ADJUSTMENT 2: Reduced gap on mobile (gap-10) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-center relative z-10">
        
        {/* LEFT SIDE: Image Container */}
        <div className="lg:col-span-5 relative group about-image">
          {/* Border Offset - Adjusted for smaller screens to ensure it doesn't get cut off */}
          <div className="absolute -inset-2 md:-inset-4 border border-amber-500/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 -z-10"></div>
          
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 w-12 md:w-16 lg:w-20 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <img src="/Frame 38.png" alt="Game of Frames Logo" className="w-full h-auto drop-shadow-2xl" />
            </div>

            <img 
              src="/bg010 copy.jpeg" 
              alt="Director at work" 
              className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 right-0 bg-amber-500 text-black p-3 md:p-4 flex flex-col items-end translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter">Verified Creator</span>
                <span className="text-[10px] md:text-xs font-bold uppercase italic tracking-tighter">Game of Frames</span>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest italic md:tracking-[0.2em]">Authentic Production</p>
              <p className="text-white/20 text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em]">Visual Heritage // Est 2024</p>
            </div>
            <div className="text-amber-500/40 text-[9px] md:text-[10px] font-mono animate-pulse">● STUDIO_ACTIVE</div>
          </div>
        </div>

        {/* RIGHT SIDE: Content Section */}
        <div className="lg:col-span-7 space-y-8 md:space-y-12">
          <div className="space-y-4 reveal-item">
            <div className="flex items-center gap-4 group">
                <span className="h-[2px] w-8 md:w-12 bg-amber-500 group-hover:w-20 transition-all duration-500"></span>
                <h2 className="text-amber-500 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-black">Founder & Visionary</h2>
            </div>
            {/* ADJUSTMENT 3: Responsive Font Sizes (text-5xl -> text-8xl) */}
            <h3 className="text-5xl sm:text-6xl md:text-8xl font-black text-white uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
              Defining <br />
              <span className="italic">Aesthetics.</span>
            </h3>
          </div>

          {/* ADJUSTMENT 4: Readable Text size on mobile (text-base) */}
          <div className="space-y-6 md:space-y-8 text-gray-300 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl reveal-item">
            <p className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-black first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left">
              I am a cinematographer and director dedicated to the profound art of visual storytelling. Through the lens of 
              <span className="text-white font-semibold italic underline decoration-amber-500/40 underline-offset-8"> Game of Frames</span>, 
              my mission is to encapsulate raw human experiences and translate them into timeless cinematic legacies.
            </p>
            <p>
              My creative philosophy is anchored in technical precision and an unwavering soul for aesthetic perfection. I believe that 
              <span className="text-amber-500 font-medium italic"> every single frame </span> 
              is more than just an image; it is a meticulously composed opportunity to evoke a visceral feeling.
            </p>
          </div>

          {/* Skills Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 reveal-item">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1.5 md:px-4 md:py-2 border border-white/10 rounded-full text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest hover:border-amber-500 hover:text-white transition-all duration-300 cursor-default bg-white/5">
                {skill}
              </span>
            ))}
          </div>

          {/* Stats & CTA */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 pt-8 md:pt-10 border-t border-white/5 reveal-item">
            <div className="flex gap-8 md:gap-10">
                <div>
                  <p className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">01+</p>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-amber-500 font-bold mt-2 md:mt-3">Years Exp.</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">50+</p>
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