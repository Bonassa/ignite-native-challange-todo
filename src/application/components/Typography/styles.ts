import styled from 'styled-components/native';

import { TypographyStyleProps } from './Typography.types';

export const Text = styled.Text<TypographyStyleProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
`;
