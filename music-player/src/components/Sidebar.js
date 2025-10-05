import React from "react";

const Sidebar = ({ songs, onSelect, currentIndex }) => {
  return (
    <div className="sidebar">
      <h2>🎵 Playlist</h2>
      {songs.map((song, index) => (
        <div
          key={index}
          onClick={() => onSelect(index)}
          className={`song ${index === currentIndex ? "active" : ""}`}
        >
          <p className="title">{song.title}</p>
          <p className="artist">{song.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
