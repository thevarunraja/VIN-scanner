import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg
    width="48px"
    height="48px"
    viewBox="0 0 24 24"
    fill="none"
    aria-labelledby="addToListIconTitle"
    stroke="#2329D6"
    strokeWidth={1}
    strokeLinecap="square"
    strokeLinejoin="miter"
    color="#2329D6"
    {...props}>
    <Path d="M6 10H18" />
    <Path d="M6 6H18" />
    <Path d="M6 14H10" />
    <Path d="M14 16H18" />
    <Path d="M16 14L16 18" />
    <Path d="M6 18H10" />
  </Svg>
);

export default SvgComponent;
