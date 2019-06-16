import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated from "react-native-reanimated";
import { runTiming } from "react-native-redash";

const { interpolate, multiply, Clock, Value, set, cond, startClock, clockRunning, timing, debug, stopClock, block } = Animated;
const { width, height } = Dimensions.get("window");
const size = width - 32;
const strokeWidth = 50;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const config = {
  duration: 20 * 1000,
  toValue: 1,
  easing: Easing.linear
};

export default class ProgressBar extends Component {
  render() {
    const clock = new Clock();
    const progress = runTiming(clock, 0, config);
    const alpha = interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, Math.PI * 2]
    });
    const strokeDashoffset = multiply(alpha, radius);
    return (
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.container}>
          <Svg width={size} height={size}>
            <Circle stroke="#000" fill="none" cx={size / 2} cy={size / 2} r={radius} {...{ strokeWidth }} />
            <AnimatedCircle
              stroke="#ca3e47"
              fill="none"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeDasharray={`${circumference} ${circumference}`}
              {...{ strokeWidth, strokeDashoffset }}
            />
          </Svg>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
