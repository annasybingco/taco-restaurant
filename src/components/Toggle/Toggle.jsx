import { useState } from "react";
import "../Toggle/Toggle.scss";
import { useThemeUpdate } from "../../Context/ThemeContext";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const toggleTheme = useThemeUpdate();
  return (
    <div className="toggle">
      <h4>{toggle ? "Light Mode" : "Dark Mode"}</h4>
      <button
        className={`toggle-btn ${toggle ? "toggle" : ""}`}
        onClick={() => {
          setToggle(!toggle);
          toggleTheme(); // Call theme update function here
        }}
      >
        <div className="thumb"></div>
      </button>
    </div>
  );
}

export default Toggle;
