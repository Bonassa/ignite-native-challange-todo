import { Container, DeleteButton, StyledTrash } from './styles';
import { TaskCardProps } from './TaskCard.types';

import { Checkbox } from '@components/Checkbox';
import { Typography } from '@components/Typography';

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  description,
  isCompleted,
  handleRemoveTask,
  handleCompleteTask,
}) => {
  return (
    <Container activeOpacity={0.7} onPress={() => handleCompleteTask(id)}>
      <Checkbox isChecked={isCompleted} />
      <Typography
        fontSize="MD"
        color={isCompleted ? 'GRAY_300' : 'GRAY_100'}
        fontFamily="REGULAR"
        style={{
          textDecorationLine: isCompleted ? 'line-through' : 'none',
          textAlign: 'justify',
          flex: 1,
        }}
      >
        {description}
      </Typography>
      <DeleteButton onPress={() => handleRemoveTask(id)}>
        <StyledTrash />
      </DeleteButton>
    </Container>
  );
};
