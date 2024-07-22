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
  input: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 20,
    padding: 8,
    borderRadius: 6,
    color: "gray",
    textAlign: "center",
  },
  Text: {
    fontSize: 20,
    marginBottom: 2,
  },
  updateTitle: {
    marginBottom: 40,
    fontSize: 40,
    color: "orange",
  },
});
