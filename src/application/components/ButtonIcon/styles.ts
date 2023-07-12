import styled from 'styled-components/native';

import { ButtonStyleProps } from './ButtonIcon.types';

export const Container = styled.Pressable<ButtonStyleProps>`
  width: 52px;
  height: 52px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isPressed }) =>
    isPressed ? theme.COLORS.BLUE : theme.COLORS.BLUE_DARK};
  border-radius: 6px;
`;
