import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import "./CameraComponent.css";
import SadGirl from '../assets/sad-women.webp'

const CameraComponent = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(SadGirl);

  const captureImage = () => {
    const photo = camera.current.takePhoto();
    setImage(photo);
  };

  const downloadImage = () => {
    if (image) {
      const link = document.createElement('a');
      link.href = image;
      link.download = "captured-image.jpg";
      link.click();
    }
  };

  return (
    <div className="camera-container">
      {image ? (
        <img src={image} alt="Captured_image" className="captured-image" />
      ) : (
        <Camera ref={camera} aspectRatio={1} facingMode="user" />
      )}
      <div className="absolute-container">
        <button
          onClick={() => {
            image ? setImage(null) : captureImage();
          }}
          className="camera-button"
        >
          {image ? "Take another" : "Take photo"}
        </button>

        {image && (
          <button onClick={downloadImage} className="download-button">
            Proceed
          </button>
        )}
      </div>
    </div>
  );
};

export default CameraComponent;
