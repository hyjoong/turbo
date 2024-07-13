type IconProps = React.HTMLAttributes<SVGElement>;

const Logo = (props: IconProps) => {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 1018.000000 1280.000000'
      preserveAspectRatio='xMidYMid meet'
      {...props}
    >
      <g
        transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path
          d='M2475 12714 c-1087 -132 -2443 -294 -2460 -294 -13 0 -15 -666 -15
-6210 l0 -6210 108 0 c77 0 553 53 1697 190 875 105 1596 193 1603 195 9 3 12
481 12 2345 l0 2340 1670 0 1670 0 0 -2535 0 -2535 110 0 c61 0 184 9 273 20
570 69 3007 360 3020 360 16 0 17 442 17 6210 l0 6210 -109 0 c-74 0 -322 -26
-772 -80 -1843 -221 -2507 -300 -2522 -300 -16 0 -17 -162 -17 -2210 l0 -2210
-1670 0 -1670 0 0 2400 0 2400 -127 -1 c-93 -1 -316 -24 -818 -85z'
        />
      </g>
    </svg>
  );
};

export default Logo;
