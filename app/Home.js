import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";

export default class MyComponent extends Component {
  state = {
    ready: false,
    SlideInLeft: new Animated.Value(0),
    slideUpValue: new Animated.Value(0),
    fadeValue: new Animated.Value(0)
  };

  _start = () => {
    return Animated.sequence([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.fadeValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.slideUpValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  };
  render() {
    let { slideUpValue, fadeValue, SlideInLeft } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => this._start()}>
          <Text style={styles.textBtn}>Start</Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            transform: [
              {
                translateX: slideUpValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-600, 0]
                })
              }
            ],
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            backgroundColor: "#c00",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>SlideUp </Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: SlideInLeft.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0]
                })
              }
            ],
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>SlideInLeft </Text>
        </Animated.View>
        <Animated.View
          style={{
            opacity: fadeValue,
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            backgroundColor: "#f4f",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>Fade </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center"
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 29
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },

  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  }
});
