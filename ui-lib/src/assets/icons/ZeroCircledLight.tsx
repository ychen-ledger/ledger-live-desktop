import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ZeroCircledLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.12C17.1119 21.12 21.1199 16.968 21.1199 12C21.1199 6.912 17.0879 2.88 11.9999 2.88C6.91188 2.88 2.87988 6.912 2.87988 12C2.87988 17.088 6.91188 21.12 11.9999 21.12ZM4.07988 12C4.07988 7.56 7.55988 4.08 11.9999 4.08C16.4399 4.08 19.9199 7.56 19.9199 12C19.9199 16.32 16.4399 19.92 11.9999 19.92C7.55988 19.92 4.07988 16.44 4.07988 12ZM8.42388 12.024C8.42388 14.856 9.67188 16.704 11.9999 16.704C14.3519 16.704 15.5759 14.856 15.5759 12.024C15.5759 9.168 14.3759 7.34401 11.9999 7.34401C9.67188 7.34401 8.42388 9.19201 8.42388 12.024ZM9.67188 12.6V11.472C9.67188 9.288 10.3919 8.376 11.9999 8.376C12.8639 8.376 13.4879 8.64001 13.8719 9.24001L9.79188 13.872C9.69588 13.512 9.67188 13.08 9.67188 12.6ZM10.1039 14.784L14.2079 10.152C14.2799 10.512 14.3279 10.968 14.3279 11.472V12.6C14.3279 14.784 13.6079 15.672 11.9999 15.672C11.1119 15.672 10.4879 15.408 10.1039 14.784Z"
        fill={color}
      />
    </svg>
  );
}

export default ZeroCircledLight;
