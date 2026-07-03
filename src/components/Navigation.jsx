import React from 'react'
import { motion } from 'framer-motion'

const Navigation = ({ currentRoom = 1 }) => {
  return (
    <motion.header 
      className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 mix-blend-difference text-white pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-heading tracking-widest">The Art Gallery of You</h1>
        <span className="text-[10px] md:text-xs font-body tracking-[0.2em] uppercase mt-2 opacity-70">
          An Interactive Exhibition
        </span>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4">
        <span className="text-[10px] md:text-xs font-body tracking-[0.2em] uppercase">Exhibit</span>
        <span className="text-xl md:text-2xl font-heading">0{currentRoom}</span>
      </div>
    </motion.header>
  )
}

export default Navigation
