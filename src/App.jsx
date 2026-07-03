import React, { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import AudioPlayer from './components/AudioPlayer'
                                           
import Entrance from './sections/Entrance'
import RoomOne from './sections/RoomOne'
import RoomTwo from './sections/RoomTwo'
import RoomThree from './sections/RoomThree'
import RoomFour from './sections/RoomFour'
import RoomFive from './sections/RoomFive'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentRoom, setCurrentRoom] = useState(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const wh = window.innerHeight;
      let room = 0;
      if (scrollY > wh * 0.5) room = 1;
      if (scrollY > wh * 1.5) room = 2;
      if (scrollY > wh * 2.5) room = 3;
      if (scrollY > wh * 3.5) room = 4;
      if (scrollY > wh * 4.5) room = 5;
      setCurrentRoom(room);
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className="w-full min-h-screen cursor-none overflow-x-hidden">
      <CustomCursor />
      <AudioPlayer />
      
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && <Navigation currentRoom={currentRoom} />}
       
      <main>         
        <Entrance />
        <RoomOne />
        <RoomTwo />
        <RoomThree />
        <RoomFour />
        <RoomFive />
      </main>
    </div>
  )
}

export default App
