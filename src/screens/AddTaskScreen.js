import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';

const AddTaskScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Add a Task</Text>
            <Input placeholder="Enter Task" />
            <Button 
              title="Submit"
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