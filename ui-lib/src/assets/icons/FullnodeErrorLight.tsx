import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function FullnodeErrorLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9081 20.688C11.2921 20.688 11.6281 20.688 11.9881 20.664L13.2601 19.344C12.5641 19.44 11.7721 19.488 10.9081 19.488C6.8521 19.488 4.4041 18.48 4.4041 17.184V15.192C5.6041 16.2 8.0041 16.8 10.9081 16.8C11.4601 16.8 12.0121 16.776 12.5401 16.752L12.0121 16.2L12.5641 15.672C12.0361 15.696 11.4841 15.72 10.9081 15.72C6.8761 15.72 4.4041 14.688 4.4041 13.344V11.376C5.6041 12.408 8.0041 13.008 10.9081 13.008C13.7881 13.008 16.1881 12.408 17.4121 11.352V13.944L17.9881 14.496L18.6121 13.872V5.68801C18.6121 3.48001 15.3481 2.20801 10.9081 2.20801C6.6121 2.20801 3.2041 3.48001 3.2041 5.68801V17.184C3.2041 19.392 6.5401 20.688 10.9081 20.688ZM4.4041 9.50401V7.56001C5.6041 8.56801 8.0041 9.14401 10.9081 9.14401C13.7641 9.14401 16.1881 8.56801 17.4121 7.53601V9.50401C17.4121 10.872 14.8921 11.928 10.9081 11.928C6.8761 11.928 4.4041 10.872 4.4041 9.50401ZM4.4041 5.68801C4.4041 4.39201 6.9241 3.40801 10.9081 3.40801C15.0361 3.40801 17.4121 4.36801 17.4121 5.68801C17.4121 7.05601 14.8921 8.06401 10.9081 8.06401C6.8761 8.06401 4.4041 7.05601 4.4041 5.68801ZM14.2921 20.976L15.0841 21.792L17.5561 19.32L20.0041 21.792L20.7961 20.976L18.3481 18.528L20.7961 16.08L20.0041 15.264L17.5561 17.712L15.0841 15.264L14.2921 16.08L16.7401 18.528L14.2921 20.976Z"
        fill={color}
      />
    </svg>
  );
}

export default FullnodeErrorLight;
