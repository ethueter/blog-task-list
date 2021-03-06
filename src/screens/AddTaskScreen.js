import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { newTask } from '../components/task';




const AddTaskScreen = ({ navigation }) => {
    const [text, setText] = useState('');

    return (
        <View>
            <Text style={styles.title}>Add a Task</Text>
            <Input 
              placeholder="Enter Task" 
              onChangeText={inpt => setText(inpt)}
              value={text}
              />
            <Button 
              title="Submit"
              onPress={() => {
                  newTask(text);
                  setText('');
                  navigation.navigate('Home')
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: 15,
    }
});


export default AddTaskScreen;