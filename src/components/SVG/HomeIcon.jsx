import { useTheme } from "../../Context/ThemeContext";

function HomeLogo({ isActive }) {
  const theme = useTheme();
  const logoColor = isActive
    ? theme === "light"
      ? "#5A965E"
      : "#3A6E3D"
    : theme === "light"
    ? "#a0afa0"
    : "#a0afa0";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={logoColor}
    >
      <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"></path>
    </svg>
  );
}

export default HomeLogo;
