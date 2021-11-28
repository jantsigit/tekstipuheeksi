import * as React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, onChangeText] = React.useState("Write text here");

  const speak = () => {
    const thingToSay = text;
    Speech.speak(thingToSay);
  };


  return (
    <View style={styles.container}>

<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button title="PRESS TO HEAR TEXT" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    margin: 40,
    borderWidth: 2,
    padding: 20,
  }
});