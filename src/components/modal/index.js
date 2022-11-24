import { Button, Modal, Text, View } from "react-native";

import React from "react";
import {styles} from './styles';

const CharacterDestiny = ({onHandleCancel, onHandleDeleteCharacter, modalVisible, selectedCharacter}) => {
    return (
        <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
        <Text style={styles.selectedCharacter}>{selectedCharacter?.value}</Text>
        </View>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailText}>Seguro que quieres Borrar el item?</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button 
            title='Cancelar'
            color='#9A848F'
            onPress={onHandleCancel}
          />
          <Button 
            title='Confirmar'
            color='#9A848F'
            onPress={onHandleDeleteCharacter}
          />
        </View>
    </Modal>
    )
}


export default CharacterDestiny;