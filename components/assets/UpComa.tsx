import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.906 0H0v16.655L6.78 30h8.427L8.46 16.655h8.445V0Z"
      fill="#00C567"
    />
  </svg>
);

export default SvgComponent;
