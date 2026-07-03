import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
      
      // Fill the canvas with background color (matches bg-background)
      ctx.fillStyle = '#FFF8FB'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw text
      ctx.fillStyle = '#6B7280'; // matches text-muted
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Spaced text
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
    
    // This allows us to "erase" the canvas drawing
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI); // Brush size 40
    ctx.fill();
    
    scratchCount.current += 1;
    
    // When scratched enough (approx 120 moves), dissolve completely
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
      className={`absolute inset-0 w-full h-full z-20 cursor-crosshair touch-none transition-opacity duration-[2000ms] ease-out ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full flex flex-col items-center justify-center bg-text-main px-4 py-20 relative">
       <div className="max-w-3xl mx-auto text-center w-full">
          <h3 className="r5-title text-sm font-body uppercase tracking-[0.2em] text-accent mb-4">Room 05</h3>
          <h2 className="r5-title text-4xl md:text-6xl font-heading text-surface mb-16">The Confession</h2>
          
          <div className="masterpiece-box w-full max-w-lg aspect-[4/3] md:aspect-video mx-auto bg-surface p-4 relative shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
             
             {/* The Interactive Scratch Canvas */}
             <ScratchCard />
             
             {/* The Hidden Message Underneath */}
             <div className="w-full h-full bg-primary-pink flex flex-col items-center justify-center p-8 text-center border border-accent/20 relative z-10">
               <h4 className="font-heading text-3xl md:text-4xl text-text-main mb-6">
                 Wawa...
               </h4>
               
               <h4 className="font-heading text-2xl md:text-3xl text-text-main mb-6">
                 I really like you.
               </h4>
               
               <p className="font-heading text-xl md:text-2xl text-text-main italic">
                 Would you like to be more than a friend?
               </p>
             </div>
             
          </div>
       </div>
    </section>
  )
}

export default RoomFive;
