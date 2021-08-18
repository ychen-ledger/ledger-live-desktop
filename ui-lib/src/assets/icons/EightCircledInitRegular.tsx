import * as React from "react";
type Props = {
  size: number;
  color?: string;
};

function EightCircledInitRegular({ size = 16, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3679 16.704H13.4159C15.3839 16.704 16.8479 15.552 16.8479 14.016C16.8479 13.056 16.2719 12.264 15.3359 11.976V11.736C16.0799 11.448 16.5599 10.728 16.5599 9.88801C16.5599 8.44801 15.1679 7.34401 13.3919 7.34401H13.3679C11.6159 7.34401 10.2239 8.44801 10.2239 9.88801C10.2239 10.752 10.7039 11.472 11.4719 11.76V11.976C10.5359 12.24 9.95986 13.056 9.95986 14.016C9.95986 15.552 11.4239 16.704 13.3679 16.704ZM4.15186 12C4.15186 17.16 8.23186 21.24 13.3919 21.24H19.8479V19.68H13.3919C9.09586 19.68 5.71186 16.296 5.71186 12C5.71186 7.80001 9.09586 4.32001 13.3919 4.32001H19.8479V2.76001H13.3919C8.20786 2.76001 4.15186 6.96001 4.15186 12ZM11.5919 14.184V13.752C11.5919 12.984 12.1439 12.6 13.3199 12.6H13.5119C14.7119 12.6 15.2399 12.984 15.2399 13.752V14.184C15.2399 14.952 14.6879 15.312 13.5119 15.312H13.3199C12.1439 15.312 11.5919 14.952 11.5919 14.184ZM11.7359 10.248V9.79201C11.7359 9.09601 12.2159 8.73601 13.2959 8.73601H13.4639C14.5439 8.73601 15.0479 9.09601 15.0479 9.79201V10.248C15.0479 10.944 14.5439 11.28 13.4639 11.28H13.2959C12.2159 11.28 11.7359 10.944 11.7359 10.248Z"
        fill={color}
      />
    </svg>
  );
}

export default EightCircledInitRegular;
