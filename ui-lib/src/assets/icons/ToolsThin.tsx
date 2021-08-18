import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ToolsThin({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.44003 21.36C4.87203 21.36 5.32803 21.192 5.71203 20.832L15.672 10.92C16.104 11.064 16.608 11.16 17.088 11.16C19.44 11.16 21.36 9.24 21.36 6.912C21.36 6.072 21.096 5.184 20.592 4.632L17.664 7.56L16.44 6.336L19.368 3.408C18.816 2.904 17.928 2.64 17.088 2.64C14.76 2.64 12.84 4.56 12.84 6.912C12.84 7.392 12.936 7.896 13.08 8.328L3.19203 18.264C2.80803 18.648 2.64003 19.104 2.64003 19.536C2.64003 20.544 3.43203 21.36 4.44003 21.36ZM2.28003 6.456L7.51203 11.688L7.84803 11.352L7.10403 10.608L8.85603 8.856L8.52003 8.52L6.76803 10.272L5.01603 8.52L6.76803 6.768L6.43203 6.432L4.68003 8.184L2.95203 6.456L6.45603 2.952L11.28 7.776L11.304 7.752C11.256 7.512 11.256 7.272 11.256 7.08L6.45603 2.28L2.28003 6.456ZM3.12003 19.56C3.12003 19.224 3.24003 18.888 3.52803 18.6L13.656 8.448C13.44 7.992 13.32 7.464 13.32 6.912C13.32 4.824 15.024 3.12 17.088 3.12C17.64 3.12 18.168 3.24 18.624 3.48L15.768 6.336L17.664 8.232L20.52 5.376C20.76 5.832 20.88 6.36 20.88 6.912C20.88 8.976 19.176 10.68 17.088 10.68C16.536 10.68 16.008 10.56 15.552 10.344L5.37603 20.496C5.08803 20.76 4.77603 20.88 4.44003 20.88C3.69603 20.88 3.12003 20.28 3.12003 19.56ZM12.312 16.488L17.544 21.72L21.72 17.544L16.92 12.744C16.728 12.744 16.488 12.744 16.248 12.696L16.224 12.72L21.048 17.544L17.544 21.048L15.816 19.32L17.568 17.568L17.232 17.232L15.48 18.984L13.728 17.232L15.48 15.48L15.144 15.144L13.392 16.896L12.648 16.152L12.312 16.488Z"
        fill={color}
      />
    </svg>
  );
}

export default ToolsThin;
