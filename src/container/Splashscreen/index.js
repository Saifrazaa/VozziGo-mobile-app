import React from "react";
import { Animated, ImageBackground, Easing } from "react-native";
import { screenWidth } from "../../config";
class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fadein: new Animated.Value(0),
    };
    this.RotateValueHolder = new Animated.Value(0);
    setTimeout(
      () =>
        this.props.navigation.replace("FirstScreen", {
          transition: "SlideFromRight",
        }),
      2000
    );
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    Animated.timing(this.state.fadein, {
      toValue: 1,
      duration: 2000,
    }).start();
    this.StartImageRotateFunction();
  }
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    return (
      <ImageBackground
        source={require("../../assets/images/back.png")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: screenWidth,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View style={{ opacity: this.state.fadein }}>
          <Animated.Image
            style={{
              width: 300,
              height: 300,
              // transform: [{ rotate: RotateData }],
            }}
            source={require("../../assets/images/logo.png")}
          />
        </Animated.View>
      </ImageBackground>
    );
  }
}
export default SplashScreen;
