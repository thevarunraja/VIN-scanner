import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg
    role="img"
    width="48px"
    height="48px"
    viewBox="0 0 24 24"
    aria-labelledby="personIconTitle"
    stroke="#2329D6"
    strokeWidth={1}
    strokeLinecap="square"
    strokeLinejoin="miter"
    fill="none"
    color="#2329D6"
    {...props}>
    <Path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20" />
  </Svg>
);

export default SvgComponent;
