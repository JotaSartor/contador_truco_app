import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function MarcadorScreen() {
  const [valor, setValor] = useState(0);

  function aumentar() {
    setValor(valor + 1);
  }

  function diminuir() {
    if (valor > 0) {
      setValor(valor - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador</Text>

      <Text style={styles.valor}>{valor}</Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={diminuir}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={aumentar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  valor: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botoesContainer: {
    flexDirection: 'row',
  },
  botao: {
    width: 70,
    height: 70,
    backgroundColor: '#2e86de',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});