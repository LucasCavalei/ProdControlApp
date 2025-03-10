import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default function LogoBird() {
  return (
    <Animatable.Image
      source={require("../../assets/tesa_rolos.png")}
      style={styles.image}
      animation="fadeInUp" // Animation type
      delay={500} // Delay in milliseconds
      duration={2800} // Duration of animation
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 322,
    height: 250,
    marginBottom: 8,
    marginTop: -10, // This moves the image up by 20 pixels
  },
});
