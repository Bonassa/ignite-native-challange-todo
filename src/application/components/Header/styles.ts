import styled from 'styled-components/native';

type ContainerStyleProps = {
  paddingTop: number;
};

export const Container = styled.View<ContainerStyleProps>`
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop + 24}px;
  padding-bottom: 72px;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
