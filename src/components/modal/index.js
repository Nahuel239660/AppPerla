import React from "react";
import { Modal, View, Text, Button } from "react-native";
import {styles} from './styles';

const CharacterDestiny = ({onHandleCancel, onHandleDeleteCharacter, modalVisible, selectedCharacter}) => {
    return (
        <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
        <Text style={styles.selectedCharacter}>{selectedCharacter?.value}</Text>
        </View>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailText}>Seguro que quieres eliminarlo?</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button 
            title='Cancelar'
            color='#97849a'
            onPress={onHandleCancel}
          />
          <Button 
            title='Borrar'
            color='#97849a'
            onPress={onHandleDeleteCharacter}
          />
        </View>
    </Modal>
    )
}


export default CharacterDestiny;