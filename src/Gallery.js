import React from "react";
import "./App.css";

function Gallery({ src }) {
  return (
    <div classname="gallery">
      <img src={src} alt="flex-gallery" className="gallery__image" />
    </div>
  );
}

export default Gallery;
