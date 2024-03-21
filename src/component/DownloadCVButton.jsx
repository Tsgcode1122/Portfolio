import React from "react";
import "../Styles.scss";
const DownloadCVButton = () => {
  return (
    <>
      <a
        href="/Falola-Tosin's-Resume.PDF"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ cursor: "pointer" }} className="resume">
          View Resume
        </div>
      </a>
      <a
        href="/Falola-Tosin's-Resume.PDF"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ cursor: "pointer" }} className="resumes">
          View Resume
        </div>
      </a>
    </>
  );
};

export default DownloadCVButton;
