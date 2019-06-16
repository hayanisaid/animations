/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Home from "./app/Home";
import ParalllexScrollView from "./ParallexScrollView";
import WalletAnimation from "./wallet-animations";
import SharedAnimationParent from "./SharedAnimations/parent";
import SharedAnimationChild from "./SharedAnimations/child";
import ProgressBarComponent from "./ProgressBarSvg";
import ActionsSheet from "./ReactReanimatedSheet";
type Props = {};
export default class App extends Component<Props> {
  render() {
    return <ActionsSheet />;
  }
}

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
