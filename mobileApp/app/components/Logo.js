import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Logo() {
  return (
    <Animatable.Image
      source={require("../../assets/tesa_logo.png")}
      style={styles.image}
      animation="fadeInLeft" // Animation type
      delay={500} // Delay in milliseconds
      duration={1800} // Duration of animation
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    marginBottom: 8,
  },
});
