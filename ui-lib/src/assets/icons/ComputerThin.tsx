import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ComputerThin({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.32789 20.4H18.6719C18.3359 20.112 17.9039 19.92 17.3999 19.92H14.6159L13.8479 16.32H19.5599C20.5439 16.32 21.3599 15.504 21.3599 14.52V5.39998C21.3599 4.41598 20.5439 3.59998 19.5599 3.59998H4.43989C3.45589 3.59998 2.63989 4.41598 2.63989 5.39998V14.52C2.63989 15.504 3.45589 16.32 4.43989 16.32H10.1519L9.38389 19.92H6.59989C6.11989 19.92 5.66389 20.112 5.32789 20.4ZM3.11989 14.52V5.39998C3.11989 4.60798 3.64789 4.07998 4.43989 4.07998H19.5599C20.3519 4.07998 20.8799 4.60798 20.8799 5.39998V14.52C20.8799 15.312 20.3519 15.84 19.5599 15.84H4.43989C3.64789 15.84 3.11989 15.312 3.11989 14.52ZM9.88789 19.92L10.6559 16.32H13.3439L14.1119 19.92H9.88789Z"
        fill={color}
      />
    </svg>
  );
}

export default ComputerThin;
