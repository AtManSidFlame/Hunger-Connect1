// components/FancyButton.tsx
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function FancyButton({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#00ffcc',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  txt: {
    color: '#001217',
    fontWeight: '700',
    fontSize: 16,
  },
});
