import { StyleSheet } from "react-native";

export const MovieItemStyle = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
    marginTop: 8,
    alignSelf: "center",
    padding: 40,
    borderRadius: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: 500,
  },
  modalContent: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
});
