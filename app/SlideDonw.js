import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";
import { Fade, SlideDown } from "rnal";

export default class MyComponent extends Component {
  state = {
    ready: false,
    animatedValue: new Animated.Value(0)
  };

  _start = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 1000
    }).start();
  };
  render() {
    let { animatedValue } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => this._start()}>
          <Text style={styles.textBtn}>Start</Text>
        </TouchableOpacity>
        <SlideDown
          style={{
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-600, 0]
                })
              }
            ],
            height: 250,
            width: 200,
            margin: 5,
            borderRadius: 12,
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        />
        <Text style={styles.text}>Fade </Text>

        <Animated.View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6
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
