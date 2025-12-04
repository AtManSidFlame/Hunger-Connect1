// components/Card.tsx
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

interface Props {
  title: string;
  subtitle?: string;
  footer?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

export default function Card({ title, subtitle, footer, style, children }: Props) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={{ marginTop: 8 }}>{children}</View>
      {footer ? <Text style={styles.footer}>{footer}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0f1720',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#083033',
  },
  title: { color: '#00ffd6', fontSize: 18, fontWeight: '700' },
  subtitle: { color: '#bdebe3', marginTop: 6 },
  footer: { color: '#88d8cc', marginTop: 10, fontSize: 12 },
});
