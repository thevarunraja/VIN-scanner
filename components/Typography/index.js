import React from 'react';
import {
  Text as PaperText,
  Headline as PaperHeadline,
  Subheading as PaperSubheading,
  Title as PaperTitle
} from 'react-native-paper';

export function Text(props) {
  const { style, ...rest } = props;
  return (
    <PaperText style={{ fontSize: 17, ...style }} {...rest}>
      {props.children}
    </PaperText>
  );
}

export function Headline(props) {
  const { style, ...rest } = props;
  return (
    <PaperHeadline style={{ fontSize: 22, fontFamily: `OpenSans600`, ...style }} {...rest}>
      {props.children}
    </PaperHeadline>
  );
}

export function Subheading(props) {
  const { style, ...rest } = props;
  return (
    <PaperSubheading style={{ fontSize: 20, fontFamily: `OpenSans600`, ...style }} {...rest}>
      {props.children}
    </PaperSubheading>
  );
}

export function Title(props) {
  const { style, ...rest } = props;
  return (
    <PaperTitle style={{ fontSize: 24, fontWeight: `600`, ...style }} {...rest}>
      {props.children}
    </PaperTitle>
  );
}
