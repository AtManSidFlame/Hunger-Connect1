import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { supabase } from "../../lib/supabase";

type SurplusItem = {
  id: number;
  food_name: string;
  quantity: string;
  location: string;
  contact_no: string;
};

export default function Explore() {
  const [items, setItems] = useState<SurplusItem[]>([]);

  const fetchItems = async () => {
    const { data, error } = await supabase.from("food_surplus").select("*").order("created_at", { ascending: false });
    if (error) console.log(error.message);
    else setItems(data as SurplusItem[]);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explore Surplus Food</Text>
      {items.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.food}>{item.food_name}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Location: {item.location}</Text>
          <Text>Contact: {item.contact_no}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25, gap: 15, backgroundColor: "#000000ff", flexGrow: 1 },
  title: { fontSize: 28, fontWeight: "bold", color: "#00ffeaff", marginBottom: 20, textAlign: "center" },
  card: { backgroundColor: "#1bcf57ff", padding: 15, borderRadius: 12, borderWidth: 1, borderColor: "#00ffea", marginBottom: 10 },
  food: { fontSize: 18, fontWeight: "bold", color: "#000000ff", marginBottom: 5 }
});
