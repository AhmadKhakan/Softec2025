import { StyleSheet } from "react-native";
import Theme from "./Theme";

const GlobalStyles = StyleSheet.create({
  Bodycontainer: {
    flex: 1,
    padding: "6%",
    paddingTop: "18%",
  },
  Center: {
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonLayout: {
    backgroundColor: "#fff",
    color: "#000",
    // width: 360,
    // height: 55,
    padding: "4%",
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
    borderWidth: 0.25,
    // borderRadius: 16,
    // overflow: "hidden",
  },
  textSize: {
    fontSize: 20,
  },
});
export default GlobalStyles;
