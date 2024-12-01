import { SvgProps } from "./types";

export type ShuSVGProps = SvgProps & {};

const ShuSVG: React.FC<ShuSVGProps> = ({
  fill = "currentColor",
  stroke = "currentColor",
  strokeLinecap = "round",
  strokeLinejoin = "round",
  strokeWidth = 2,
  strokeMiterlimit = 10,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 100 100"
      fill={fill}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeWidth={strokeWidth}
      strokeMiterlimit={strokeMiterlimit}
      {...props}
    >
      <polygon
        points="10,10 10,63.33 23.33,63.33 23.33,81.11 16.67,81.11 16.67,72.22 10,72.22 10,90 30,90 30,54.44
		16.67,54.44 16.67,18.89 23.33,18.89 23.33,45.56 30,45.56 30,10 	"
      />
      <polygon
        points="40,90 40,10 46.67,10 46.67,54.44 53.33,54.44 53.33,10 60,10 60,90 53.33,90 53.33,63.33
		46.67,63.33 46.67,90 	"
      />
      <polygon points="70,10 70,90 90,90 90,10 83.33,10 83.33,81.11 76.67,81.11 76.67,10 	" />
    </svg>
  );
};

export default ShuSVG;
