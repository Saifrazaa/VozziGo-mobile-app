import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import DrawerContainer from "./src/container/Drawer";
import SplashScreen from "react-native-splash-screen";

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" />
        <DrawerContainer />
      </View>
    );
  }
}
console.disableYellowBox = true;
