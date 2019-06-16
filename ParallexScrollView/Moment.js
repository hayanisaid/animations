/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, TouchableWithoutFeedback, Animated } from "react-native";

const { width, height } = Dimensions.get("window");

type Props = {};
export default class Moment extends Component<Props> {
  render() {
    const animatedStyle = {
      transform: [
        {
          translateX: this.props.translateX
        }
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.Image source={this.props.image} style={[styles.image, animatedStyle]} />
        <View style={[StyleSheet.absoluteFill, styles.center]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: "hidden"
  },
  image: {
    width: null,
    height: null,
    flex: 1
  },
  titleWrapper: {
    backgroundColor: "rgba(0,0,0,.5)",
    paddingVertical: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  center: {
    justifyContent: "center"
  },
  title: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 30,
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
