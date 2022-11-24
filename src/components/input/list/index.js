import { FlatList, Text, View, } from "react-native";

import React from "react";
import {styles} from './styles';

const CharacterList = ({ taskList, renderItem }) => {
    return (
    
        <View>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Items</Text>
            </View>
            <FlatList
            style={styles.listContainer}
            data={taskList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
         </View>

    )
}

export default CharacterList; 