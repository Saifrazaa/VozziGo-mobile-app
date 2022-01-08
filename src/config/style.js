import { Dimensions } from "react-native";
const { fontScale } = Dimensions.get("window");
const Styles = {
  theme: {
    headerTextColor:"#fff",
    backgroundColor: "#222436",
    primaryButtonBackgroundColor: "#fff",
    primaryButtonTextColor: "#000",
    secondaryButtonBackgroundColor: "#f8001d",
    titleColor: "#f8001d",
    secondaryButtonTextColor: "#fff",
    inputTextColor: "#fff",
    inputplaceHolderColor: "#D2D2D2",
    iconColors: "#fff",
    textColor: "#fff",
    headingColor:"#fff",
    linkColor:"red",
    loaderColor:"#fff",
    errorColor:"red",
    headerBackgroundColor:"#09090a",
    alertBoxColor:"#5E5D5D"
  },
  fonts: {
    h1: fontScale * 25,
    h2: fontScale * 22,
    h3: fontScale * 20,
    h4: fontScale * 18,
    h5: fontScale * 16,
    large: fontScale * 14,
    medium: fontScale * 12,
    regular: fontScale * 10,
    Normal: "Roboto-Regular",
    Bold: "Roboto-Bold",
    Italic: "Roboto-Italic",
    BoldItalic: "Roboto-BoldItalic"
  }
};
export { Styles };
