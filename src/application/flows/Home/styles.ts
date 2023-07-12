import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const NewTaskContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;

  margin-top: -32px;
`;

export const TaskListHeader = styled.View`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 21px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TaskBadge = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ListSeparator = styled.View`
  height: 8px;
`;

export const ListEmptyContainer = styled.View`
  align-items: center;
  justify-content: center;

  border-top-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};

  padding: 48px 0;
  gap: 16px;
`;
