import React, { useState, useEffect } from "react";

const LightModeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(JSON.parse(localStorage.getItem("isLightMode")) || false
  );

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
    localStorage.setItem("isLightMode", JSON.stringify(!isLightMode));
  };

  useEffect(() => {
    document.body.className = isLightMode ? "light-mode" : "dark-mode";
  }, [isLightMode]);

  return (
    <button onClick={toggleLightMode}>
      {isLightMode ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default LightModeToggle;