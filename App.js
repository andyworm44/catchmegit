import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [bonus, setBouns] = useState(0)

  const get = () => {
    setBouns(bonus + 100)
  }

  const reset = () => {
    setBouns(bonus - bonus)
  }

  return (
    <View style={styles.container}>

      <Text>{bonus}</Text>
      <TouchableOpacity onPress={() => get()}>
        <Text>領取100元獎勵！</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={() => reset()}>
        <Text>獎勵歸零！</Text>
      </TouchableHighlight>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'gray'
  },
  secondText: {
    color: 'green'
  }

});
