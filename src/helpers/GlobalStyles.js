import { StyleSheet } from "react-native";
import Theme from "./Theme";

const GlobalStyles = StyleSheet.create({
  Bodycontainer: {
    flex: 1,
    padding: "4%",
    paddingTop: "15%",
  },
  Center: {
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonLayout: {
    backgroundColor: "#fff",
    color: "#000",
    width: 360,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    margin: 5,
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  LabelText: {
    fontSize: 12,
    fontWeight: "500",
    color: Theme.textGray,
    marginBottom: "1%",
  },
  TextInput: {
    // backgroundColor: "pink",
    borderColor: "gray",
    backgroundColor: "#F9F9FC",
  },
  textSize: {
    fontSize: 20,
  },
});
export default GlobalStyles;
