import { SymbolView } from 'expo-symbols';
import type { IconSymbolProps } from './icon-symbol';

export function IconSymbol({ name, size = 24, color, style, weight = 'regular' }: IconSymbolProps) {
  return (
    <SymbolView
      weight={weight as any}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name as any}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}
