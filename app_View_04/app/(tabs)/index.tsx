/*/*
 * PROJETO: app_View_04 (DESAFIO 07)
 * ALUNA: Isabela Vianna
 * DATA: 02/03/2026
 * CURSO: ENGENHARIA DE SOFTWARE (SÉTIMO PERÍODO 2026) UNICESUMAR
 */

// Importando a biblioteca geral do React
import React from 'react';
// ImportaR os componentes utilizados
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewVermelha}>
        <Text style={styles.texto}>View Verde - flex: 2</Text>
      </View>

      <View style={styles.viewLaranja}>
        <Text style={styles.texto}>View Bege - flex: 4</Text>
      </View>

      <View style={styles.viewVerde}>
        <Text style={styles.texto}>View Vinho - flex: 5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewVermelha: {
    flex: 2,
    backgroundColor: 'cadetblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLaranja: {
    flex: 4,
    backgroundColor: 'bisque',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewVerde: {
    flex: 5,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});