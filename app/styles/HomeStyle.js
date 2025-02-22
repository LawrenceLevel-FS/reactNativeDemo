import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
  },
  h1: {
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 90,
    color: "white",
  },
  p: {
    color: "white",
    zIndex: 90,
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 500,
    lineHeight: 20,
  },
  bgImage: {
    flex: 1,
    backgroundSize: "contain",
    justifyContent: "center",
    position: "relative",
  },
  bgCover: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    position: "absolute",
    backgroundColor: "rgba(20, 10, 0, 0.5)",
  },
  button: {
    zIndex: 90,
    backgroundColor: "orange",
    marginTop: 30,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: 500,
  },
});
