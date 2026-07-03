import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex items-center justify-center bg-surface px-4 py-24 relative border-t border-secondary-text/10">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h3 className="text-sm font-body uppercase tracking-[0.2em] text-accent mb-12">Room 04</h3>
        
        <div className="letter-box bg-background shadow-xl p-8 md:p-16 relative max-w-3xl mx-auto">
          <div className="absolute top-0 bottom-0 left-4 md:left-8 border-l border-accent/20"></div>
          
          <h2 className="text-2xl md:text-3xl font-heading text-text-main mb-12 text-left pl-6 md:pl-10">A Digital Sketchbook</h2>
          
          <div className="letter-content font-heading text-lg md:text-xl leading-relaxed md:leading-loose text-text-main text-left pl-6 md:pl-10 space-y-6">
            <p className="font-bold">Dear Wawa,</p>
            <p>You came into my life unexpectedly at a time when I had almost lost my trust in love. It was one of the lowest points in my life, where I believed I would never open my heart again.</p>
            <p>Then I met you.</p>
            <p>Without even realizing it, you gave me a reason to become a better person. You made me want to grow, to improve myself, and to become a better man than I was yesterday.</p>
            <p>You always tell me that I'm special, but honestly, I still see myself as just an ordinary guy. Yet somehow, whenever I'm with you, you make me feel like I can be someone better. Someone stronger. Someone worth believing in.</p>
            <p>For that, I'll always be grateful.</p>
            <p>Today, this ordinary guy wants to tell you something I've been keeping in my heart.</p>
            <p>I like you, Wawa.</p>
            <p>More than just a friend.</p>
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
