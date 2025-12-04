import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function CreatorsPage() {
  const creators = [
    { name: "Yashwin Kumaar", role: "Co-Founder" },
    { name: "Ashwant", role: "Backend Developer" },
    { name: "Jeevan", role: "UI/UX Designer" },
    { name: "Thisya Rakshit", role: "Frontend Developer" },
    { name: "Siddharth Ranjan", role: "Full Stack & Founder" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Creators of Hunger Connect</Text>
      <View style={styles.cardContainer}>
        {creators.map((creator, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>{creator.name}</Text>
            <Text style={styles.role}>{creator.role}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#0a0a0a",
    flexGrow: 1,
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00ffea",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "#00ffea50",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  cardContainer: {
    width: "100%",
    gap: 15,
  },
  card: {
    backgroundColor: "#111111",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#00ffea",
    shadowColor: "#00ffea",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  role: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 5,
  },
});
