import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function SearchDollarMedium({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1678 16.6081L20.7598 22.2001L22.1998 20.76L16.6078 15.168C17.7118 13.752 18.3598 12 18.3598 10.08C18.3598 5.52005 14.6398 1.80005 10.0798 1.80005C5.5198 1.80005 1.7998 5.52005 1.7998 10.08C1.7998 14.64 5.5198 18.3601 10.0798 18.3601C11.9998 18.3601 13.7518 17.7121 15.1678 16.6081ZM3.7198 10.08C3.7198 6.57605 6.57581 3.72005 10.0798 3.72005C13.5838 3.72005 16.4398 6.57605 16.4398 10.08C16.4398 13.5841 13.5838 16.4401 10.0798 16.4401C6.57581 16.4401 3.7198 13.5841 3.7198 10.08ZM7.03181 11.136C6.98381 12.552 7.99181 13.632 9.47981 13.8481V14.8081H10.6798V13.8481C12.1198 13.632 13.1518 12.648 13.1518 11.448C13.1518 10.272 12.3358 9.57605 10.9678 9.38405L9.69581 9.21605C8.97581 9.12005 8.71181 8.92805 8.71181 8.37605C8.71181 7.68005 9.16781 7.46405 10.1038 7.46405C11.1598 7.46405 11.4238 7.70405 11.3998 8.66405H12.9838C12.9838 7.41605 11.9998 6.40805 10.6798 6.16805V5.20805H9.47981V6.16805C8.13581 6.38405 7.24781 7.32005 7.24781 8.49605C7.24781 9.64805 7.96781 10.32 9.21581 10.464L10.4398 10.608C11.2798 10.7041 11.5678 10.92 11.5678 11.544C11.5678 12.312 11.1838 12.552 10.0798 12.552C8.83181 12.552 8.54381 12.264 8.54381 11.136H7.03181Z"
        fill={color}
      />
    </svg>
  );
}

export default SearchDollarMedium;
