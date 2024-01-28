import React from "react";
import "../Styles.scss";
const DownloadCVButton = () => {
  const downloadCV = () => {
    const pdfURL = "src/cv/FALOLA-TOSIN's RESUME.pdf";

    const link = document.createElement("a");

    link.href = pdfURL;

    link.setAttribute("download", "Falola Tosin's Resume.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <>
      <div
        onClick={downloadCV}
        style={{ cursor: "pointer" }}
        className="resume"
      >
        Download Resume
      </div>
      <div
        onClick={downloadCV}
        style={{ cursor: "pointer" }}
        className="resumes"
      >
        Download Resume
      </div>
    </>
  );
};

export default DownloadCVButton;
