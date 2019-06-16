import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";
import { Fade } from "rnal";

export default class Infinite extends Component {
  state = {
    rotateValue: new Animated.Value(0)
  };

  _start = () => {
     Animated.loop(
         Animated.timing(this.state.rotateValue, {
           toValue: 1,
           duration: 1000
         })
     ).start()
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => this._start()}>
          <Text style={styles.textBtn}>Start</Text>
        </TouchableOpacity>
        <Fade  startWhen={}>
          <View
            style={{
              transform:[
                  {
                      rotate:this.state.rotateValue.interpolate({
                          inputRange:["deg","1deg"],
                          outputRange:["0deg","380deg"]
                      })
                  }
              ]
              height: 250,
              width: 200,
              margin: 5,
              borderRadius: 50,
              backgroundColor: "#347a2a",
              justifyContent: "center"
            }}
          />
        </Fade>
        <Text style={styles.text}>Fade </Text>
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
