import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Heart, Sparkles, Star, Music, Smile } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ScratchCard = ({ onReveal }) => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const scratchCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Fill the canvas with a cute hotpink gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#FFB6C1'); // Soft pink
      gradient.addColorStop(1, '#FF69B4'); // Hot pink
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw text
      ctx.fillStyle = '#FFFFFF'; 
      ctx.font = 'bold 16px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = "rgba(0,0,0,0.2)";
      ctx.shadowBlur = 4;
      
      const text = 'S C R A T C H   T O   R E V E A L';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [isRevealed]);

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI); 
    ctx.fill();
    
    scratchCount.current += 1;
    
    if (scratchCount.current > 120) {
      setIsRevealed(true);
      if (onReveal) onReveal();
    }
  };

  const handlePointerDown = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className={`absolute inset-0 w-full h-full z-20 cursor-crosshair touch-none transition-opacity duration-[2000ms] ease-out rounded-2xl ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    />
  );
};

const RoomFive = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".r5-title", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
      
      gsap.from(".masterpiece-box", {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        }
      });
      
      gsap.to(".floating-icon-r5", {
        y: -25,
        rotation: -15,
        duration: 4.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex flex-col items-center justify-center bg-accent px-4 py-20 relative overflow-hidden">
       
       {/* Background Decor */}
       <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-background/20 rounded-full blur-[120px] pointer-events-none"></div>
       <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-primary-pink/30 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#FFFFFF_2px,transparent_2px)] [background-size:40px_40px] pointer-events-none"></div>

       {/* Floating Cute Icons */}
      <div className="absolute top-20 left-10 md:top-32 md:left-32 text-surface/50 floating-icon-r5 z-0">
         <Heart size={48} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 right-10 md:bottom-32 md:right-32 text-primary-pink/80 floating-icon-r5 z-0">
         <Sparkles size={56} strokeWidth={1.5} />
      </div>
      <div className="absolute top-1/2 left-4 md:left-20 text-surface/40 floating-icon-r5 z-0 hidden md:block">
         <Star size={36} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute top-[20%] right-[5%] md:right-[15%] text-background/60 floating-icon-r5 z-0">
         <Smile size={42} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-1/3 left-[20%] text-primary-pink/50 floating-icon-r5 z-0 hidden md:block">
         <Music size={24} strokeWidth={1} />
      </div>

       <div className="max-w-3xl mx-auto text-center w-full relative z-10">
          <h3 className="r5-title text-sm font-body uppercase tracking-[0.2em] text-surface mb-4 flex items-center justify-center gap-2 drop-shadow-sm">
             <Heart size={14} fill="currentColor" /> Room 05
          </h3>
          <h2 className="r5-title text-4xl md:text-6xl font-heading text-surface mb-16 font-bold drop-shadow-lg">The Confession</h2>
          
          <div className="masterpiece-box w-full max-w-lg aspect-[4/3] md:aspect-video mx-auto bg-surface p-2 md:p-4 relative shadow-[0_0_60px_rgba(255,105,180,0.5)] transition-transform duration-500 hover:scale-[1.02] rounded-3xl border border-primary-pink/40">
             
             {/* The Interactive Scratch Canvas */}
             <div className="w-full h-full relative rounded-2xl overflow-hidden">
               <ScratchCard />
               
               {/* The Hidden Message Underneath */}
               <div className="absolute inset-0 bg-background flex flex-col items-center justify-center p-8 text-center border-4 border-accent/20 z-10 rounded-2xl">
                 <Heart size={40} className="text-accent mb-4 animate-bounce" fill="currentColor" />
                 
                 <h4 className="font-heading text-3xl md:text-4xl text-accent mb-6 font-bold">
                   Wawa...
                 </h4>
                 
                 <h4 className="font-heading text-2xl md:text-3xl text-text-main mb-6 font-bold">
                   I really like you.
                 </h4>
                 
                 <p className="font-heading text-xl md:text-2xl text-accent italic font-semibold">
                   Would you be my girlfriend?
                 </p>
               </div>
             </div>
             
          </div>
       </div>
    </section>
  )
}

export default RoomFive;
