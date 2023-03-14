import { Icon_Size } from "../contstants/size";
import { IconType } from "../types/utility.types";

export const HeartIcon: IconType = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? Icon_Size}
      height={height ?? Icon_Size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={fill ?? "#000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.882 12.956l5.62 6.351a2 2 0 002.996 0l5.62-6.351c1.673-1.891 2.542-4.269 1.285-6.536-1.452-2.62-4.113-3.156-6.426-1.396a13.084 13.084 0 00-1.766 1.654.284.284 0 01-.422 0 13.084 13.084 0 00-1.766-1.654C7.71 3.264 5.049 3.8 3.597 6.42c-1.257 2.267-.388 4.645 1.285 6.536z"
      ></path>
    </svg>
  );
};
