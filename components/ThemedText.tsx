import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Defina os estilos de fonte
  const textStyles = [
    { color },
    type === 'default' && styles.default,
    type === 'title' && styles.title,
    type === 'defaultSemiBold' && styles.defaultSemiBold,
    type === 'subtitle' && styles.subtitle,
    type === 'link' && styles.link,
    style,
  ];

  return <Text style={textStyles} {...rest} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'PoppinsRegular',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'PoppinsSemiBold', // Usando a variação semi-bold
  },
  title: {
    fontSize: 32,
    fontFamily: 'PoppinsBold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'PoppinsBold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
    fontFamily: 'PoppinsSemiBold',
  },
});