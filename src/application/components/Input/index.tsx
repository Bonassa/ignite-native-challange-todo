import { forwardRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Container } from './styles';

export const Input = forwardRef<TextInput, TextInputProps>((props, ref) => {
  const [isFocusedState, setIsFocusedState] = useState(false);

  return (
    <Container
      ref={ref}
      {...props}
      onFocus={() => setIsFocusedState(true)}
      onBlur={() => setIsFocusedState(false)}
      isFocused={isFocusedState}
    />
  );
});
