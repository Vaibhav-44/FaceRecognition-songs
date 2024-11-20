import React from "react";
import Webcam from "react-webcam";
import "./WebcamComponent.css";

export default function WebcamComponent() {
  return (
    <div className="webcam-container">
      <Webcam width={"100%"} height={"100%"} />
    </div>
  );
}
