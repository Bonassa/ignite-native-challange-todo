import { Check } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

import { CheckboxProps } from './Checkbox.types';

export const Container = styled.View`
  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;
`;

export const StyledCheckBox = styled.View<CheckboxProps>`
  width: 18px;
  height: 18px;
  border-radius: 99px;

  align-items: center;
  justify-content: center;

  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
        `
      : css`
          border-width: 2px;
          border-color: ${({ theme }) => theme.COLORS.BLUE};
        `}
`;

export const StyledCheck = styled(Check).attrs(({ theme }) => ({
  size: 12,
  color: theme.COLORS.GRAY_100,
  weight: 'bold',
}))``;
