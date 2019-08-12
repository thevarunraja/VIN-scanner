import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, IconButton } from 'react-native-paper';

import { useTheme } from '../Theme';
import ArrowLeftIcon from '../../svg/ArrowLeftIcon';

PrimaryBtn.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
};
export function PrimaryBtn(props) {
  const { theme } = useTheme();
  const { style, height, disabled, ...rest } = props;
  return (
    <Button
      mode="contained"
      contentStyle={{ height: height ? height : 45 }}
      style={{ borderRadius: 2, ...style }}
      disabled={disabled}
      {...rest}>
      <Text
        style={{
          color: disabled ? `${theme.colors.text}` : `${theme.colors.white}`,
          opacity: disabled ? 0.3 : 1,
          fontFamily: `OpenSans600`,
          fontSize: 18
        }}>
        {props.children}
      </Text>
    </Button>
  );
}

OutlineBtn.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
};
export function OutlineBtn(props) {
  const { theme } = useTheme();
  const { style, ...rest } = props;
  return (
    <Button
      mode="outlined"
      contentStyle={{ height: 45 }}
      style={{ borderRadius: 2, ...style }}
      {...rest}>
      <Text style={{ color: `${theme.colors.text}`, fontFamily: `OpenSans600`, fontSize: 18 }}>
        {props.children}
      </Text>
    </Button>
  );
}

BackButton.propTypes = {
  style: PropTypes.object
};
export function BackButton(props) {
  const { style, ...rest } = props;
  return <IconButton icon={() => <ArrowLeftIcon stroke="#000" />} style={{ ...style }} {...rest} />;
}
