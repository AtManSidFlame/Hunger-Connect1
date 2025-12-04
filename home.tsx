import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hunger Connect</Text>
      <Text style={styles.subtitle}>Your Food • Your Community • Your Impact</Text>

      <PrimaryButton title="Donate Food" onPress={() => router.push("./donate")} />
      <PrimaryButton title="Locate Meals" onPress={() => router.push("./locate")} />
      <PrimaryButton title="Share Surplus" onPress={() => router.push("./share")} />
      <PrimaryButton title="Sell Food" onPress={() => router.push("./sell")} />
      <PrimaryButton title="Explore Items" onPress={() => router.push("./explore")} />
      <PrimaryButton title="Profile" onPress={() => router.push("./profile")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#000",
    flexGrow: 1,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
  },
  subtitle: {
    color: "#bbb",
    fontSize: 16,
    marginBottom: 30,
  }
});
