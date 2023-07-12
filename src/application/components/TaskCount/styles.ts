import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 2px 8px;
  border-radius: 999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
