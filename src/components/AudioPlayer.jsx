import React, { useState, useRef, useEffect } from 'react';
import config from '../config';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = config.music.volume || 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Playback blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  if (!config.music.enabled) return null;

  return (
    <div className="audio-player-container">
      <audio 
        ref={audioRef} 
        src={config.music.url} 
        loop={config.music.loop} 
      />
      <button 
        className={`pause-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={togglePlay}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <span className="icon">{isPlaying ? "♫" : "🔇"}</span>
      </button>

      <style jsx>{`
        .audio-player-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        .pause-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .pause-btn:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.3);
        }
        .pause-btn.playing {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
