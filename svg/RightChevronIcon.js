import React from 'react';
import Svg, { Polyline } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg
    role="img"
    width="48px"
    height="48px"
    viewBox="0 0 24 24"
    aria-labelledby="chevronRightIconTitle"
    stroke="#2329D6"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#2329D6"
    {...props}>
    <Polyline points="10 6 16 12 10 18 10 18" />
  </Svg>
);

export default SvgComponent;
