import React from "react";

const Main = ({ currentSong }) => {
  return (
    <div className="main">
      <h1>Now Playing: {currentSong.title}</h1>
      <img
        src={currentSong.cover}
        alt="album cover"
        className="album-cover"
      />
      <p>{currentSong.artist}</p>
    </div>
  );
};

export default Main;
