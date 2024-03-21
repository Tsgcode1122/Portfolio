import React from "react";
import "../Styles.scss";
const DownloadCVButton = () => {
  return (
    <>
      <a
        target="_blank"
        href="/Falola-Tosin's-Resume.PDF"
        type="application/pdf"
      >
        <div style={{ cursor: "pointer" }} className="resume">
          View Resume
        </div>
      </a>
      <a
        target="_blank"
        href="/Falola-Tosin's-Resume.PDF"
        type="application/pdf"
      >
        <div style={{ cursor: "pointer" }} className="resumes">
          View Resume
        </div>
      </a>
    </>
  );
};

export default DownloadCVButton;
