import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

export function MarcadorScreen() {
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);

  function aumentarNos() {
    setPontosNos(pontosNos + 1);
  }

  function diminuirNos() {
    if (pontosNos > 0) {
      setPontosNos(pontosNos - 1);
    }
  }

  function aumentarEles() {
    setPontosEles(pontosEles + 1);
  }

  function diminuirEles() {
    if (pontosEles > 0) {
      setPontosEles(pontosEles - 1);
    }
  }

  function apostarNos(valor: number) {
    setPontosNos(pontosNos + valor);
  }

  function apostarEles(valor: number) {
    setPontosEles(pontosEles + valor);
  }

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* LOGO */}
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        {/* TÍTULO */}
        <Text style={styles.titulo}>Marcador de Truco</Text>

        <View style={styles.timesContainer}>
          {/* NÓS */}
          <View style={styles.timeBox}>
            <Text style={styles.nomeTime}>Nós</Text>
            <Text style={styles.valor}>{pontosNos}</Text>

            <View style={styles.botoesContainer}>
              <TouchableOpacity style={styles.botaoMais} onPress={aumentarNos}>
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoMenos} onPress={diminuirNos}>
                <Text style={styles.textoBotao}>-</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => apostarNos(3)}
            >
              <Text style={styles.textoAposta}>TRUCO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoSeis}
              onPress={() => apostarNos(6)}
            >
              <Text style={styles.textoAposta}>SEIS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoNove}
              onPress={() => apostarNos(9)}
            >
              <Text style={styles.textoAposta}>NOVE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoDoze}
              onPress={() => apostarNos(12)}
            >
              <Text style={styles.textoAposta}>DOZE</Text>
            </TouchableOpacity>
          </View>

          {/* ELES */}
          <View style={styles.timeBox}>
            <Text style={styles.nomeTime}>Eles</Text>
            <Text style={styles.valor}>{pontosEles}</Text>

            <View style={styles.botoesContainer}>
              <TouchableOpacity style={styles.botaoMais} onPress={aumentarEles}>
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoMenos} onPress={diminuirEles}>
                <Text style={styles.textoBotao}>-</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.botaoTruco}
              onPress={() => apostarEles(3)}
            >
              <Text style={styles.textoAposta}>TRUCO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoSeis}
              onPress={() => apostarEles(6)}
            >
              <Text style={styles.textoAposta}>SEIS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoNove}
              onPress={() => apostarEles(9)}
            >
              <Text style={styles.textoAposta}>NOVE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoDoze}
              onPress={() => apostarEles(12)}
            >
              <Text style={styles.textoAposta}>DOZE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ffffff',
  },
  timesContainer: {
    flexDirection: 'row',
    width: '100%',
  
  },
  timeBox: {
    flex: 1,
    alignItems: 'center',
  },
  nomeTime: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
     color: '#ffffff',
  },
  valor: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
     color: '#ffffff',
  },
  botoesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  botaoMais: {
    backgroundColor: 'green',
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  botaoMenos: {
    backgroundColor: 'crimson',
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  botaoTruco: {
    backgroundColor: '#0b6b75',
    width: 120,
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  botaoSeis: {
    backgroundColor: '#0a2f7a',
    width: 120,
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  botaoNove: {
    backgroundColor: '#6a0a83',
    width: 120,
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  botaoDoze: {
    backgroundColor: '#8b0000',
    width: 120,
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  textoAposta: {
    color: '#fff',
    fontWeight: 'bold',
  },
});