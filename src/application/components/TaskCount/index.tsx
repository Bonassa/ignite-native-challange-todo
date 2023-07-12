import { Container } from './styles';
import { TaskCountProps } from './TaskBadge.types';

import { Typography } from '@components/Typography';

export const TaskCount: React.FC<TaskCountProps> = ({ qtd }) => {
  return (
    <Container>
      <Typography color="GRAY_200" fontFamily="BOLD">
        {qtd}
      </Typography>
    </Container>
  );
};
