import {KeyPairs} from '../types/general';

export const createShadow = ({
  width = 0,
  height = 10,
  opacity = 0.1,
  radius = 16,
  color = 'black',
  elevation = 0,
}: {
  width?: number;
  height?: number;
  opacity?: number;
  radius?: number;
  color?: string;
  elevation?: number;
} = {}): KeyPairs => ({
  shadowOffset: {
    width,
    height,
  },
  shadowOpacity: opacity,
  shadowColor: color,
  shadowRadius: radius,
  elevation,
});
