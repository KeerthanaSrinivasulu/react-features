import React from "react";
import "./CdSpinner.css";

const CdSpinner = ({ cover, isPlaying }) => {
  return (
    <div className="cd-spinner-container">
      <img
        src={cover}
        alt="Album Cover"
        className={`cd-spinner ${isPlaying ? "spin" : ""}`}
      />
    </div>
  );
};

export default CdSpinner;
