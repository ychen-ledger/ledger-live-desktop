import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function NanoImportThin({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64014 8.64001H21.3601V2.88H2.64014V8.64001ZM3.12014 8.16001V3.36H11.6161C10.8481 3.864 10.3441 4.752 10.3201 5.736C10.3441 6.744 10.8481 7.632 11.6161 8.16001H3.12014ZM7.65614 16.776L12.0001 21.12L16.3441 16.776L16.0081 16.44L14.2081 18.24L12.2401 20.208V10.8H11.7601V20.208L9.79214 18.24L7.99214 16.44L7.65614 16.776ZM10.8001 5.736C10.8241 4.44 11.8801 3.36 13.1761 3.36H20.8801V8.16001H13.1761C11.8801 8.16001 10.8241 7.08 10.8001 5.736ZM11.8081 5.76C11.8081 6.552 12.4561 7.20001 13.2481 7.20001C14.0401 7.20001 14.6881 6.552 14.6881 5.76C14.6881 4.968 14.0401 4.32 13.2481 4.32C12.4561 4.32 11.8081 4.968 11.8081 5.76ZM12.2881 5.76C12.2881 5.232 12.7201 4.8 13.2481 4.8C13.7761 4.8 14.2081 5.232 14.2081 5.76C14.2081 6.288 13.7761 6.72001 13.2481 6.72001C12.7201 6.72001 12.2881 6.288 12.2881 5.76Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoImportThin;
