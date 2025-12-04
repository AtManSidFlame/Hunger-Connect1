// components/MapViewComponent.tsx
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface Props {
  locations: Location[];
}

export default function MapViewComponent({ locations }: Props) {
  const [MapComponents, setMapComponents] = useState<{
    MapView?: any;
    Marker?: any;
  }>({});

  useEffect(() => {
    if (Platform.OS !== 'web') {
      // Dynamic import for native platforms
      import('react-native-maps').then(mod => {
        setMapComponents({
          MapView: mod.default,
          Marker: mod.Marker,
        });
      });
    }
  }, []);

  if (Platform.OS === 'web' || !MapComponents.MapView) {
    // Web fallback
    return (
      <View style={styles.webContainer}>
        <Text style={styles.webText}>Map is not available on Web.</Text>
        {locations.map(loc => (
          <Text key={loc.id}>
            {loc.name}: ({loc.latitude}, {loc.longitude})
          </Text>
        ))}
      </View>
    );
  }

  const { MapView, Marker } = MapComponents;

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: locations[0]?.latitude || 0,
        longitude: locations[0]?.longitude || 0,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {locations.map(loc => (
        <Marker
          key={loc.id}
          coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
          title={loc.name}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { height: 300, marginBottom: 20 },
  webContainer: { padding: 20, backgroundColor: '#111' },
  webText: { color: '#0ff', fontWeight: 'bold', marginBottom: 10 },
});
