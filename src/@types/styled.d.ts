import 'styled-components/native';
import { ThemeType } from '@theme/index';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
