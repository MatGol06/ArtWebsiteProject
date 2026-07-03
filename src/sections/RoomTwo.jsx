import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Music, Play, Pause, Disc, Heart, Sparkles, Star } from 'lucide-react';
import song2 from '../assets/song2.mp3';
import picLabel from '../assets/pic4.png'; 

gsap.registerPlugin(ScrollTrigger);

const RoomTwo = () => {
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      window.dispatchEvent(new Event('resumeBackgroundMusic'));
    } else {
      audioRef.current.play();
      window.dispatchEvent(new Event('pauseBackgroundMusic'));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".vinyl-container", {
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
      
      gsap.from(".playlist-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
      
      gsap.to(".floating-icon-r2", {
        y: -20,
        rotation: 15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, containerRef);

    // Sync visualizer
    let animationFrame;
    const animateVisualizer = () => {
      if (isPlaying) {
        const bars = document.querySelectorAll('.audio-bar');
        bars.forEach(bar => {
          bar.style.height = `${Math.max(20, Math.random() * 100)}%`;
        });
      }
      animationFrame = requestAnimationFrame(animateVisualizer);
    };

    if (isPlaying) {
      animateVisualizer();
    } else {
      const bars = document.querySelectorAll('.audio-bar');
      bars.forEach(bar => {
        bar.style.height = '20%';
      });
    }

    return () => {
      ctx.revert();
      cancelAnimationFrame(animationFrame);
    };
  }, [isPlaying]);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-background px-4 py-20 relative flex flex-col items-center justify-center overflow-hidden border-t border-primary-pink/10">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-pink/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#FF69B4_25%,transparent_25%,transparent_50%,#FF69B4_50%,#FF69B4_75%,transparent_75%,transparent)] [background-size:20px_20px] pointer-events-none"></div>

      {/* Floating Cute Icons */}
      <div className="absolute top-20 left-10 md:top-32 md:left-24 text-accent/50 floating-icon-r2 z-0 hidden md:block">
         <Music size={48} strokeWidth={1} />
      </div>
      <div className="absolute top-40 right-20 md:top-40 md:right-32 text-accent/40 floating-icon-r2 z-0">
         <Sparkles size={36} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-40 left-20 md:bottom-40 md:left-32 text-accent/60 floating-icon-r2 z-0 hidden md:block">
         <Star size={42} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 right-20 md:bottom-20 md:right-40 text-primary-pink/80 floating-icon-r2 z-0">
         <Heart size={32} fill="currentColor" strokeWidth={1.5} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* The Vinyl Record */}
        <div className="vinyl-container flex-1 flex justify-center items-center relative w-full max-w-sm md:max-w-md">
           <div className={`relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full bg-[#111] shadow-[0_20px_50px_rgba(255,105,180,0.3)] flex items-center justify-center border-4 border-[#222] ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
             
             {/* Record Grooves */}
             <div className="absolute inset-[10px] rounded-full border border-white/5"></div>
             <div className="absolute inset-[25px] rounded-full border border-white/5"></div>
             <div className="absolute inset-[40px] rounded-full border border-white/5"></div>
             <div className="absolute inset-[55px] rounded-full border border-white/5"></div>
             <div className="absolute inset-[70px] rounded-full border border-white/5"></div>
             <div className="absolute inset-[85px] rounded-full border border-white/5"></div>
             
             {/* Center Label */}
             <div className="relative w-[35%] h-[35%] rounded-full overflow-hidden border-4 border-primary-pink z-10 bg-primary-pink/20">
               <img src={picLabel} alt="Wawa" className="w-full h-full object-cover opacity-90" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-5 h-5 bg-background rounded-full border-2 border-zinc-300 shadow-inner"></div>
               </div>
             </div>

             {/* Vinyl Reflection (Shine) */}
             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-full"></div>
             <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
           </div>

           {/* Stylus / Tonearm */}
           <div className={`absolute -top-4 right-2 md:right-8 w-10 h-40 md:h-56 origin-top transition-transform duration-700 ease-in-out z-20 ${isPlaying ? 'rotate-[25deg]' : '-rotate-[15deg]'}`}>
              {/* Pivot */}
              <div className="w-8 h-8 bg-zinc-300 rounded-full shadow-lg mx-auto relative z-10 border-2 border-zinc-400">
                 <div className="w-3 h-3 bg-zinc-500 rounded-full absolute inset-0 m-auto"></div>
              </div>
              {/* Arm */}
              <div className="w-2 h-full bg-gradient-to-r from-zinc-300 to-zinc-400 mx-auto -mt-4 shadow-xl"></div>
              {/* Head */}
              <div className="w-8 h-14 bg-zinc-700 rounded-sm mx-auto -mt-2 shadow-2xl relative">
                 <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-zinc-400"></div>
              </div>
           </div>
        </div>

        {/* Playlist Content */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left mt-8 md:mt-0">
          <h3 className="playlist-text text-sm font-body uppercase tracking-[0.2em] text-accent mb-4 flex items-center justify-center md:justify-start gap-2">
             <Music size={14} /> Room 02
          </h3>
          <h2 className="playlist-text text-4xl md:text-6xl font-heading text-text-main mb-6 relative inline-block">
             <span className="relative z-10 font-bold">The Soundtrack</span>
             <span className="absolute -bottom-2 left-0 w-1/3 h-3 bg-primary-pink/50 -z-10 rounded-full"></span>
          </h2>
          <p className="playlist-text text-secondary-text leading-relaxed font-body text-lg mb-10 max-w-lg mx-auto md:mx-0">
            There are melodies that, when heard, seem to stop time entirely. This song never fails to remind me of you.
          </p>

          <div className="playlist-text bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-primary-pink/30 shadow-[0_10px_40px_rgba(255,182,193,0.4)] w-full max-w-md mx-auto md:mx-0 relative group">
             
             {/* Glowing back for music player */}
             <div className="absolute inset-0 bg-primary-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

             <div className="flex items-center gap-5 mb-6 relative z-10">
                <div className={`w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent shadow-inner transition-transform duration-500 ${isPlaying ? 'scale-105 bg-accent/20' : ''}`}>
                   <Disc size={32} className={isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''} />
                </div>
                <div className="text-left flex-1 overflow-hidden">
                   <h4 className="font-heading text-xl text-text-main font-bold truncate">The Song</h4>
                   <p className="font-body text-sm text-accent font-medium mt-1 truncate">
                     {isPlaying ? 'Now Playing...' : 'Press Play'}
                   </p>
                </div>
             </div>
             
             {/* Audio Visualizer Waves (Fake) */}
             <div className="flex items-end gap-1.5 h-12 mb-8 justify-center md:justify-start px-2 relative z-10 w-full overflow-hidden">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i} 
                    className="audio-bar w-2 bg-accent/60 rounded-t-sm transition-all duration-75"
                    style={{ height: '20%' }}
                  ></div>
                ))}
             </div>

             <audio ref={audioRef} src={song2} loop />

             <div className="flex items-center justify-center gap-6 relative z-10">
                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 bg-accent hover:bg-accent/90 text-white rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(255,105,180,0.4)] transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1.5" />}
                </button>
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default RoomTwo;
