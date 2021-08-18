import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function SixCircledMediMedium({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.952 16.7039C13.92 16.7039 15.264 15.3839 15.264 13.6079C15.264 11.8319 13.896 10.5359 12.264 10.5359C11.568 10.5359 10.872 10.7759 10.44 11.2319H10.152C10.2 9.69589 10.728 8.99989 11.976 8.99989C12.84 8.99989 13.392 9.28789 13.488 9.98389H15.24C15 8.37589 13.776 7.34389 12 7.34389C9.62401 7.34389 8.28001 9.21589 8.30401 12.1439C8.32801 14.9999 9.67201 16.7039 11.952 16.7039ZM5.76001 21.3599H18.24V19.4399H5.76001V21.3599ZM5.76001 4.55989H18.24V2.63989H5.76001V4.55989ZM10.392 13.9439V13.1759C10.392 12.4319 10.8 12.1199 11.784 12.1199H12.024C13.008 12.1199 13.416 12.4319 13.416 13.1759V13.9439C13.416 14.6879 13.008 14.9999 12.024 14.9999H11.784C10.8 14.9999 10.392 14.6879 10.392 13.9439Z"
        fill={color}
      />
    </svg>
  );
}

export default SixCircledMediMedium;
