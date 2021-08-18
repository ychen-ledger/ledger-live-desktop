import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function EyeUltraLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 19.152C15.7199 19.152 19.7039 16.08 21.5999 12C19.7039 7.92 15.7199 4.848 11.9999 4.848C8.2799 4.848 4.2959 7.92 2.3999 12C4.2959 16.08 8.2799 19.152 11.9999 19.152ZM3.3359 12C5.1839 8.28 8.6879 5.64 11.9999 5.64C15.3119 5.64 18.8159 8.28 20.6639 12C18.8159 15.72 15.3119 18.336 11.9999 18.336C8.6879 18.336 5.1839 15.72 3.3359 12ZM8.7599 12C8.7599 13.8 10.1999 15.24 11.9999 15.24C13.7999 15.24 15.2399 13.8 15.2399 12C15.2399 10.2 13.7999 8.76 11.9999 8.76C10.1999 8.76 8.7599 10.2 8.7599 12ZM9.5519 12C9.5519 10.632 10.6319 9.528 11.9999 9.528C13.3679 9.528 14.4719 10.632 14.4719 12C14.4719 13.368 13.3679 14.448 11.9999 14.448C10.6319 14.448 9.5519 13.368 9.5519 12Z"
        fill={color}
      />
    </svg>
  );
}

export default EyeUltraLight;
