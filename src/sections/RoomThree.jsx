import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Heart, Sparkles, Star, Music, Smile } from 'lucide-react';

import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import pic7 from '../assets/pic7.png';
import pic8 from '../assets/pic8.png';
import pic9 from '../assets/pic9.png';
import pic10 from '../assets/pic10.png';
import pic11 from '../assets/pic11.png';

gsap.registerPlugin(ScrollTrigger);

const RoomThree = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax effect for memory images
      gsap.utils.toArray('.memory-box').forEach((box, i) => {
        const yOffset = i % 2 === 0 ? 80 : 120;
        gsap.fromTo(box, 
          { y: yOffset },
          {
            y: -yOffset,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          }
        );
      });
      
      gsap.from(".r3-title", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
          trigger: ".r3-title",
          start: "top 85%",
        }
      });
      
      gsap.to(".floating-icon-r3", {
        y: -20,
        rotation: 12,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.4
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex flex-col items-center justify-center bg-background px-4 py-32 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-primary-pink/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Floating Cute Icons */}
      <div className="absolute top-[10%] left-[10%] text-accent/40 floating-icon-r3 pointer-events-none z-10 hidden md:block">
         <Heart size={40} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute top-[30%] right-[10%] text-primary-pink floating-icon-r3 pointer-events-none z-10 hidden md:block">
         <Sparkles size={48} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[10%] left-[15%] text-accent/30 floating-icon-r3 pointer-events-none z-10 hidden md:block">
         <Star size={36} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[40%] right-[5%] text-pink-400 floating-icon-r3 pointer-events-none z-10 hidden md:block">
         <Music size={32} strokeWidth={1.5} />
      </div>
      <div className="absolute top-1/2 left-[5%] text-accent/50 floating-icon-r3 pointer-events-none z-10 hidden md:block">
         <Smile size={38} strokeWidth={1.5} />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-20 r3-title relative z-10">
          <h3 className="text-sm font-body uppercase tracking-[0.2em] text-accent mb-4 flex items-center justify-center gap-2">
             <Heart size={14} fill="currentColor" /> Room 03
          </h3>
          <h2 className="text-4xl md:text-5xl font-heading text-text-main mb-6 relative inline-block">
            <span className="relative z-10">Inspiration</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-primary-pink/50 -z-10 rounded-full"></span>
          </h2>
          <p className="text-secondary-text font-body italic text-sm md:text-base max-w-xl mx-auto font-semibold">
            "Your smile lights up the darkest rooms, and every moment feels like poetry."
          </p>
        </div>
        
        {/* Gallery Grid - Scattered Masonry Look */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 relative">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-12 mt-8 md:mt-24">
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md">
              <img src={pic1} alt="Memory 1" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[3deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md">
              <img src={pic4} alt="Memory 4" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[1deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md">
              <img src={pic8} alt="Memory 8" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md mt-4 md:mt-0">
              <img src={pic11} alt="Memory 11" className="w-full h-auto object-cover rounded-sm" />
            </div>
            {/* Show pic7 & pic10 on mobile in col 1 */}
            <div className="memory-box p-2 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[-1deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative md:hidden mt-6 rounded-md">
              <img src={pic7} alt="Memory 7" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative md:hidden mt-6 rounded-md">
              <img src={pic10} alt="Memory 10" className="w-full h-auto object-cover rounded-sm" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[1deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md">
              <img src={pic2} alt="Memory 2" className="w-full h-auto object-cover rounded-sm" />
            </div>
            
            {/* Quote box in the middle */}
            <div className="memory-box bg-primary-pink/20 backdrop-blur-md p-6 md:p-10 shadow-[0_0_30px_rgba(255,105,180,0.2)] border border-accent/20 rounded-xl flex items-center justify-center text-center rotate-[-1deg] relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary-pink/10 to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
               <h4 className="text-lg md:text-2xl font-heading text-accent italic leading-relaxed font-bold drop-shadow-sm z-10 relative">
                 <Heart size={20} fill="currentColor" className="inline-block mb-2 text-accent" />
                 <br />
                 "You are my favorite thought."
               </h4>
            </div>

            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md">
              <img src={pic5} alt="Memory 5" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[3deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md">
              <img src={pic9} alt="Memory 9" className="w-full h-auto object-cover rounded-sm" />
            </div>
            
            {/* Show pic3 and 6 on mobile in col 2 */}
            <div className="memory-box p-2 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative md:hidden mt-6 rounded-md">
              <img src={pic3} alt="Memory 3" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[-3deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative md:hidden mt-6 rounded-md">
              <img src={pic6} alt="Memory 6" className="w-full h-auto object-cover rounded-sm" />
            </div>
          </div>

          {/* Column 3 (Desktop only) */}
          <div className="hidden md:flex flex-col gap-6 md:gap-12 mt-32">
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[-3deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md">
              <img src={pic3} alt="Memory 3" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[4deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative rounded-md">
              <img src={pic6} alt="Memory 6" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[1deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative mt-4 rounded-md">
              <img src={pic7} alt="Memory 7" className="w-full h-auto object-cover rounded-sm" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,182,193,0.3)] border border-primary-pink/30 rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative mt-4 rounded-md">
              <img src={pic10} alt="Memory 10" className="w-full h-auto object-cover rounded-sm" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default RoomThree;
