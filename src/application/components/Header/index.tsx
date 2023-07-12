import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container } from './styles';

import Logo from '@assets/Logo.svg';

export const Header: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Container paddingTop={top}>
      <Logo />
    </Container>
  );
};
