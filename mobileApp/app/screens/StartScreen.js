import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import Background from "../components/Background";
import Logo from "../components/Logo";
import LogoBird from "../components/LogoBird";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo style={{ marginBottom: -20 }} />
      <LogoBird style={{ marginTop: -200 }} />

      {/* Animated Section for Header, Paragraph, and Buttons */}
      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.containerForm}
      >
        <Header>Controle diário de produção</Header>
        <Paragraph>
          O Aplicativo tem como objetivo registrar a quantidade de rolos
          produzidos ao longo do período de produção.
        </Paragraph>

        <Button
          mode="contained"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Fazer Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Criar conta
        </Button>
      </Animatable.View>
    </Background>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 10,
    marginTop: 20,
    width: "120%",
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "#a1a1a1",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#38A69D",
    borderRadius: 50,
    paddingVertical: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});
