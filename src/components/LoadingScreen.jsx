import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 800) // Wait a bit before unmounting
          return 100
        }
        return prev + 1.5
      })
    }, 40)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Background soft glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary-pink/20 rounded-full blur-[100px]"></div>

      {/* Central Beating Heart Animation */}
      <motion.div 
        className="mb-8 text-accent drop-shadow-[0_0_20px_rgba(255,105,180,0.5)]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={64} fill="currentColor" strokeWidth={1} />
      </motion.div>

      <div className="font-heading text-2xl md:text-4xl text-accent mb-8 tracking-[0.2em] text-center font-bold relative z-10 drop-shadow-sm">
        THE ART GALLERY<br/>OF YOU
      </div>
      
      <div className="w-64 max-w-[80vw] h-[3px] bg-primary-pink/30 relative overflow-hidden rounded-full shadow-[0_0_10px_rgba(255,182,193,0.5)]">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-accent rounded-full shadow-[0_0_15px_rgba(255,105,180,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-6 text-[10px] md:text-xs font-body uppercase tracking-[0.3em] text-accent/80 font-bold">
        {Math.floor(progress)}% — Sketching memories
      </div>

      {/* Floating mini hearts around */}
      <motion.div 
        className="absolute bottom-20 left-10 md:left-40 text-primary-pink/80"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={32} fill="currentColor" strokeWidth={1.5} />
      </motion.div>

      <motion.div 
        className="absolute top-20 right-10 md:right-40 text-accent/60"
        animate={{ y: [0, 40, 0], opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Heart size={40} fill="currentColor" strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 text-pink-400/50"
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.3, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Heart size={24} fill="currentColor" strokeWidth={1} />
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
