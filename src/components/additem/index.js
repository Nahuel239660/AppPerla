import { Button, TextInput, View } from 'react-native'

import React from "react";
import {styles} from './styles';

const AddCharacter = ({ task, onHandleTask, onHandleChange}) => {
    return(
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        value={task}
        placeholder="Agregar Item"
        onChangeText={onHandleChange}
      />
      <Button disabled={!task} title='Agregar' color='#9A848F' onPress={onHandleTask} />
      </View>
    )
}

export default AddCharacter;

