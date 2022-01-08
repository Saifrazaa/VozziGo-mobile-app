import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Content, Icon } from "native-base";
import { Styles, screenHeight, screenWidth } from "../config";
import { NavigationService, closeDrawer } from "../services";
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      menues: [
        {
          text: "Account",
          screenName: "Account",
          value: 1,
        },
        {
          text: "Groups",
          screenName: "Groups",
          value: 2,
        },
        {
          text: "Templates",
          screenName: "Templates",
          value: 3,
        },
        {
          text: "My Keywords",
          screenName: "Keywords",
          value: 4,
        },
        {
          text: "Dynamic Fields",
          screenName: "DynamicFields",
          value: 5,
        },
      ],
    };
  }
  handleNavigation = (value, screen, header) => {
    if (screen === "LoginScreen") {
      this.props.handleLogOut();
    } else {
      NavigationService.navigate(screen, {
        transition: "SlideFromRight",
        headerName: header,
      });
      this.setState({ value });
      closeDrawer();
    }
  };
  render() {
    return (
      <Content style={{ height: screenHeight }}>
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: "#0d0d0d",
          }}
        >
          <View style={{ marginTop: 10 }}>
            {this.state.menues.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={this.handleNavigation.bind(
                    this,
                    item.value,
                    item.screenName,
                    item.text
                  )}
                  style={styles.menuStyling}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "80%",
                      justifyContent: "center",
                      paddingLeft:20
                    }}
                  >
                    <Text
                      style={[
                        styles.menutextstyling,
                        {
                          color:
                            this.state.value == item.value
                              ? "#afff00"
                              : "white",
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  menuStyling: {
    height: screenHeight / 11,
    flexDirection: "row",
    width: "100%",
  },
  menutextstyling: {
    fontSize: Styles.fonts.h4,
    fontFamily: Styles.fonts.Bold,
  },
  textStyling: {
    fontSize: Styles.fonts.h3,
    color: Styles.theme.inputTextColor,
    fontFamily: Styles.fonts.Bold,
    maxWidth: "90%",
  },
});
