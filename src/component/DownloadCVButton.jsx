import React from "react";
import "../Styles.scss";
const DownloadCVButton = () => {
  return (
    <>
      <a target="_blank" href="public/Falola-Tosin's-Resume.PDF">
        <div style={{ cursor: "pointer" }} className="resume">
          View Resume
        </div>
      </a>
      <a target="_blank" href="public/Falola-Tosin's-Resume.PDF">
        <div style={{ cursor: "pointer" }} className="resumes">
          View Resume
        </div>
      </a>
    </>
  );
};

export default DownloadCVButton;
