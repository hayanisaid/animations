import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Easing
} from "react-native";
import { Fade } from "rnal";

const arr = [];
for (let i = 0; i < 600; i++) {
  arr.push(i);
}
export default class Home extends Component {
  constructor() {
    super();
    this.animatedValue = [];
    arr.forEach(val => {
      this.animatedValue[val] = new Animated.Value(0);
    });
  }

  state = {
    fade: new Animated.Value(0),
    ready: false,
    position: {
      x: new Animated.Value(0),
      y: new Animated.Value(0)
    },
    rotation: new Animated.Value(0)
  };
  componentDidMount = () => {
    this._start();
  };

  _start = () => {
    let animations = arr.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: 1,
        duration: 3000,
        easing: Easing.ease,
        useNativeDriver: true
      });
    });
    Animated.stagger(10, animations).start();
  };

  handlClick = () => {
    Animated.sequence([
      Animated.spring(this.state.fade, {
        toValue: 1,
        duration: 1000
      }),
      Animated.parallel([
        Animated.timing(this.state.rotation, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true
        })
      ])
    ]).start();
  };
  render() {
    let { fade, rotation } = this.state;
    let animationItems = arr.map((a, i) => (
      <Animated.View
        key={i}
        style={{
          opacity: this.animatedValue[a],
          height: 20,
          width: 20,
          marginLeft: 2,
          marginTop: 3,
          backgroundColor: "#c00"
        }}
      />
    ));
    return (
      // <View style={styles.container}>
      //   <Fade startWhen={this.state.ready}>
      //     <MyComponent />
      //   </Fade>

      //   <Button
      //     title="click"
      //     press={() => {
      //       this.setState({ ready: true });
      //     }}
      //   />
      // </View>
      <View style={styles.container}>{animationItems}</View>
    );
  }
}

const AnimatedComponent = ({ opacity, rotation, style, ...props }) => {
  console.log = ("style===>>>>>.", props.style);
  const rotate = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "180deg"]
        })
      }
    ]
  };
  return (
    <Animated.View
      style={{
        style,
        transform: [
          {
            // scale:opacity.interpolate({
            //     inputRange:[0,1],
            //     outputRange:[0,3]
            // })
            translateX: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 200]
            })
          }
        ]
      }}
    >
      {props.children}
    </Animated.View>
  );
};
const MyComponent = () => (
  <View style={styles.item1}>
    <Text>Hello world</Text>
  </View>
);

const Button = ({ title, press, ...props }) => (
  <TouchableHighlight style={styles.btn} onPress={press} {...props}>
    <Text style={styles.btn}>{title}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },
  btn: {
    backgroundColor: "#c00000",
    padding: 10,
    width: 100,
    borderRadius: 4
  },
  textBtn: {
    color: "#fff"
  }
});
