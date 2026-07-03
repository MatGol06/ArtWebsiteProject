import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Heart, Sparkles, Star, Feather, Flower2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RoomFour = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".letter-content p", {
        opacity: 0,
        y: 20,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".letter-box",
          start: "top 60%",
        }
      });
      
      gsap.from(".letter-box", {
        opacity: 0,
        scale: 0.98,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
      
      gsap.to(".floating-icon-r4", {
        y: -15,
        rotation: 10,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.6
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex items-center justify-center bg-surface px-4 py-24 relative border-t border-primary-pink/20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary-pink/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FF69B4_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none"></div>

      {/* Floating Cute Icons */}
      <div className="absolute top-20 left-10 md:top-32 md:left-32 text-accent/40 floating-icon-r4 z-0">
         <Feather size={48} strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 right-10 md:bottom-32 md:right-32 text-primary-pink floating-icon-r4 z-0">
         <Flower2 size={56} strokeWidth={1.5} />
      </div>
      <div className="absolute top-1/2 left-4 md:left-20 text-accent/30 floating-icon-r4 z-0 hidden md:block">
         <Heart size={36} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute top-[20%] right-[5%] md:right-[15%] text-pink-400 floating-icon-r4 z-0">
         <Sparkles size={42} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-1/3 left-[20%] text-accent/20 floating-icon-r4 z-0 hidden md:block">
         <Star size={24} fill="currentColor" strokeWidth={1} />
      </div>

      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        <h3 className="text-sm font-body uppercase tracking-[0.2em] text-accent mb-12 flex items-center justify-center gap-2">
           <Heart size={14} fill="currentColor" /> Room 04
        </h3>
        
        <div className="letter-box bg-background shadow-[0_0_50px_rgba(255,182,193,0.4)] p-8 md:p-16 relative max-w-3xl mx-auto rounded-2xl border border-primary-pink/40 backdrop-blur-sm">
          <div className="absolute top-0 bottom-0 left-4 md:left-8 border-l-2 border-dashed border-accent/30"></div>
          
          <h2 className="text-2xl md:text-3xl font-heading text-accent mb-12 text-left pl-6 md:pl-10 font-bold flex items-center gap-3">
             <Heart size={24} fill="currentColor" className="text-accent" /> A Digital Sketchbook
          </h2>
          
          <div className="letter-content font-heading text-lg md:text-xl leading-relaxed md:leading-loose text-text-main text-left pl-6 md:pl-10 space-y-6">
            <p className="font-bold text-accent">Dear Wawa,</p>
            <p>You came into my life unexpectedly at a time when I had almost lost my trust in love. It was one of the lowest points in my life, where I believed I would never open my heart again.</p>
            <p>Then I met you.</p>
            <p>Without even realizing it, you gave me a reason to become a better person. You made me want to grow, to improve myself, and to become a better man than I was yesterday.</p>
            <p>You always tell me that I'm special, but honestly, I still see myself as just an ordinary guy. Yet somehow, whenever I'm with you, you make me feel like I can be someone better. Someone stronger. Someone worth believing in.</p>
            <p>For that, I'll always be grateful.</p>
            <p className="font-bold">Today, this ordinary guy wants to tell you something I've been keeping in my heart.</p>
            <p className="text-2xl text-accent font-bold">I like you, Wawa.</p>
            <p className="text-accent italic">More than just a friend.</p>
            <p>I'm not asking you to answer me today, and I don't want you to feel pressured. Take all the time you need. I simply wanted to be honest about how I feel.</p>
            <p>No matter what your answer may be, thank you for coming into my life and reminding me that there are still beautiful people in this world.</p>
            <p>And if one day you choose to walk beside me, I promise I'll treasure every step of our journey together.</p>
            <p className="italic text-secondary-text mt-8">— From an ordinary guy who found something extraordinary in you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomFour;
