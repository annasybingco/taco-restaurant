import { useState } from "react";
import { useThemeUpdate } from "../../Context/ThemeContext";
import "../Toggle/Toggle.scss";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const toggleTheme = useThemeUpdate();
  return (
    <div className="toggle">
      <h4>{toggle ? "Light Mode" : "Dark Mode"}</h4>
      <button
        className={`toggle__btn ${toggle ? "toggle" : ""}`}
        onClick={() => {
          setToggle(!toggle);
          toggleTheme();
        }}
      >
        <div className="thumb"></div>
      </button>
    </div>
  );
}

export default Toggle;
