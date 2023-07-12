import styled from 'styled-components/native';

import { COLORS } from '@theme/index';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${COLORS.GRAY_100};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: COLORS.BLUE,
}))``;
