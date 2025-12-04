import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { supabase } from "../lib/supabase";

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) setUser(data.user);
    };
    fetchUser();
  }, []);

  if (!user) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>User ID:</Text>
        <Text style={styles.value}>{user.id}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: "#0a0a0a",
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00ffea",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#00ffea",
  },
  label: { color: "#aaa", fontSize: 14 },
  value: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  loading: { color: "#00ffea", textAlign: "center", marginTop: 50 },
});
