import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, Flower2, Music, Smile } from 'lucide-react';

const Entrance = () => {
  // Helper for generating random float animations
  const floatAnim = (yDist, duration) => ({
    y: [0, -yDist, 0],
    rotate: [0, 15, -10, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  });

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-pink/50 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute top-[40%] left-[50%] w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
      
      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <h1 className="text-[25vw] md:text-[20vw] font-heading font-bold text-accent">WAWA</h1>
      </div>

      {/* Floating Cute Arts (Pink) */}
      <motion.div className="absolute top-[15%] left-[10%] md:left-[20%] text-primary-pink" animate={floatAnim(30, 4)}>
        <Heart size={40} fill="currentColor" strokeWidth={1} />
      </motion.div>

      <motion.div className="absolute top-[25%] right-[15%] md:right-[25%] text-accent" animate={floatAnim(40, 5)}>
        <Star size={36} fill="currentColor" strokeWidth={1} />
      </motion.div>

      <motion.div className="absolute bottom-[35%] left-[15%] md:left-[22%] text-pink-400" animate={floatAnim(25, 6)}>
        <Flower2 size={48} strokeWidth={1.5} />
      </motion.div>

      <motion.div className="absolute bottom-[25%] right-[20%] md:right-[28%] text-primary-pink" animate={floatAnim(35, 4.5)}>
        <Sparkles size={50} strokeWidth={1.5} />
      </motion.div>

      <motion.div className="absolute top-[45%] left-[5%] md:left-[10%] text-accent/60" animate={floatAnim(50, 7)}>
        <Music size={32} strokeWidth={1.5} />
      </motion.div>

      <motion.div className="absolute top-[10%] right-[10%] md:right-[15%] text-pink-300" animate={floatAnim(20, 5.5)}>
        <Heart size={28} strokeWidth={2} />
      </motion.div>

      <motion.div className="absolute bottom-[15%] left-[30%] md:left-[35%] text-accent" animate={floatAnim(30, 5)}>
        <Smile size={32} strokeWidth={1.5} />
      </motion.div>

      {/* Main Content Title */}
      <motion.div 
        className="text-center max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-7xl text-accent mb-6 font-heading font-bold drop-shadow-sm">The Gallery</h2>
        <p className="text-text-main font-body tracking-[0.3em] uppercase text-xs md:text-sm leading-relaxed font-semibold">
          An exhibition of unspoken thoughts.
        </p>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-12 flex flex-col items-center opacity-80 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <span className="text-accent font-body text-[10px] tracking-widest uppercase mb-4 animate-pulse font-bold drop-shadow-sm">
          Scroll to enter
        </span>
        <div className="w-[2px] h-12 bg-accent origin-top animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      </motion.div>
    </section>
  )
}

export default Entrance;
