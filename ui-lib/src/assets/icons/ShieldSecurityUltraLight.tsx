import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ShieldSecurityUltraLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.84C18.2399 19.368 21.3599 15.432 21.3599 10.128V5.088C18.6959 3.168 15.4559 2.16 11.9999 2.16C8.54389 2.16 5.30389 3.168 2.63989 5.088V10.128C2.63989 15.432 5.75989 19.368 11.9999 21.84ZM3.47989 10.128V5.496C5.95189 3.816 8.83189 2.976 11.9999 2.976C15.1679 2.976 18.0479 3.816 20.5199 5.496V10.128C20.5199 15.072 17.8079 18.576 11.9999 20.952C6.19189 18.576 3.47989 15.072 3.47989 10.128ZM7.31989 11.064C7.31989 11.184 7.34389 11.28 7.41589 11.376L9.52789 14.808C10.0559 15.696 11.0159 16.272 12.1199 16.272C13.7519 16.272 15.0479 15.048 15.1439 13.416L15.2639 7.824C15.2639 7.536 15.0479 7.296 14.7599 7.296C14.4719 7.296 14.2559 7.536 14.2559 7.8L14.1839 10.8H13.6559L13.6799 6.816C13.6799 6.528 13.4879 6.288 13.1759 6.288C12.8879 6.288 12.6719 6.528 12.6719 6.792L12.6479 10.56H12.1199L12.0959 6.288C12.0959 6.024 11.9039 5.784 11.5919 5.784C11.3039 5.784 11.0879 6.024 11.0879 6.312L11.1119 10.8H10.5599L10.5119 7.296C10.5119 7.032 10.3199 6.792 10.0079 6.792C9.69589 6.792 9.50389 7.032 9.50389 7.32L9.57589 12.528L8.47189 10.728C8.37589 10.536 8.15989 10.416 7.94389 10.416C7.58389 10.416 7.31989 10.68 7.31989 11.064Z"
        fill={color}
      />
    </svg>
  );
}

export default ShieldSecurityUltraLight;
