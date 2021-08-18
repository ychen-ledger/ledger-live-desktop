import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function LinkMedium({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.93607 14.0884C11.9521 15.9844 15.0721 16.0324 17.0401 14.0644L20.2561 10.8484C22.2241 8.88036 22.2241 5.68836 20.2561 3.74436C18.3121 1.77636 15.1441 1.80036 13.1761 3.74436L10.7761 6.09636L12.1921 7.56036L14.6161 5.18436C16.2241 3.60036 17.2321 3.60036 18.8161 5.18436C20.4241 6.79236 20.4241 7.80036 18.8161 9.38436L15.5761 12.6244C13.9681 14.2564 12.9121 14.2804 11.2801 12.7204L10.5841 12.0484L9.26407 13.4404L9.93607 14.0884ZM3.74407 20.2564C5.68807 22.2244 8.85607 22.2004 10.8241 20.2564L13.2241 17.9044L11.8081 16.4404L9.38407 18.8164C7.77607 20.4004 6.76807 20.4004 5.18407 18.8164C3.57607 17.2084 3.57607 16.2004 5.18407 14.6164L8.42407 11.3764C10.0321 9.74436 11.0881 9.72036 12.7201 11.2804L13.4161 11.9524L14.7361 10.5604L14.0641 9.91236C12.0481 8.01636 8.92807 7.96836 6.96007 9.93636L3.74407 13.1524C1.77607 15.1204 1.77607 18.3124 3.74407 20.2564Z"
        fill={color}
      />
    </svg>
  );
}

export default LinkMedium;
