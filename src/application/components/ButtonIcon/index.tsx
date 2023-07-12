import { useState } from 'react';

import { useTheme } from 'styled-components/native';

import { ButtonIconProps } from './ButtonIcon.types';
import { Container } from './styles';

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  ...rest
}) => {
  const { COLORS } = useTheme();
  const [isPressedState, setIsPressedState] = useState(false);

  return (
    <Container
      onPressIn={() => setIsPressedState(true)}
      onPressOut={() => setIsPressedState(false)}
      isPressed={isPressedState}
      {...rest}
    >
      <Icon size={24} color={COLORS.GRAY_100} />
    </Container>
  );
};
