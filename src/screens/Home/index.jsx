import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/Title";
import styles from "./styles.js";
import { user } from "../../data/Profile.js";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"Home - Hello-Cariri!✨"} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile", { user })}
      >
        <Text style={styles.text}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category")}
      >
        <Text style={styles.text}>Go to Category</Text>
      </TouchableOpacity>
    </View>
  );
}
