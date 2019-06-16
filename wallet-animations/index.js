import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated, ScrollView, Dimensions, SafeAreaView, EASING } from "react-native";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 250;
const CARD_TITLE = 45;
const CARD_PADDING = 10;

const cards = [
  {
    title: "card! 1",
    color: "#080957"
  },
  {
    title: "card! 2",
    color: "#ff6d02"
  },
  {
    title: "card! 3",
    color: "#7577cd"
  },
  {
    title: "card! 4",
    color: "#ffbd39"
  },
  {
    title: "card! 5",
    color: "#0028ff"
  }
];

export default class Wallet extends Component {
  state = {
    y: new Animated.Value(0)
  };
  render() {
    const { y } = this.state;
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <View style={StyleSheet.absoluteFill}>
            {cards.map((card, i) => {
              const inputRange = [-CARD_HEIGHT, 0];
              const outputRange = [CARD_HEIGHT * i, (CARD_HEIGHT - CARD_TITLE) * i];
              if (i > 0) {
                inputRange.push(CARD_PADDING * i);
                outputRange.push((CARD_HEIGHT - CARD_PADDING) * -i);
              }
              const translateY = y.interpolate({
                inputRange,
                outputRange,
                extrapolate: "clamp"
              });
              return (
                <Animated.View
                  key={card.name}
                  style={{
                    transform: [{ translateY }]
                  }}
                >
                  <View style={[styles.card, { backgroundColor: card.color }]} />
                </Animated.View>
              );
            })}
          </View>
          <Animated.ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { y }
                  }
                }
              ],
              {
                useNativeDriver: true
              }
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFF",
    flex: 1,
    padding: 16
  },
  container: {
    flex: 1
  },
  content: {
    height: height * 2
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
  card: {
    height: CARD_HEIGHT,
    borderRadius: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
