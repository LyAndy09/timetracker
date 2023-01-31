import React, { useState } from "react";

function LoginMenu() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleShowOverlay = () => {
    setShowOverlay((showOverlay) => !showOverlay);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
  };
  return (
    <div className = "login-menu">
      <button onClick={handleShowOverlay} className="login-button">
        Login
      </button>
      {showOverlay && (
        <div className="loginOverlay">
            <button onClick={handleShowOverlay} className="close-login-button">
            Close
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginMenu;