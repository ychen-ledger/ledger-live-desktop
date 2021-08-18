import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function ProjectDiagramUltraLight({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9441 20.88H17.5681V14.256H11.6401L9.26414 9.312V6.792H14.7361V9.744H21.3601V3.12H14.7361V6.024H9.26414V3.12H2.64014V9.744H8.61614L10.9441 14.616V20.88ZM3.43214 8.952V3.888H8.49614V8.952H3.43214ZM11.7361 20.088V15.024H16.8001V20.088H11.7361ZM15.5281 8.952V3.888H20.5921V8.952H15.5281Z"
        fill={color}
      />
    </svg>
  );
}

export default ProjectDiagramUltraLight;
