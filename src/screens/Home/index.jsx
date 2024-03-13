import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

import Title from "../../components/Title";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { user } from "../../data/Profile";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"Home, sweet home ✨!"} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile", { user })}
      />
      <Text style={styles.text}>Go to Profile</Text>
      <TouchableOpacity />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category")}
      />
      <Text style={styles.text}>Go to Profile</Text>
      <TouchableOpacity />
    </View>
  );
}
