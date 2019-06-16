import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated, ScrollView, Dimensions, SafeAreaView, EASING } from "react-native";

const { width, height } = Dimensions.get("window");
import SharedElement from "./SharedElement";

class ChildAnimation extends Component {
  render() {
    let { children } = this.props;
    return (
      <SharedElement styles={styles.container} id="source">
        <View>
          <Text>Hellow </Text>
        </View>
      </SharedElement>
    );
  }
}
//ChildAnimation.contextType = ThemeContext;
export default ChildAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
