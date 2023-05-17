import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

export default function WebcamComponent({ onCaptureImage }) {
  return (
    <Webcam
      audio={false}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
      style={{ width: "100%", height: "auto" }} // Adjust the height and width as needed
    >
      {({ getScreenshot }) => (
        <button
          style={{
            backgroundColor: "#2169fb",
            border: "2px solid",
            borderRadius: "3px",
            padding: "10px 20px 8px 20px",
            height: "min-content",
            // margin: 10px;
            cursor: "pointer",
            color: "#ffffff",
            transitionDuration: "0.4s"
          }}
          onClick={() => {
            const imageSrc = getScreenshot();
            onCaptureImage(imageSrc);
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
  );
}
