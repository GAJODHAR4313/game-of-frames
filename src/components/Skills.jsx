import React from 'react';

const Skills = () => {
  const creativeSuite = [
    { 
      title: "Editing", 
      tools: ["Capcut", "DaVinci"], 
      icon: "🎞️", 
      desc: "Narrative Flow",
      specs: "TIMELINE_X",
      img: "/IMG_3542.jpg"
    },
    { 
      title: "Color Grading", 
      tools: ["DaVinci Resolve"], 
      icon: "🎨", 
      desc: "Color Science",
      specs: "DWG_ACES",
      img: "/IMG_1855.jpg"
    },
    { 
      title: "VFX / Comp", 
      tools: ["After Effects", "Blender"], 
      icon: "💥", 
      desc: "Compositing",
      specs: "NODES_FX",
      img: "/IMG_1516.jpg"
    },
    { 
      title: "Design", 
      tools: ["Photoshop", "Figma"], 
      icon: "✒️", 
      desc: "Visual Identity",
      specs: "VECTORS_PX",
      img: "/IMG_5222.jpg"
    },
  ];

  return (
    // Fundo fixo no cinza quase preto (#141414)
    <section id="skills" className="relative bg-[#141414] py-16 md:py-24 lg:py-40 border-t border-white/5 font-sans overflow-hidden">
      
      {/* Background Noise fixo para tema escuro */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-normal"></div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
             <span className="h-[1px] w-8 md:w-12 bg-amber-500"></span>
             <h2 className="text-amber-500 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] font-black">Competencies</h2>
          </div>
          <h3 className="text-5xl sm:text-6xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-none">
            Creative 
            <span className="italic text-white/20">SKILLS</span>
          </h3>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {creativeSuite.map((item, i) => (
            <div 
              key={i} 
              // Card com fundo fixo #1a1a1a e bordas sutis
              className="group relative h-[320px] md:h-[380px] flex flex-col justify-between p-6 md:p-8 border border-white/5 bg-[#1a1a1a] overflow-hidden transition-all duration-500 hover:border-amber-500"
            >
              {/* --- IMAGE BACKGROUND LAYER (No Hover) --- */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Hover Line superior */}
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

              {/* Top Section */}
              <div className="relative z-10 flex justify-between items-start">
                 <span className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">{item.icon}</span>
                 <span className="font-mono text-[8px] md:text-[9px] text-white/30 uppercase tracking-widest border border-white/10 px-2 py-1 rounded-sm group-hover:text-amber-500 group-hover:border-amber-500 transition-colors">0{i+1}</span>
              </div>

              {/* Middle Section */}
              <div className="relative z-10">
                 <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-white mb-2 transition-colors duration-500">
                   {item.title}
                 </h4>
                 <div className="w-8 h-[2px] bg-white/10 group-hover:bg-amber-500 group-hover:w-12 transition-all duration-500 mb-3 md:mb-4"></div>
                 <p className="text-[10px] md:text-xs font-mono text-gray-400 group-hover:text-gray-200 uppercase tracking-wider transition-colors">
                   {item.desc}
                 </p>
              </div>

              {/* Bottom Section (Tools) */}
              <div className="relative z-10">
                 <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, idx) => (
                        <span key={idx} className="text-[8px] md:text-[9px] font-bold text-zinc-400 bg-white/5 px-2 py-1 uppercase tracking-wider group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                            {tool}
                        </span>
                    ))}
                 </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Bar Section */}
        <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pt-8 md:pt-10 border-t border-white/5">
            <div className="flex gap-6 md:gap-8">
                <div className="flex items-center gap-2 md:gap-3">
                   <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                   <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/50">System: Online</span>
                </div>
                <div className="hidden sm:block w-[1px] h-4 bg-white/10"></div>
                <div className="hidden sm:block text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/50">
                    Output: 4K / RAW
                </div>
            </div>

            <a 
               href="https://www.instagram.com/gameofframes_01"
               target="_blank"
               rel="noopener noreferrer"
               className="group flex items-center gap-3 md:gap-4 cursor-pointer"
            >
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white group-hover:text-amber-500 transition-colors">Start a Project</span>
                <span className="text-lg md:text-xl text-white group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;