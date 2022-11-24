import { Text, TouchableOpacity } from "react-native";

import React from "react";
import {styles} from './styles';

const CharacterItem = ({item, onHandleSelected}) => {
    return (
        <TouchableOpacity style={styles.listItemContainer} onPress= {() => onHandleSelected(item)}>
            <Text style={styles.textItem}>{item.value}</Text>
        </TouchableOpacity>
    )
}

export default CharacterItem;