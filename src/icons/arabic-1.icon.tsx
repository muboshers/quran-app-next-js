import { Icon_Size } from "../contstants/size";
import { IconType } from "../types/utility.types";

export const ArabicOneBook: IconType = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? Icon_Size}
      height={height ?? Icon_Size}
      fill={fill ?? "#000"}
      viewBox="0 0 32 32"
    >
      <path d="M15 25.875V6.25S12.312 4 8.5 4 2 6 2 6v19.875s2.688-1.938 6.5-1.938 6.5 1.938 6.5 1.938zm14 0V6.25S26.312 4 22.5 4 16 6 16 6v19.875s2.688-1.938 6.5-1.938 6.5 1.938 6.5 1.938zM31 8h-1v19H18v1h-5v-1H1V8H0v20h12v1h7.062L19 28h12V8z"></path>
    </svg>
  );
};
