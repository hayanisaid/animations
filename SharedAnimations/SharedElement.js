import React, { Component, PureComponent } from "react";
import { Platform, StyleSheet, Text, View, Animated, ScrollView, Dimensions, SafeAreaView, EASING } from "react-native";
import PropTypes from "prop-types";
const childContextTypes = {
  moveSharedElement: PropTypes.func.isRequired
};

const { width, height } = Dimensions.get("window");
import { AnimationContext } from "./parent";
let { Consumer } = AnimationContext;
class SharedElement extends Component {
  componentDidMount() {
    console.log(this.context);
    this.context.setAnimations(() => {
      config: "hello";
    });
  }
  onDestinationLayout = data => {
    console.log("layout data", data);
  };
  getChildContext() {
    return {
      moveSharedElement: this.moveSharedElement
    };
  }
  _measure = param => {
    console.log("measuer", param);
  };
  moveSharedElement = config => {
    console.log("shared", config);
  };
  renderChildren = () => {
    let { children } = this.props;
    return React.cloneElement(children, {
      ref: ref => this.ref,
      onLayout: this.onDestinationLayout
    });
  };
  render() {
    return (
      <View styles={styles.container} measure={this._measure}>
        {this.renderChildren()}
      </View>
    );
  }
}
// const SharedElement = props => {
//   let { children } = props;
//   return <Consumer styles={styles.container}>{value => children}</Consumer>;
// };
SharedElement.contextType = AnimationContext;
SharedElement.childContextTypes = childContextTypes;
export default SharedElement;

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
