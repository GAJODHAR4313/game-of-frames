import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CHANGE IS HERE: Added 'Skills' to the list
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Showreel', href: '#showreel' },
    { name: 'Skills', href: '#skills' },   // <--- New Button Added
    { name: 'Equipment', href: '#gear' },
    
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { 
          y: targetSection, 
          offsetY: 0
        },
        ease: "power4.out"
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl py-5 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-10 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-10 md:px-20 flex justify-center items-center">
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-14 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-white/90 hover:text-white text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden ml-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-amber-500 transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden z-[120]`}
      >
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-10 right-10 text-white/70 hover:text-white"
        >
          <X size={45} strokeWidth={1} />
        </button>
        
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-white text-3xl font-light tracking-[0.25em] uppercase hover:text-amber-500 transition-all duration-500 cursor-pointer ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;