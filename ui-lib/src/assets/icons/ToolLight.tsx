import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ToolLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.51216 21.84C5.08816 21.84 5.71216 21.624 6.16816 21.168L15.7922 11.52C16.2002 11.64 16.6562 11.688 17.0642 11.688C19.7042 11.688 21.8402 9.55203 21.8402 6.93603C21.8402 4.32003 19.7042 2.16003 17.0642 2.16003C14.4482 2.16003 12.3122 4.29603 12.3122 6.93603C12.3122 7.36803 12.3602 7.80003 12.4802 8.20803L2.85616 17.832C2.40016 18.288 2.16016 18.888 2.16016 19.488C2.16016 20.784 3.19216 21.84 4.51216 21.84ZM3.31216 19.488C3.31216 19.176 3.40816 18.888 3.67216 18.624L13.8002 8.49603C13.5842 8.01603 13.4402 7.48803 13.4402 6.93603C13.4402 4.92003 15.0722 3.28803 17.0642 3.28803C17.6402 3.28803 18.1922 3.43203 18.6722 3.69603L15.9842 6.38403L17.6162 8.01603L20.3042 5.32803C20.5682 5.80803 20.7122 6.36003 20.7122 6.93603C20.7122 8.92803 19.0802 10.56 17.0642 10.56C16.5122 10.56 15.9842 10.416 15.5042 10.2L5.35216 20.352C5.11216 20.592 4.82416 20.712 4.51216 20.712C3.84016 20.712 3.31216 20.16 3.31216 19.488Z"
        fill={color}
      />
    </svg>
  );
}

export default ToolLight;
