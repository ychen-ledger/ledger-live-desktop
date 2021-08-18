import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ZeroCircledInitThin({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9122 16.704C15.1202 16.704 16.2722 14.856 16.2722 12.024C16.2722 9.192 15.1442 7.344 12.9122 7.344C10.7042 7.344 9.55223 9.192 9.55223 12.024C9.55223 14.856 10.7042 16.704 12.9122 16.704ZM4.03223 12C4.03223 16.968 7.94423 20.88 12.9122 20.88H19.9682V20.4H12.9122C8.20823 20.4 4.51223 16.704 4.51223 12C4.51223 7.416 8.20823 3.6 12.9122 3.6H19.9682V3.12H12.9122C7.94423 3.12 4.03223 7.152 4.03223 12ZM10.0322 12.048V12C10.0322 9.312 10.9682 7.824 12.9122 7.824C13.9682 7.824 14.7122 8.256 15.1922 9.048L10.3922 14.472C10.1522 13.824 10.0322 13.008 10.0322 12.048ZM10.6082 14.952L15.4082 9.528C15.6722 10.176 15.7922 10.992 15.7922 12V12.048C15.7922 14.736 14.8562 16.224 12.9122 16.224C11.8562 16.224 11.0882 15.792 10.6082 14.952Z"
        fill={color}
      />
    </svg>
  );
}

export default ZeroCircledInitThin;
