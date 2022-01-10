import React from "react";
import Video from "react-native-video";
import { View, StyleSheet } from "react-native";

class Loader extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Video
          style={styles.loader}
          repeat
          resizeMode="cover"
          source={require("../assets/images/loader.mp4")} // Can be a URL or a local file.
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
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  loader: {
    height: 150,
    width: 150,
  },
});
export default Loader;
