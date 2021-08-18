import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function WifiNoneUltraLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6799 21.084L20.2559 20.508L2.66389 2.91599L2.08789 3.49199L5.49589 6.89998C4.24789 7.54798 3.09589 8.36398 2.08789 9.32398L2.71189 9.94798C3.71989 8.98798 4.87189 8.17198 6.14389 7.54798L9.07189 10.476C7.58389 10.908 6.26389 11.652 5.13589 12.636L5.71189 13.284C6.91189 12.252 8.25589 11.532 9.79189 11.196L13.3919 14.796C12.9359 14.676 12.4799 14.628 11.9999 14.628C10.5359 14.628 9.21589 15.156 8.18389 16.044L8.75989 16.668C9.62389 15.948 10.7279 15.492 11.9999 15.492C13.0079 15.492 13.9199 15.78 14.6879 16.26L14.7599 16.164L19.6799 21.084ZM8.85589 5.67598L9.59989 6.41998C10.3679 6.27598 11.1839 6.20398 11.9999 6.20398C15.7439 6.20398 18.9119 7.64398 21.3119 9.94798L21.9119 9.32398C19.3919 6.89998 15.9599 5.33998 11.9999 5.33998C10.9199 5.33998 9.86389 5.43598 8.85589 5.67598ZM10.7519 18.876L11.9999 20.244L13.2479 18.876C12.9359 18.588 12.5039 18.42 11.9999 18.42C11.4959 18.42 11.0639 18.588 10.7519 18.876ZM13.3199 10.14L14.4959 11.316C15.9119 11.652 17.1839 12.348 18.2879 13.308L18.8639 12.636C17.3279 11.316 15.4559 10.428 13.3199 10.14Z"
        fill={color}
      />
    </svg>
  );
}

export default WifiNoneUltraLight;
