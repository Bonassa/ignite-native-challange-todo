export const COLORS = {
  BLUE: '#4EA8DE',
  BLUE_DARK: '#1E6F9F',
  PURPLE: '#8284FA',
  PURPLE_DARK: '#5E60C3',

  GRAY_100: '#F2F2F2',
  GRAY_200: '#D9D9D9',
  GRAY_300: '#808080',
  GRAY_400: '#333333',
  GRAY_500: '#262626',
  GRAY_600: '#1A1A1A',
  GRAY_700: '#0D0D0D',

  DANGER: '#E25858',
};

const FONT_SIZE = {
  SM: 12,
  MD: 14,
  LG: 16,
};

const FONT_FAMILY = {
  REGULAR: 'Inter_400Regular',
  BOLD: 'Inter_700Bold',
};

export const THEME = {
  COLORS,
  FONT_SIZE,
  FONT_FAMILY,
};

export type FontSizeType = keyof typeof FONT_SIZE;
export type FontFamilyType = keyof typeof FONT_FAMILY;
export type ColorType = keyof typeof COLORS;
export type ThemeType = typeof THEME;
