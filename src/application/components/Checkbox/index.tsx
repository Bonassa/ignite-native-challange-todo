import { CheckboxProps } from './Checkbox.types';
import { Container, StyledCheckBox, StyledCheck } from './styles';

export const Checkbox: React.FC<CheckboxProps> = ({ isChecked }) => {
  return (
    <Container>
      <StyledCheckBox isChecked={isChecked}>
        {isChecked && <StyledCheck />}
      </StyledCheckBox>
    </Container>
  );
};
