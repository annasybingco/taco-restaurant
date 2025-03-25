import { useTheme } from "../../Context/ThemeContext";

function ProfileLogo({ isActive }) {
  const theme = useTheme();
  const logoColor = isActive
    ? theme === "light"
      ? "#5A965E" //light
      : "#3A6E3D"
    : theme === "light"
    ? "#a0afa0" //light
    : "#a0afa0";
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_437_4641)">
        <path
          d="M8.47844 19.9957C5.72407 19.9957 2.96969 19.994 0.215317 20C0.0373421 20 -0.00164289 19.955 5.21118e-05 19.7809C0.00852711 18.5665 0.00683211 17.3531 0.00174711 16.1387C0.00174711 15.9638 0.0407321 15.8135 0.127177 15.6598C1.24418 13.6795 2.83748 12.2333 4.94521 11.3833C6.87073 10.6071 8.85304 10.4781 10.865 10.9961C13.56 11.6898 15.55 13.3033 16.9221 15.7107C16.9814 15.8143 16.9967 15.9188 16.9967 16.0334C16.995 17.2826 16.9916 18.5326 17.0001 19.7817C17.0009 19.9575 16.9602 20 16.7831 20C14.0152 19.994 11.2464 19.9957 8.47844 19.9957Z"
          fill={logoColor}
        />
        <path
          d="M8.45171 0C11.0612 0 13.1519 2.07541 13.1545 4.66967C13.157 7.21213 11.0527 9.32745 8.52374 9.32405C5.93717 9.32065 3.87266 7.2393 3.87012 4.63145C3.86673 2.11447 5.95836 0 8.45171 0Z"
          fill={logoColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_437_4641">
          <rect width="17" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ProfileLogo;
