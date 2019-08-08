import React from 'react';
import {
  Text as PaperText,
  Headline as PaperHeadline,
  Subheading as PaperSubheading,
  Title as PaperTitle
} from 'react-native-paper';
import PropTypes from 'prop-types';

import { useTheme } from '../Theme';

Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
};
export function Text(props) {
  const { style, ...rest } = props;
  return (
    <PaperText style={{ fontSize: 17, ...style }} {...rest}>
      {props.children}
    </PaperText>
  );
}

Headline.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
};
export function Headline(props) {
  const { theme } = useTheme();
  const { style, ...rest } = props;
  return (
    <PaperHeadline style={{ fontSize: 22, fontFamily: `${theme.fonts[600]}`, ...style }} {...rest}>
      {props.children}
    </PaperHeadline>
  );
}

Subheading.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
};
export function Subheading(props) {
  const { theme } = useTheme();
  const { style, ...rest } = props;
  return (
    <PaperSubheading
      style={{ fontSize: 20, fontFamily: `${theme.fonts[600]}`, ...style }}
      {...rest}>
      {props.children}
    </PaperSubheading>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
};
export function Title(props) {
  const { theme } = useTheme();
  const { style, ...rest } = props;
  return (
    <PaperTitle style={{ fontSize: 26, fontFamily: `${theme.fonts.medium}`, ...style }} {...rest}>
      {props.children}
    </PaperTitle>
  );
}
