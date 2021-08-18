import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function FullnodeSyncRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.716 20.664C11.004 20.664 11.244 20.64 11.532 20.64L9.97196 19.08L9.10796 19.008C6.22796 18.816 4.57196 18 4.57196 16.992V15.384C5.84396 16.296 8.07596 16.8 10.716 16.8C11.052 16.8 11.364 16.776 11.676 16.776L13.092 15.384L14.148 16.392C16.38 15.936 17.964 14.976 18.324 13.68L18.42 13.584V5.66404C18.42 3.36004 15.132 2.04004 10.716 2.04004C6.44396 2.04004 3.01196 3.36004 3.01196 5.66404V16.992C3.01196 19.32 6.37196 20.76 10.716 20.664ZM4.57196 13.224V11.616C5.84396 12.528 8.07596 13.032 10.716 13.032C13.332 13.032 15.564 12.528 16.86 11.616V13.224C16.86 14.904 12.948 15.408 10.716 15.408C6.82796 15.408 4.57196 14.448 4.57196 13.224ZM4.57196 9.45604V7.84804C5.84396 8.76004 8.07596 9.26404 10.716 9.26404C13.308 9.26404 15.564 8.76004 16.86 7.84804V9.45604C16.86 10.68 14.532 11.664 10.716 11.664C6.82796 11.664 4.57196 10.68 4.57196 9.45604ZM4.57196 5.66404C4.57196 4.51204 6.85196 3.60004 10.716 3.60004C14.7 3.60004 16.86 4.51204 16.86 5.66404C16.86 6.93604 14.532 7.87204 10.716 7.87204C6.82796 7.87204 4.57196 6.93604 4.57196 5.66404ZM12.084 18.648L15.372 21.96L20.988 16.32L19.884 15.24L15.372 19.728L13.164 17.544L12.084 18.648Z"
        fill={color}
      />
    </svg>
  );
}

export default FullnodeSyncRegular;
