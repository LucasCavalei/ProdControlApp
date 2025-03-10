import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function ControleScreen({ navigation }) {
  const [nart, setNart] = useState("");
  const [lote, setLote] = useState("");
  const [quantidade7_8, setQuantidade7_8] = useState("");
  const [quantidade8_9, setQuantidade8_9] = useState("");
  const [quantidade9_10, setQuantidade9_10] = useState("");
  ("");
  const [quantidade10_11, setQuantidade10_11] = useState("");
  const [quantidade11_12, setQuantidade11_12] = useState("");

  const handleSave = (horario, quantidade) => {
    Alert.alert(
      "Dados Salvos",
      `Horário: ${horario}\nQuantidade: ${quantidade || 0}`
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputnart}
        keyboardType="numeric"
        placeholder="NART"
        placeholderTextColor="#999"
        value={nart}
        onChangeText={setNart}
      />
      <TextInput
        style={styles.inputlote}
        keyboardType="numeric"
        placeholder="Lote"
        placeholderTextColor="#999"
        value={lote}
        onChangeText={setLote}
      />
      {/* Horário 7 às 8 */}
      <View style={styles.row}>
        <Text style={styles.text}>7:00 - 8:00</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Qtd Rolos"
          placeholderTextColor="#999"
          value={quantidade7_8}
          onChangeText={setQuantidade7_8}
        />
        <Button
          title="Salvar"
          onPress={() => handleSave("7 às 8", quantidade7_8)}
          color="#555"
        />
      </View>

      {/* Horário 8 às 9 */}
      <View style={styles.row}>
        <Text style={styles.text}>8:00 - 9:00</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Qtd de rolos"
          placeholderTextColor="#999"
          value={quantidade8_9}
          onChangeText={setQuantidade8_9}
        />
        <Button
          title="Salvar"
          onPress={() => handleSave("8 às 9", quantidade8_9)}
          color="#555"
        />
      </View>

      {/* Horário 9 às 10 */}
      <View style={styles.row}>
        <Text style={styles.text}>9:00 - 10:00</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Qtd Laranjas"
          placeholderTextColor="#999"
          value={quantidade9_10}
          onChangeText={setQuantidade9_10}
        />
        <Button
          title="Salvar"
          onPress={() => handleSave("9 às 10", quantidade9_10)}
          color="#555"
        />
      </View>

      {/* Horário 10 às 11 */}
      <View style={styles.row}>
        <Text style={styles.text}>10:00- 11:00 </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Qtd de rolos"
          placeholderTextColor="#999"
          value={quantidade10_11}
          onChangeText={setQuantidade10_11}
        />
        <Button
          title="Salvar"
          onPress={() => handleSave("10 às 11", quantidade10_11)}
          color="#555"
        />
      </View>

      {/* Horário 11 às 12 */}
      <View style={styles.row}>
        <Text style={styles.text}> 11:00 - 12:00</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Qtd de rolos"
          placeholderTextColor="#999"
          value={quantidade11_12}
          onChangeText={setQuantidade11_12}
        />
        <Button
          title="Salvar"
          onPress={() => handleSave("11 às 12", quantidade11_12)}
          color="#555"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2E2E2E", // Dark gray background
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "100%", // Faz a linha preencher a largura total
    padding: 10,
    backgroundColor: "#3A3A3A", // Slightly lighter gray for rows
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#555", // Border for industrial look
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: "#FFFFFF", // White text
    fontFamily: "monospace", // Industrial font
  },
  input: {
    flex: 1,
    borderWidth: 1,
    fontSize: 18,
    borderColor: "#666", // Gray border for input
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#FFFFFF", // White text
    backgroundColor: "#4A4A4A", // Dark gray input background
    height: 40,
    marginRight: 10,
    fontFamily: "monospace",
  },
  inputnart: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: "#666", // Gray border for input
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#FFFFFF", // White text
    backgroundColor: "#4A4A4A", // Dark gray input background
    height: 60,
    marginRight: 10,
    fontFamily: "monospace",
  },
  inputlote: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: "#666", // Gray border for input
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#FFFFFF", // White text
    backgroundColor: "#4A4A4A", // Dark gray input background
    height: 60,
    marginRight: 10,
    fontFamily: "monospace",
  },
});
