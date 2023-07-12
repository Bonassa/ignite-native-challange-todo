import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from '@theme/index';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={THEME}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </ThemeProvider>
  );
};
