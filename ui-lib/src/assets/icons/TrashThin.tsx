import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function TrashThin({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.56009 21.36H16.4401C17.4241 21.36 18.2401 20.544 18.2401 19.56V8.40002H17.7601V19.56C17.7601 20.352 17.2321 20.88 16.4401 20.88H7.56009C6.76809 20.88 6.24009 20.352 6.24009 19.56V8.40002H5.76009V19.56C5.76009 20.544 6.57609 21.36 7.56009 21.36ZM3.84009 6.62402H20.1601V6.14401H15.7201V4.17601C15.7201 3.31201 15.0481 2.64001 14.1841 2.64001H9.81609C8.95209 2.64001 8.28009 3.31201 8.28009 4.17601V6.14401H3.84009V6.62402ZM8.76009 6.14401V4.17601C8.76009 3.50401 9.14409 3.12001 9.81609 3.12001H14.1841C14.8561 3.12001 15.2401 3.50401 15.2401 4.17601V6.14401H8.76009ZM9.84009 17.64H10.3201V9.72002H9.84009V17.64ZM13.6801 17.64H14.1601V9.72002H13.6801V17.64Z"
        fill={color}
      />
    </svg>
  );
}

export default TrashThin;
