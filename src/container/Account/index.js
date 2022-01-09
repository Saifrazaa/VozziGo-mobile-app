import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { Form, Item, Input } from "native-base";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Styles, screenHeight } from "../../config";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  }
  render() {
    return (
      <View
        style={{
          height: "100%",
          backgroundColor: "#0d0d0d",
        }}
      >
        <View style={styles.innerWrapper}>
          <View style={styles.respondHeader}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("HomeScreen", {
                  transition: "SlideFromRight",
                })
              }
            >
              <Icon name="action-undo" color="#afff00" size={60} />
            </TouchableOpacity>
            <View style={styles.respondHeaderText}>
              <Text
                style={{ fontSize: 24, color: "#ffffff", textAlign: "center" }}
              >
                Account
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 28,
                textAlign: "center",
                color: "#ffffff",
                fontWeight: "500",
              }}
            >
              801.6314999
            </Text>
          </View>
          <Item style={styles.inputContainer} regular>
            <Input
              style={styles.inputBox}
              onChangeText={(password) => this.setState({ password })}
              placeholder="Old Password"
              placeholderTextColor={Styles.theme.inputplaceHolderColor}
              secureTextEntry
            />
          </Item>
          <Item style={styles.inputContainer} regular>
            <Input
              style={styles.inputBox}
              onChangeText={(newPassword) => this.setState({ newPassword })}
              placeholder="New Password"
              placeholderTextColor={Styles.theme.inputplaceHolderColor}
              secureTextEntry
            />
          </Item>
          <Item style={styles.inputContainer} regular>
            <Input
              style={styles.inputBox}
              onChangeText={(confirmPassword) =>
                this.setState({ confirmPassword })
              }
              placeholder="Confirm Password"
              placeholderTextColor={Styles.theme.inputplaceHolderColor}
              secureTextEntry
            />
          </Item>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("HomeScreen", {
                transition: "SlideFromTop",
              })
            }
            style={{
              backgroundColor: "#afff00",
              marginTop: 20,
              height: screenHeight / 13,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#000000",
              }}
            >
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  innerWrapper: {
    width: "85%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    paddingBottom: 50,
  },
  respondHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  respondHeaderText: {
    flex: 1,
  },
  inputContainer: {
    width: "100%",
    marginTop: 25,
    borderRadius: 5,
    height: screenHeight / 13,
    backgroundColor: "#ffffff",
  },
});
export default Account;
