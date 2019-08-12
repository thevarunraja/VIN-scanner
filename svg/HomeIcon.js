import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    aria-labelledby="homeAlt2IconTitle"
    stroke="#2329D6"
    strokeWidth={1}
    strokeLinecap="square"
    fill="none"
    color="#2329D6"
    {...props}>
    <Path d="M2 12l3-2.7M22 12l-3-2.7m0 0L12 3 5 9.3m14 0V21H5V9.3" />
  </Svg>
);

export default SvgComponent;
