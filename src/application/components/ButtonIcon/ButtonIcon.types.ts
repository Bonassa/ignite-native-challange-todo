import { TouchableOpacityProps } from 'react-native';

import { IconProps } from 'phosphor-react-native';

export type IconBoxProps = (props: IconProps) => JSX.Element;

export type ButtonIconProps = TouchableOpacityProps & {
  icon: IconBoxProps;
};

export type ButtonStyleProps = {
  isPressed: boolean;
};
