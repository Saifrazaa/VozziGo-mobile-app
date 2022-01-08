import React from "react";
import { Animated, Easing } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen, HomeScreen, MessageDetail } from "../container";

import {
  CollapseExpand,
  SlideFromLeft,
  SlideFromRight,
  SlideFromTop,
  SlideFromBottom,
} from "../config/animation";
import { Header } from "../components";
import { NavigationService } from "../services";
class RootStack extends React.Component {
  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
const Navigator = createStackNavigator(
  {
    LoginScreen,
    HomeScreen: {
      screen: HomeScreen,
      headerName: "Home",
    },
    MessageDetail,
  },
  {
    initialRouteName: "MessageDetail",
    transitionConfig: () => {
      return {
        transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
          useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
          const { layout, position, scene } = sceneProps;
          const width = layout.initWidth;
          const { index, route } = scene;
          const params = route.params || {}; // <- That's new
          const transition = params.transition || "default"; // <- That's new
          return {
            default: CollapseExpand(index, position),
            SlideFromRight: SlideFromRight(index, position, width),
            SlideFromLeft: SlideFromLeft(index, position, -width),
            SlideFromBottom: SlideFromBottom(index, position, layout, scene),
            SlideFromTop: SlideFromTop(index, position, layout, scene),
          }[transition];
        },
      };
    },
    defaultNavigationOptions: (navigation) => ({
      header: <Header navigation={navigation} />,
    }),
  }
);
const AppContainer = createAppContainer(Navigator);

export default RootStack;
