import Timer from "./modules/Timer";
import SideMenu from "./modules/sidemenu"
import LoginMenu from "./modules/Login"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className = "overlayButtons">
        <SideMenu />
        <LoginMenu />
      </div>
      <main className="main-content">
        <Timer />
      </main>
    </div>
  );
}

export default App;