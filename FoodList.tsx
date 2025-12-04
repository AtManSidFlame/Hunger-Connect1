import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Props {
  items: { id: number; name: string; description?: string; type?: string }[];
}

export default function FoodList({ items }: Props) {
  if (!items.length) return <Text style={styles.noData}>No food items found</Text>;

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          {item.description ? <Text style={styles.desc}>{item.description}</Text> : null}
          {item.type ? <Text style={styles.type}>{item.type}</Text> : null}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  name: { color: '#00ffcc', fontSize: 18, fontWeight: 'bold' },
  desc: { color: '#fff', fontSize: 14, marginTop: 5 },
  type: { color: '#fff', fontSize: 12, marginTop: 5, fontStyle: 'italic' },
  noData: { color: '#fff', textAlign: 'center', marginTop: 20 },
});
