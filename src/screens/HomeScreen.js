import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import TaskList from '../components/taskList';
import  getTasks  from '../components/task';

const HomeScreen = ({ navigation }) => {
    const {tasks, setTasks} = useState([]);
    return (
        <View>
            <Text style={styles.title}>Home Screen</Text>
            <TaskList />
            <Button 
              title="Add Task" 
              onPress={()=> navigation.navigate('AddTask')}/>
            <Button
              title="Show Tasks"
              onPress={() => {}}/>
            {tasks ? <Text>Yes</Text> : <Text>No</Text>}
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

export default HomeScreen;