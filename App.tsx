import { View } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Loading } from '@components/Loading';

import { AppProvider } from '@provider/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <AppProvider>
      <View />
    </AppProvider>
  );
}
