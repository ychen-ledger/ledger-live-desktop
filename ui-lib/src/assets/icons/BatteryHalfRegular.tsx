import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function BatteryHalfRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.1001 17.736H19.9561V15.576H21.9001V8.42404H19.9561V6.26404H2.1001V17.736ZM3.6601 16.248V7.72804H18.3961V9.88804H20.3401V14.088H18.3961V16.248H3.6601ZM5.4601 14.448H11.8681V9.52804H5.4601V14.448Z"
        fill={color}
      />
    </svg>
  );
}

export default BatteryHalfRegular;
