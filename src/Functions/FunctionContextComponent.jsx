import React from "react";
import { useTheme, useThemeUpdate } from "../Context/ThemeContext";

function FunctionContextComponent() {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <>
      <div>Update Theme Function</div>
      <button onClick={toggleTheme}> Toggle Theme </button>
    </>
  );
}

export default FunctionContextComponent;
