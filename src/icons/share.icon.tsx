import { Icon_Size } from "../contstants/size";
import { IconType } from "../types/utility.types";

export const ShareIcon: IconType = ({ width, height, fill }) => {
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
        strokeWidth="2"
        d="M9.611 12.4l1.207 6.135c.228 1.159 1.785 1.39 2.338.347l5.865-11.04c.227-.426.18-.898-.047-1.258M9.61 12.4L5.226 8.155C4.416 7.371 4.972 6 6.1 6h11.814c.463 0 .844.24 1.06.584M9.612 12.4l9.363-5.816m.081-.05l-.081.05"
      ></path>
    </svg>
  );
};
