import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Gear = () => {
  const containerRef = useRef(null);

  const gearItems = [
    {
      id: "01",
      category: "Camera Systems",
      name: "i Phone 13 Pro",
      specs: "4K 60FPS // Cinematic // RAW",
      tag: "Main Rig"
    },
    {
      id: "03",
      category: "Stability",
      name: " DJI Osmo 7P // FeiyuTech Vimble 4",
      specs: "LiDAR Focusing // 4.5kg Payload",
      tag: "Gimbal"
    },
    {
      id: "04",
      category: "Edit",
      name: "MacBook pro 13'' M2 ",
      specs: "16GB RAM // 1TB SSD // 8-Core CPU // 10-Core GPU",
      tag: "For Editing"
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    // Entrance animation for items
    gsap.from(".gear-item-reveal", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Horizontal line draw effect
    gsap.from(".divider-line", {
      scaleX: 0,
      duration: 1.5,
      ease: "power4.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    // ADJUSTMENT 1: Adjusted vertical padding (py-16) for mobile
    <section id="gear" ref={containerRef} className="relative bg-[#050505] py-16 md:py-24 lg:py-40 border-t border-white/5 overflow-hidden">
      
      {/* Abstract Background Detail - Scaled for mobile */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-amber-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
              <span className="text-amber-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em]">Inventory 2024</span>
            </div>
            {/* ADJUSTMENT 2: Responsive Title (text-5xl -> text-8xl) */}
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              The <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Arsenal.</span>
            </h2>
          </div>
          
          {/* ADJUSTMENT 3: Made visible on mobile (removed 'hidden') but restyled layout */}
          <p className="text-white max-w-full md:max-w-[280px] text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] leading-relaxed text-left md:text-right border-l-2 md:border-l-0 md:border-r border-amber-500/30 pl-4 md:pl-0 md:pr-4">
            Professional tools engineered for high-end cinematic storytelling.
          </p>
        </div>

        {/* Inventory List */}
        <div className="flex flex-col">
          {gearItems.map((item, index) => (
            <div key={index} className="gear-item-reveal relative group">
              {/* Top Divider */}
              <div className="divider-line absolute top-0 left-0 w-full h-[1px] bg-white/10 origin-left"></div>
              
              {/* ADJUSTMENT 4: Reduced vertical padding (py-8) and stacked flex direction */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-12 px-2 transition-colors duration-500 group-hover:bg-white/[0.02]">
                
                {/* ID & Basic Info */}
                <div className="flex items-start md:items-center gap-4 md:gap-16 flex-1 w-full">
                  <span className="text-amber-500/20 font-mono text-xs md:text-sm group-hover:text-amber-500 transition-colors mt-1 md:mt-0">
                    {item.id}
                  </span>
                  <div className="flex-1">
                    <p className="text-amber-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1 md:mb-2">
                      {item.category}
                    </p>
                    {/* ADJUSTMENT 5: Responsive Item Name (text-xl -> text-4xl) */}
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white uppercase tracking-tight group-hover:translate-x-3 transition-transform duration-500">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Technical Specs - Stacked on mobile */}
                <div className="mt-4 md:mt-0 pl-8 md:pl-0 flex flex-col items-start md:items-end gap-2 w-full md:w-auto">
                  <span className="text-[8px] md:text-[9px] text-white/40 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full group-hover:border-amber-500/50 group-hover:text-amber-500 transition-all">
                    {item.tag}
                  </span>
                  <p className="text-gray-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest mt-1 md:mt-2">
                    {item.specs}
                  </p>
                </div>

              </div>

              {/* Bottom Divider for the last item */}
              {index === gearItems.length - 1 && (
                <div className="divider-line absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left"></div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
             <div className="flex gap-8 md:gap-10 opacity-50">
                <div className="text-left md:text-center">
                    <p className="text-white font-bold text-lg md:text-xl uppercase italic">4K RAW</p>
                    <p className="text-[8px] text-white uppercase tracking-widest">Mastering</p>
                </div>
                <div className="text-left md:text-center">
                    <p className="text-white font-bold text-lg md:text-xl uppercase italic">Log-C</p>
                    <p className="text-[8px] text-white uppercase tracking-widest">Workflow</p>
                </div>
             </div>
             <p className="text-[8px] md:text-[9px] text-white/60 md:text-white uppercase tracking-[0.3em] md:tracking-[0.4em] font-mono">
                All systems active // @gameofframes_01
             </p>
        </div>

      </div>
    </section>
  );
};

export default Gear;