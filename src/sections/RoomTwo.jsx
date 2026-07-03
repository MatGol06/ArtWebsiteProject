import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Sun, Shield, Feather } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RoomTwo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".color-box", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".grid",
          start: "top 75%",
        }
      });
      
      gsap.from(".header-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-primary-pink px-4 py-20 relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-background/50 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h3 className="header-text text-sm font-body uppercase tracking-[0.2em] text-surface mb-4">Room 02</h3>
        <h2 className="header-text text-4xl md:text-6xl font-heading text-text-main mb-6">The Colors</h2>
        <p className="header-text text-text-main/80 leading-relaxed font-body max-w-xl mx-auto">
          Then came the colors. Qualities that made the canvas vibrant and alive, filling the negative space with meaning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl relative z-10">
        {[
          { title: "Kindness", desc: "Warm and gentle like the morning sun.", icon: <Sun size={36} strokeWidth={1.5} /> },
          { title: "Resilience", desc: "Strong strokes that weather any storm.", icon: <Shield size={36} strokeWidth={1.5} /> },
          { title: "Grace", desc: "Effortless beauty in every single movement.", icon: <Feather size={36} strokeWidth={1.5} /> }
        ].map((item, idx) => (
          <div key={idx} className="color-box bg-surface/90 backdrop-blur-sm p-10 rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-3 text-center group border border-surface hover:border-accent/30 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-pink/30 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors duration-500"></div>
            
            <div className="text-accent/60 mb-6 flex justify-center group-hover:scale-110 group-hover:text-accent transition-all duration-500 relative z-10">
               {item.icon}
            </div>
            <h4 className="font-heading text-2xl text-accent mb-4 relative z-10">{item.title}</h4>
            <p className="font-body text-secondary-text text-sm leading-relaxed relative z-10">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RoomTwo;
