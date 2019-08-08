import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-arrow-left"
    {...props}>
    <Path d="M19 12H5M12 19l-7-7 7-7" />
  </Svg>
);

export default SvgComponent;
