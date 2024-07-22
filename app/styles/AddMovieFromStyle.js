import { StyleSheet } from "react-native";

export const AddMovieFormStyle = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    width: 300,
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 40,
  },
  textBox: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 2,
    borderRadius: 2,
    padding: 3,
  },
  homeBtn: {
    marginLeft: 30,
    color: "orange",
    marginTop: 10,
  },
  formText: {
    marginTop: 8,
  },
  addMovieBtn: {
    backgroundColor: "#2D9EFF",
    alignSelf: "flex-start",
    padding: 4,
    marginTop: 8,
    borderRadius: 4,
  },
});
