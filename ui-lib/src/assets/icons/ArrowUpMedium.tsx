import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ArrowUpMedium({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.8961 20.4001L18.7681 6.5041C18.7441 7.0801 18.7201 7.6801 18.7201 8.2321V13.0081L20.4001 12.9841V3.6001H11.0161L10.9921 5.2801H15.7681C16.3201 5.2801 16.9201 5.2561 17.4961 5.2321L3.6001 19.1041L4.8961 20.4001Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowUpMedium;
