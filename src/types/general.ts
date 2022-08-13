export type KeyPairs<T = string, T2 = any> = T extends string
  ? {[key: string]: T2}
  : {[key in keyof T]: T2}

export type FlexJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export enum CapitalLetter {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N',
  O = 'O',
  P = 'P',
  Q = 'Q',
  R = 'R',
  S = 'S',
  T = 'T',
  U = 'U',
  V = 'V',
  W = 'W',
  X = 'X',
  Y = 'Y',
  Z = 'Z',
}

export type StrNum = string | number;
export type FnVoid = () => void;

export type DisplayObjectAndKey = {key: string; displayObject: JSX.Element}

export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[KeyOf<T>];

export type FunctionalComponent = (props?: {[key: string]: any}) => JSX.Element;
