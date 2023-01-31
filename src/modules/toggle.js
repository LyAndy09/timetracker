import React, { useState, useEffect } from "react";

const LightModeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
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