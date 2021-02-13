import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={(styles.container)}>
      <View>
        <TextInput
         placeholder="Enter Todo Item"
           style={styles.textInput}
         />
        <Button
          title="Add Todo"
          onPress={() => console.log("Button clicked")}
        />
      </View>
      <View>
        <Text>List of To dos</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60
  },
  textInput:{
    padding:10,
    borderColor:'#000000',
    marginBottom:10,
    borderWidth:1,
  },
});
