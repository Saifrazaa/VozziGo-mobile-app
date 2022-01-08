import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { Header, Icon } from "native-base";
import { openDrawer } from "../services";
import { Styles } from "../config";
class HeaderComponent extends React.Component {
  render() {
    return (
      <Header
        style={{
          backgroundColor: Styles.theme.headerBackgroundColor,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <StatusBar backgroundColor="#09090a" />
        <View
          style={{
            width: "15%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="menu"
            onPress={() => openDrawer()}
            style={{ color: Styles.theme.iconColors }}
          />
        </View>
        <View>
          <Image
            source={require("../assets/images/logo-short.png")}
            style={{ height: 65, width: 65, marginRight: 3 }}
            resizeMode="contain"
          />
        </View>
      </Header>
    );
  }
}
export default HeaderComponent;
// export default Header;
