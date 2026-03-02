/*/*
 * PROJETO: app_View_02 (DESAFIO 06)
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
      <View style={styles.componentView}>
        <Text style={styles.componentText}>COMPONENTE VIEW</Text>
      </View>
      
      <View style={styles.conteudo}>
        <Text style={styles.conteudoText}>CONTEUDO</Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>{'<SEU NOME>'}</Text>
        <Text style={styles.footerText}>{'<dd/mm/aaa>'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    width: 280,
    height: 600,
    padding: 20,
  },
  componentView: {
    backgroundColor: 'darkseagreen', 
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },
  componentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  conteudo: {
    backgroundColor: 'darksalmon', 
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },
  conteudoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  footer: {
    backgroundColor: 'darkcyan', 
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
});