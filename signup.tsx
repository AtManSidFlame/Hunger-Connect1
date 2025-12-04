import { useRouter } from "expo-router";
import { useState } from "react"; // ✅ Add React import
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { supabase } from "./lib/supabase"; // Correct path to your supabase.ts

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required!");
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        Alert.alert("Signup Failed", error.message);
        return;
      }

      Alert.alert(
        "Success",
        "Account created! Please verify your email before logging in."
      );

      router.push("/login");
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Something went wrong. Try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <PrimaryButton title="Sign Up" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00ffff",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#00ffff",
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
    color: "#ffffff",
  },
});
