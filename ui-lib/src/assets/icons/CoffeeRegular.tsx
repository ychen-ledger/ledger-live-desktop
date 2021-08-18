import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function CoffeeRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.87996 16.02H11.832C13.44 16.02 14.832 15.42 15.816 14.124C15.936 13.956 16.056 13.812 16.152 13.644H16.992C19.824 13.644 21.936 11.772 21.936 9.156C21.936 6.492 19.824 4.62 16.992 4.62H3.81596V10.14C3.81596 11.964 4.15196 13.164 4.91996 14.124C5.92796 15.42 7.27196 16.02 8.87996 16.02ZM2.06396 17.82C2.13596 18.684 2.90396 19.38 3.81596 19.38H17.976C18.912 19.38 19.656 18.684 19.728 17.82H2.06396ZM5.47196 11.124V6.084H15.24V11.124C15.24 13.404 14.328 14.46 12 14.46H8.73596C6.43196 14.46 5.47196 13.428 5.47196 11.124ZM16.704 12.18C16.848 11.604 16.896 10.932 16.896 10.14V6.084C19.344 6.084 20.28 6.804 20.28 8.724V9.564C20.28 11.412 19.392 12.18 17.088 12.18H16.704Z"
        fill={color}
      />
    </svg>
  );
}

export default CoffeeRegular;
