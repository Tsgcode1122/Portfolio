import React from "react";
import "../Styles.scss";
const DownloadCVButton = () => {
  return (
    <>
      <a
        target="_blank"
        // href="https://drive.google.com/file/d/1UJE0vzPOepSFCGFMbkdwdL33j_y4VZEq/view?usp=sharing"
        href=""
        type="application/pdf"
      >
        <div style={{ cursor: "pointer" }} className="resume">
          View Resume
        </div>
      </a>
      <a target="_blank" href="" type="application/pdf">
        <div style={{ cursor: "pointer" }} className="resumes">
          View Resume
        </div>
      </a>
    </>
  );
};

export default DownloadCVButton;
