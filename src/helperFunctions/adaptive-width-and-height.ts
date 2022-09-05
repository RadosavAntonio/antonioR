import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const getWidthByRatio = (ratio: number) => screenWidth * ratio;
export const getHeightByRatio = (ratio: number) => screenHeight * ratio;

export const getAdjustedWidth = (width: number, designScreenWidth = 375) =>
  width * (screenWidth / designScreenWidth);

export const getAdjustedHeight = (height: number, designScreenHeight = 815) =>
  height * (screenHeight / designScreenHeight);
