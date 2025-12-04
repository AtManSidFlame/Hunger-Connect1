import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { supabase } from "../../lib/supabase";

export default function ShareSurplus() {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [contactNo, setContactNo] = useState("");

  const handleShare = async () => {
    if (!foodName || !quantity || !location || !contactNo) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    const { error } = await supabase
      .from("food_surplus")
      .insert([{ food_name: foodName, quantity, location, contact_no: contactNo }]);

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "Food surplus shared!");
      setFoodName(""); setQuantity(""); setLocation(""); setContactNo("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌐 Share Your Surplus Food</Text>

      {["Food Name", "Quantity", "Location", "Contact No"].map((placeholder, i) => (
        <View key={i} style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#bbb"
            value={[foodName, quantity, location, contactNo][i]}
            onChangeText={[setFoodName, setQuantity, setLocation, setContactNo][i]}
          />
        </View>
      ))}

      <PrimaryButton title="Share Surplus" onPress={handleShare} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25, flexGrow: 1, gap: 15, backgroundColor: "#0a0a0a" },
  title: { fontSize: 28, fontWeight: "bold", color: "#00ffea", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#111", padding: 15, borderRadius: 12, marginVertical: 5, borderWidth: 1, borderColor: "#00ffea" },
  input: { color: "#fff", fontSize: 16 }
});
