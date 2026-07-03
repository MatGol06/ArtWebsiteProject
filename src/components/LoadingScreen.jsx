import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="font-heading text-2xl md:text-4xl text-text-main mb-8 tracking-[0.2em] text-center">
        THE ART GALLERY<br/>OF YOU
      </div>
      
      <div className="w-64 max-w-[80vw] h-[1px] bg-secondary-text/20 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-accent"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-6 text-[10px] md:text-xs font-body uppercase tracking-[0.3em] text-secondary-text">
        {Math.floor(progress)}% — Sketching memories
      </div>
    </motion.div>
  )
}

export default LoadingScreen
