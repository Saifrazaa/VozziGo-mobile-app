import { Animated, Easing } from "react-native";
let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};
let SlideFromLeft = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};
let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  return {
    opacity,
    transform: [{ scaleY }]
  };
};
let SlideFromTop = (index, position,layout,scene) => {
  // const { index } = scene;
  const { initHeight } = layout;

  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [-initHeight, 0, 0]
  });

  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.99, index],
    outputRange: [0, 1, 1]
  });

  return { opacity, transform: [{ translateY }] };
};
let SlideFromBottom = (index, position,layout,scene) => {
  // const { index } = scene;
  const { initHeight } = layout;

  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [initHeight, 0, 0]
  });

  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.99, index],
    outputRange: [0, 1, 1]
  });

  return { opacity, transform: [{ translateY }] };
};
export {
  SlideFromLeft,
  SlideFromRight,
  CollapseExpand,
  SlideFromTop,
  SlideFromBottom
};
