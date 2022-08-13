import React, {ReactNode} from 'react';
import {
  FlexAlignType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {FlexJustify} from '../../types/general';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  marginHorizontal?: number;
  marginVertical?: number;
  justifyContent?: FlexJustify;
  alignItems?: FlexAlignType;
}

export const Row = ({
  style,
  children,
  marginHorizontal = 0,
  marginVertical = 0,
  alignItems,
  justifyContent,
}: Props): JSX.Element => (
  <View
    style={[
      styles.container,
      {marginHorizontal, marginVertical, alignItems, justifyContent},
      style,
    ]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
