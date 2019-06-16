/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated, ScrollView, Dimensions } from "react-native";
import Moment from "./Moment";

const { width, height } = Dimensions.get("window");

const Images = [
  { image: require("./images/drink1.jpg"), title: "Apple" },
  { image: require("./images/drink2.jpg"), title: "Black Jack " },
  { image: require("./images/drink3.jpg"), title: "TaKila" }
];

const getInterpolateValue = (animateScroll, i, imageLength) => {
  const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

  const outputRange = i === 0 ? [0, 0, 150] : [-300, 0, 150];

  return animateScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: "clamp"
  });
};

const getSeparator = i => (
  <View
    key={i}
    style={[
      styles.separator,
      {
        left: (i - 1) * width - 2.5
      }
    ]}
  />
);

type Props = {};
export default class App extends Component<Props> {
  state = {
    animatedScroll: new Animated.Value(0)
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: this.state.animatedScroll
                }
              }
            }
          ])}
        >
          {Images.map((image, i) => (
            <Moment key={i} {...image} translateX={getInterpolateValue(this.state.animatedScroll, i, Images.length)} />
          ))}
          {Array.apply(null, { length: Images.length + 1 }).map((_, i) => getSeparator(i))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  separator: {
    backgroundColor: "#fff",
    top: 0,
    bottom: 0,
    position: "absolute",
    width: 2
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
