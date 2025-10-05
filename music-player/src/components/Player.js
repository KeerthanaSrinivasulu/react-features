import React, { useEffect, useState } from "react";

const Player = ({ currentSong, onNext, onPrev, isPlaying, setIsPlaying, audioRef }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(err => console.error("Playback error:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong, audioRef]);

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration || 0;
    setCurrentTime(current);
    setDuration(total);
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  // Format seconds → mm:ss
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  // 🔥 New: seek when user clicks progress bar
  const handleSeek = (e) => {
    const bar = e.target.getBoundingClientRect();
    const clickX = e.clientX - bar.left;
    const width = bar.width;
    const seekTime = (clickX / width) * duration;
    audioRef.current.currentTime = seekTime;
  };

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={onNext}
      />

      <div className="controls">
        <button onClick={onPrev}>⏮</button>
        <button onClick={playPauseHandler}>
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={onNext}>⏭</button>
      </div>

      {/* Progress bar wrapper */}
      <div className="progress-bar" onClick={handleSeek}>
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* ⏱ Timer */}
      <div className="timer">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <p>{currentSong.title} - {currentSong.artist}</p>
    </div>
  );
};

export default Player;
