import React, {ReactChildren} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {colors} from '../../assets/colors';

// please add in assets/index too
// until it is phased out
export enum FontFamily {
  SOFIA_PRO_SEMI_BOLD = 'SofiaProSemiBold',
  SOFIA_PRO_BOLD = 'SofiaProBold',
  SOFIA_PRO_LIGHT = 'SofiaProLight',
  AVENIR_BOOK = 'AvenirLTStd-Book',
  ATHLETICS_EXTRA_BOLD_ITALIC = 'Athletics-ExtraBoldItalic',
  ATHLETICS_EXTRA_BOLD = 'Athletics-ExtraBold',
  ATHLETICS_MEDIUM = 'Athletics-Medium',
}

interface Props {
  additionalStyle?: {[key: string]: any};
  children: any;
  color?: string;
  fontSize?: number;
  letterSpacing?: number;
  marginTop?: number;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  iosCorrection?: boolean;
  textAlign?: string;
  lineHeight?: number;
  isUnderline?: boolean;
  onPress?: () => void;
  numberOfLines?: number;
  adjustSizeToFit?: boolean;
  maxWidth?: number | string;
  minimumFontScale?: number;
  ellipsizeMode?: 'tail' | 'head' | 'middle' | 'clip';
  allowFontScaling?: boolean;
  fontWeight?: string;
}

export const ProText = ({
  children,
  fontSize = 12,
  color = colors.darkerGray,
  letterSpacing = -0.25,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  additionalStyle,
  iosCorrection = false,
  textAlign = 'left',
  adjustSizeToFit = false,
  ellipsizeMode = 'tail',
  numberOfLines,
  maxWidth,
  onPress,
  lineHeight,
  minimumFontScale,
  allowFontScaling = false,
  fontWeight,
}: Props): JSX.Element => {
  const isIos = Platform.OS === 'ios';
  const adjustedMarginTop =
    typeof marginTop === 'string'
      ? marginTop
      : marginTop + (iosCorrection && isIos ? fontSize * 0.3 : 0);

  return (
    <Text
      adjustsFontSizeToFit={adjustSizeToFit}
      minimumFontScale={minimumFontScale}
      onPress={onPress}
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      style={[
        style.text,
        {
          color,
          fontSize,
          letterSpacing,
          marginTop: adjustedMarginTop,
          marginBottom,
          marginLeft,
          marginRight,
          textAlign,
          lineHeight,
          maxWidth,
          fontWeight,
        },
        additionalStyle,
      ]}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
};

const style = StyleSheet.create({
  text: {
    letterSpacing: -0.25,
    paddingBottom: 1,
  },
});
