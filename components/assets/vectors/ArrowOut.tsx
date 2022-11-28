import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={13} height={13} fill="none" {...props}>
    <path d="M1.4 13 0 11.6 9.6 2H1V0h12v12h-2V3.4L1.4 13Z" fill="#00C567" />
  </svg>
);

export default SvgComponent;
