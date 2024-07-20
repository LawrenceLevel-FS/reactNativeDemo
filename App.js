import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./app/pages/Home";
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
