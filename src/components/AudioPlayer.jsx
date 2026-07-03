import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import song3 from '../assets/song3.mp3';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  // Keep track of manual pauses so it doesn't accidentally resume if the user wanted it silent
  const isForcedPause = useRef(false);

  const START_TIME_IN_SECONDS = 18; 

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      isForcedPause.current = true;
    } else {
      audioRef.current.play().catch(e => console.log('Audio play error:', e));
      isForcedPause.current = false;
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Attempt autoplay on first user interaction (browser restriction workaround)
    const handleFirstInteraction = () => {
      if (!isPlaying && !isForcedPause.current && audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log('Autoplay prevented by browser:', e));
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);

    // Custom events triggered by RoomTwo
    const handlePauseMusic = () => {
       if (audioRef.current && isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
       }
    };

    const handleResumeMusic = () => {
       if (audioRef.current && !isForcedPause.current) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(e => console.log('Resume error:', e));
       }
    };

    window.addEventListener('pauseBackgroundMusic', handlePauseMusic);
    window.addEventListener('resumeBackgroundMusic', handleResumeMusic);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('pauseBackgroundMusic', handlePauseMusic);
      window.removeEventListener('resumeBackgroundMusic', handleResumeMusic);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50 mix-blend-difference text-white">
      {/* 
        Sila pastikan anda meletakkan fail audio (contoh: ambient.mp3) 
        di dalam folder `public` projek ini.
      */}
      <audio 
        ref={audioRef} 
        src={song3} 
        loop 
        preload="auto"
        onLoadedMetadata={(e) => {
          e.target.currentTime = 18;
        }}
      />
      <button 
        onClick={togglePlay} 
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label="Toggle Music"
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </div>
  );
}

export default AudioPlayer;
