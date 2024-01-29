import React from "react";
import "../Styles.scss";
const DownloadCVButton = () => {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/1PN2_fhzXQU9OKteDuaQiF0CqTd0d_Yle/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ cursor: "pointer" }} className="resume">
          View Resume
        </div>
      </a>
      <a
        href="https://drive.google.com/file/d/1PN2_fhzXQU9OKteDuaQiF0CqTd0d_Yle/view?usp=drivesdk"
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
