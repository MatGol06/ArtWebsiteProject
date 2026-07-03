import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play error:', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 mix-blend-difference text-white">
      {/* 
        Sila pastikan anda meletakkan fail audio (contoh: ambient.mp3) 
        di dalam folder `public` projek ini.
      */}
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=ambient-piano-amp-strings-10711.mp3" 
        loop 
        preload="auto"
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
