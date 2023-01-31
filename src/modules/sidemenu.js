import React, { useState } from "react";
import LightModeToggle from "./toggle";
function SideMenu() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleShowOverlay = () => {
    setShowOverlay((showOverlay) => !showOverlay);
  };

  return (
    <div>
      <button onClick={handleShowOverlay} className="menu-button">
        Menu
      </button>
      {showOverlay && (
        <div className="overlay">
          <button onClick={handleShowOverlay} className="close-button">
            Close
          </button>
          <aside className="side-menu">
            <h1>Features</h1>
            <nav>
              <ul>
                <li>
                  <LightModeToggle />
                </li>
                <li>
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <a href="#">Search</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}

export default SideMenu;