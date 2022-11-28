import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={17} height={30} fill="none" {...props}>
    <path
      d="M.067 0h16.639v16.655L10.033 30H1.74l6.639-13.345H.067V0Z"
      fill="#00C567"
    />
  </svg>
);

export default SvgComponent;
