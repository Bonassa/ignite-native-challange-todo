import { useTheme } from 'styled-components/native';

import { Text } from './styles';
import { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = ({
  children,
  color = 'GRAY_100',
  fontSize = 'SM',
  fontFamily = 'REGULAR',
  ...rest
}) => {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  return (
    <Text
      color={COLORS[color]}
      fontSize={FONT_SIZE[fontSize]}
      fontFamily={FONT_FAMILY[fontFamily]}
      {...rest}
    >
      {children}
    </Text>
  );
};
