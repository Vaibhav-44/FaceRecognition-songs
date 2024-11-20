import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import axios from "axios"; // If you're using axios for HTTP requests
import "./CameraComponent.css";
import SadGirl from "../assets/sad-women.webp";

const CameraComponent = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(SadGirl);

  // Function to capture the image
  const captureImage = () => {
    const photo = camera.current.takePhoto();
    setImage(photo);
  };

  // Function to handle submitting the captured image to the backend
  const submitHandler = async () => {
    if (image) {
      try {
        // Send the image to the backend
        const formData = new FormData();
        formData.append("image", image); // Append image as form data

        // Send a POST request to the backend (e.g., /upload endpoint)
        const response = await axios.post("http://localhost:8000/song-list", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // This is important for file uploads
          },
        });

        console.log("Image uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  // Function to download the image locally
  const downloadImage = () => {
    if (image) {
      const link = document.createElement("a");
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
            Download
          </button>
        )}

        {image && (
          <button onClick={submitHandler} className="submit-button">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default CameraComponent;
