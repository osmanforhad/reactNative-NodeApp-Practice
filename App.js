import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {

  /**state define */
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

/**array function */
  const addTodoList = () => {
    setTodoList([todoList, todoItem]);
    console.log(todoList);
  }//end of the array function

  return (
    <View style={(styles.container)}>
      <View>
        <TextInput
         placeholder="Enter Todo Item"
           style={styles.textInput}
           onChangeText = {text => setTodoItem(text)}
           value = {todoItem}
         />
        <Button
          title="Add Todo"
          onPress={addTodoList}
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
