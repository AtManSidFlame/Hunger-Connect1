// app/modal.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FancyButton from '../components/FancyButton';

export default function ModalPage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>
      <Text style={styles.sub}>Small modal for helpful actions.</Text>

      <View style={{ marginTop: 18 }}>
        <FancyButton title="Close" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { color: '#00ffd6', fontSize: 22, fontWeight: '800' },
  sub: { color: '#cfeee7', marginTop: 8 },
});
