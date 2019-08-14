import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg
    role="img"
    width="48px"
    height="48px"
    viewBox="0 0 24 24"
    aria-labelledby="binIconTitle"
    stroke="#2329D6"
    strokeWidth={1}
    strokeLinecap="square"
    strokeLinejoin="miter"
    fill="none"
    color="#2329D6"
    {...props}>
    <Path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
  </Svg>
);

export default SvgComponent;
