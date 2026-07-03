import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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

gsap.registerPlugin(ScrollTrigger);

const RoomThree = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax effect for memory images
      gsap.utils.toArray('.memory-box').forEach((box, i) => {
        // Different speed/direction based on index
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex flex-col items-center justify-center bg-background px-4 py-32 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-20 r3-title relative z-10">
          <h3 className="text-sm font-body uppercase tracking-[0.2em] text-accent mb-4">Room 03</h3>
          <h2 className="text-4xl md:text-5xl font-heading text-text-main mb-6">Inspiration</h2>
          <p className="text-secondary-text font-body italic text-sm md:text-base max-w-xl mx-auto">
            "Your smile lights up the darkest rooms, and every moment feels like poetry."
          </p>
        </div>
        
        {/* Gallery Grid - Scattered Masonry Look */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 relative">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-12 mt-8 md:mt-24">
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative">
              <img src={pic1} alt="Memory 1" className="w-full h-auto object-cover" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[3deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative">
              <img src={pic4} alt="Memory 4" className="w-full h-auto object-cover" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[1deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative">
              <img src={pic8} alt="Memory 8" className="w-full h-auto object-cover" />
            </div>
            {/* Show pic7 & pic10 on mobile in col 1 */}
            <div className="memory-box p-2 bg-surface shadow-lg border border-secondary-text/10 rotate-[-1deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative md:hidden mt-6">
              <img src={pic7} alt="Memory 7" className="w-full h-auto object-cover" />
            </div>
            <div className="memory-box p-2 bg-surface shadow-lg border border-secondary-text/10 rotate-[2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative md:hidden mt-6">
              <img src={pic10} alt="Memory 10" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[1deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative">
              <img src={pic2} alt="Memory 2" className="w-full h-auto object-cover" />
            </div>
            
            {/* Quote box in the middle */}
            <div className="memory-box bg-primary-pink p-6 md:p-10 shadow-sm flex items-center justify-center text-center rotate-[-1deg]">
               <h4 className="text-lg md:text-2xl font-heading text-text-main italic leading-relaxed">
                 "You are my favorite thought."
               </h4>
            </div>

            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative">
              <img src={pic5} alt="Memory 5" className="w-full h-auto object-cover" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[3deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative">
              <img src={pic9} alt="Memory 9" className="w-full h-auto object-cover" />
            </div>
            
            {/* Show pic3 and 6 on mobile in col 2 */}
            <div className="memory-box p-2 bg-surface shadow-lg border border-secondary-text/10 rotate-[2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative md:hidden mt-6">
              <img src={pic3} alt="Memory 3" className="w-full h-auto object-cover" />
            </div>
            <div className="memory-box p-2 bg-surface shadow-lg border border-secondary-text/10 rotate-[-3deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative md:hidden mt-6">
              <img src={pic6} alt="Memory 6" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Column 3 (Desktop only) */}
          <div className="hidden md:flex flex-col gap-6 md:gap-12 mt-32">
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[-3deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative">
              <img src={pic3} alt="Memory 3" className="w-full h-auto object-cover" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[4deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative">
              <img src={pic6} alt="Memory 6" className="w-full h-auto object-cover" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[1deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative mt-4">
              <img src={pic7} alt="Memory 7" className="w-full h-auto object-cover" />
            </div>
            <div className="memory-box p-2 md:p-3 bg-surface shadow-lg border border-secondary-text/10 rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 hover:z-20 duration-500 relative mt-4">
              <img src={pic10} alt="Memory 10" className="w-full h-auto object-cover" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default RoomThree;
