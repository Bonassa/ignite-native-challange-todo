import styled from 'styled-components/native';

import { InputStyleProps } from './Input.types';

export const Container = styled.TextInput.attrs<InputStyleProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.COLORS.GRAY_300,
    selectionColor: theme.COLORS.GRAY_100,
  })
)`
  flex: 1;
  height: 54px;
  padding: 16px;

  border-width: 1.5px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_700};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
