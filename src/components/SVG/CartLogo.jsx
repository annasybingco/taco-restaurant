import { useTheme } from "../../Context/ThemeContext";

function CartLogo() {
  const theme = useTheme();
  const logoColor = theme === "light" ? "#635443" : "#c2a788"; // if light then set other
  return (
    <svg
      width="19"
      height="25"
      viewBox="0 0 19 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_440_1801)">
        <path
          d="M15.3983 0.893604V3.51345H14.4997V2.33417C14.4997 1.83946 14.0099 1.43882 13.4056 1.43882H5.59521C4.99089 1.43882 4.50285 1.83946 4.50285 2.33417V3.51345H3.60254V0.893604C3.60254 0.400641 4.09234 0 4.69666 0H14.3059C14.9085 0 15.3983 0.400641 15.3983 0.893604Z"
          fill={logoColor}
        />
        <path
          d="M19 23.2215C19.0212 24.5053 18.3464 24.9773 17.2082 24.9808C14.6007 24.9913 11.9931 24.9843 9.38553 24.9843C6.80791 24.9843 4.2303 24.9669 1.65268 24.9982C0.851031 25.0087 -0.0140471 24.3433 4.78968e-05 23.3904C0.0581896 19.5826 -0.0246183 15.773 0.0352853 11.9652C0.0740464 9.54742 0.0405709 7.13138 0.0828558 4.71534C0.0828558 4.59341 0.0159047 4.42444 0.174473 4.3687C0.324232 4.3147 0.396469 4.47844 0.4828 4.56554C0.553275 4.63695 0.609655 4.72405 0.662511 4.81115C0.940886 5.26753 1.17698 5.27624 1.45711 4.83728C1.97334 4.03251 2.04558 4.02554 2.68514 4.72405C3.01637 5.08521 3.34525 5.08521 3.67178 4.72405C4.28668 4.04296 4.35363 4.04819 4.88395 4.81811C5.2557 5.35811 5.34908 5.36508 5.69441 4.82857C5.76136 4.72405 5.86531 4.67876 5.93226 4.59341C6.35159 4.06038 6.34806 4.05864 6.78325 4.59689C7.1873 5.0974 7.59371 5.0974 8.00246 4.59689C8.06765 4.5185 8.11874 4.43141 8.18217 4.35128C8.37421 4.10567 8.55569 4.0987 8.71954 4.38264C8.84287 4.59515 9.02787 4.76063 9.16001 4.9714C9.37319 5.30934 9.58462 5.28843 9.82071 4.95398C10.2894 4.28857 10.7639 4.27522 11.2443 4.91392C11.5526 5.32501 11.646 5.32675 11.9473 4.9296C12.0072 4.84773 12.0706 4.76934 12.1376 4.6927C12.6855 4.06561 12.8529 4.08303 13.2757 4.80592C13.5893 5.34243 13.7285 5.35288 14.0915 4.86689C14.546 4.25722 15.0012 4.25722 15.4569 4.86689C15.804 5.33372 15.8322 5.33372 16.1881 4.86863C16.2322 4.81115 16.2656 4.7467 16.3097 4.68747C16.8206 4.01161 17.0408 4.02554 17.5095 4.76586C17.5483 4.82682 17.5765 4.89476 17.6152 4.95573C17.802 5.24663 18.0064 5.23269 18.1966 4.96966C18.3341 4.78153 18.4627 4.58818 18.6441 4.43663C18.801 4.30425 18.9084 4.31818 18.9243 4.54638C18.9313 4.64741 18.9243 4.74844 18.9243 4.84947C18.9261 7.05125 18.8873 9.25304 18.9384 11.4531C19.0282 15.3759 18.9313 19.3004 18.9983 23.2215H19Z"
          fill={logoColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_440_1801">
          <rect width="19" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CartLogo;
