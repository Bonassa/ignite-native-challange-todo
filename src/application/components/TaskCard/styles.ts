import { Trash } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 8px 12px 12px;

  flex-direction: row;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  align-items: center;
  justify-content: center;
`;

export const StyledTrash = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_300,
}))``;
