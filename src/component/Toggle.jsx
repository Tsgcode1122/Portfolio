import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../toggle.scss";

const Toggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`toggle-container ${isDarkMode ? "dark" : ""}`}
      onClick={toggleDarkMode}
    >
      <div className="toggle-circle">
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          style={{ color: white }}
        />
      </div>
    </div>
  );
};

export default Toggle;
