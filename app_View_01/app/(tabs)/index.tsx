/*
 * PROJETO: app_View_01 (DESAFIO 05)
 * ALUNA: Isabela Vianna
 * DATA: 02/03/2026
 * CURSO: ENGENHARIA DE SOFTWARE (SÉTIMO PERÍODO 2026) UNICESUMAR
 */

// Importando a biblioteca geral do React
import React from 'react';
// ImportaR os componentes utilizados
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: 'lightblue', height: '100%', width: 300 }}>
      <View style={{ backgroundColor: 'khaki', height: '20%', width: '100%' }}>
        <Text>Componente VIEW</Text>
        <Text>Isabela Vianna</Text>
        <Text>02/03/2026</Text>
      </View>

      <View style={{ backgroundColor: 'lavender', height: '70%', width: 100 }}>
        <Text>Componente VIEW</Text>
        <Text>Isabela Vianna</Text>
        <Text>02/03/2026</Text>
      </View>

      <View style={{ backgroundColor: 'ivory', height: '10%', width: 200 }}>
        <Text>Componente VIEW</Text>
        <Text>Isabela Vianna</Text>
        <Text>02/03/2026</Text>
      </View>
    </View>
  );
}