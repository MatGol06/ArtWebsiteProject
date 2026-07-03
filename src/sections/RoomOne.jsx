import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import loveVideo from '../assets/emojis-love.mp4';
import { Palette, PencilLine, Heart, Sparkles, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RoomOne = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".sketch-box", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
      
      gsap.to(".floating-icon", {
        y: -20,
        rotation: 10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex items-center justify-center bg-surface px-4 py-20 relative overflow-hidden">
      
      {/* Background Decorative Pattern & Blobs */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#2D2D2D_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      
      {/* Pink Blobs for cuteness */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary-pink/30 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[60px] pointer-events-none"></div>

      {/* Floating Icons */}
      <div className="absolute top-10 left-10 md:top-32 md:left-24 text-accent/40 floating-icon">
         <PencilLine size={48} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-10 right-10 md:bottom-32 md:right-24 text-primary-pink floating-icon">
         <Palette size={64} strokeWidth={1.5} />
      </div>
      <div className="absolute top-20 right-20 md:top-40 md:right-32 text-accent/30 floating-icon">
         <Heart size={36} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 left-20 md:bottom-40 md:left-32 text-pink-400 floating-icon">
         <Sparkles size={42} strokeWidth={1.5} />
      </div>
      <div className="absolute top-1/2 left-4 md:left-12 text-primary-pink/50 floating-icon">
         <Star size={24} fill="currentColor" strokeWidth={1} />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
        <div className="flex-1 w-full aspect-[4/5] border border-primary-pink/30 p-4 sketch-box bg-white/50 backdrop-blur-sm shadow-[0_0_30px_rgba(248,187,217,0.3)] rounded-lg relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent/60 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent/60 rounded-br-lg"></div>
          
          <div className="w-full h-full border border-primary-pink/30 rounded-md flex items-center justify-center bg-background/80 relative overflow-hidden group">
            <div className="relative w-full h-full flex items-center justify-center">
              <video 
                src={loveVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-48 h-48 md:w-64 md:h-64 object-contain scale-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="reveal-text text-sm font-body uppercase tracking-[0.2em] text-accent mb-4 font-bold flex items-center gap-2">
            <Heart size={14} className="text-accent" fill="currentColor" /> Room 01
          </h3>
          <h2 className="reveal-text text-4xl md:text-6xl font-heading text-text-main mb-6 relative">
            <span className="relative z-10 font-bold">The First Sketch</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-2 bg-primary-pink -z-10 rounded-full"></span>
          </h2>
          <p className="reveal-text text-secondary-text text-lg leading-relaxed font-body">
            Every masterpiece begins with a single line. A rough idea, a sudden inspiration. 
            This is where our story began simple, quiet, yet filled with endless potential.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RoomOne;
