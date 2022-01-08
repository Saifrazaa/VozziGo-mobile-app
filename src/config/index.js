import { Dimensions } from "react-native";
import { Styles } from "./style";

const { height, width } = Dimensions.get('window');
const screenHeight = height;
const screenWidth = width;

const Production = false;
const serverAddress = (Production) ? "http://go-together-server.herokuapp.com" : "http://192.168.1.103:5000";

export {
    Styles,
    screenHeight,
    screenWidth,
    serverAddress
}

