import { TextProps } from 'react-native';

import { ColorType, FontFamilyType, FontSizeType } from '@theme/index';

export type TypographyProps = TextProps & {
  color?: ColorType;
  fontSize?: FontSizeType;
  fontFamily?: FontFamilyType;
};

export type TypographyStyleProps = {
  color: string;
  fontSize: number;
  fontFamily: string;
};
