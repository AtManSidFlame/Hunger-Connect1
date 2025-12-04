// app/(tabs)/locate.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';

export default function Locate() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locate</Text>
      <Text style={styles.sub}>We removed maps for web. Use location details below.</Text>

      <Card title="Pickup Points" subtitle="Coordinates & pickup instructions" footer="Tap for details" style={{ marginTop: 12 }} />
      <Card title="Nearby Partners" subtitle="Community kitchens & NGOs" style={{ marginTop: 12 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 18, backgroundColor: '#061213', flex: 1 },
  title: { color: '#00ffd6', fontSize: 22, fontWeight: '800' },
  sub: { color: '#bfeee5', marginTop: 6 },
});
