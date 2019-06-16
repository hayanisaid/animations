import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated, ScrollView, Dimensions, SafeAreaView, EASING } from "react-native";

const { width, height } = Dimensions.get("window");

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const AnimationContext = React.createContext({
  config: null,
  setAnimations: () => {}
});

class ParentAnimation extends Component {
  setAnimations = config => {
    this.setState({ config });
  };
  state = {
    config: null,
    setAnimations: this.setAnimations
  };

  componentDidMount() {
    console.log("this conte", this.context);
  }

  render() {
    let { children } = this.props;
    return (
      <View style={styles.container}>
        <View style={[StyleSheet.AbsoluteFill, styles.container]}>{children}</View>
      </View>
    );
  }
}
ParentAnimation.contextType = AnimationContext;
export default ParentAnimation;
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
