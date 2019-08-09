import React from 'react';
import Svg, { Circle, Path, Line } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-help-circle"
    {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <Line x1={12} y1={17} x2={12} y2={17} />
  </Svg>
);

export default SvgComponent;
