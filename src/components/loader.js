import React from "react";
import { View, StyleSheet, Image } from "react-native";

class Loader extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          source={require("../assets/images/loader.gif")}
          style={{ width: 150, height: 150 }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    zIndex: 999,
    backgroundColor: "#000000",
  },
  loader: {
    height: 150,
    width: 150,
  },
});
export default Loader;
