import React, { useState, useRef } from "react";
import songs from "./data";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Main from "./components/Main";
import CdSpinner from "./components/CdSpinner";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const currentSong = songs[currentIndex];

  console.log("Playing status:", isPlaying);

  return (
    <div className="app">
      {/* Sidebar Playlist */}
      <Sidebar
        songs={songs}
        onSelect={handleSelect}
        currentIndex={currentIndex}
      />

      {/* Main Content */}
      <Main currentSong={currentSong} />

      {/* 🎵 Spinning CD always on top */}
      <CdSpinner cover={currentSong.cover} isPlaying={isPlaying} />

      {/* Player Controls */}
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* Hidden audio element */}
      <audio ref={audioRef} src={currentSong.src}></audio>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div>
//       <h1>Hello, Music Player!</h1>
//     </div>
//   );
// }

// export default App;

