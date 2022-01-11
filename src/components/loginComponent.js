import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Form, Item, Input } from "native-base";
import { Styles, screenHeight, screenWidth } from "../config";
import Loader from "./loader";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginLoader: false,
    };
  }
  _login = () => {
    this.setState({ loginLoader: true });
    setTimeout(() => {
      this.props.navigation.navigate("HomeScreen", {
        transition: "SlideFromRight",
      });
      this.setState({ loginLoader: false });
    }, 3000);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: screenWidth,
          backgroundColor: "#0d0d0d",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {this.state.loginLoader && <Loader />}
        <View
          style={{
            height: screenHeight / 7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{ height: 300, width: 300 }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            width: screenWidth / 1.1,
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <Form>
            <Item style={styles.inputContainer} regular>
              <Input
                onChangeText={(email) => this.setState({ email })}
                style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor={Styles.theme.inputplaceHolderColor}
              />
            </Item>
            <Item style={styles.inputContainer} regular>
              <Input
                style={styles.inputBox}
                onChangeText={(password) => this.setState({ password })}
                placeholder="Password"
                placeholderTextColor={Styles.theme.inputplaceHolderColor}
                secureTextEntry
              />
            </Item>
            <TouchableOpacity
              onPress={this._login.bind(this)}
              style={{
                backgroundColor: "#afff00",
                marginTop: 20,
                height: screenHeight / 13,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#000000",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Form>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginTop: 25,
    borderRadius: 5,
    height: screenHeight / 13,
    backgroundColor: "#ffffff",
  },
});

export default Login;
