import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Header } from 'react-native-elements';
import TaskTitleBar from '../components/taskTitleBar';
import TaskList from '../components/taskList';
import Spacer from '../components/Spacer';
import  { getTasks }  from '../components/task';


const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([]);

    const getList = async () => {
        try {
            const list = await getTasks();
            setTasks(list);
        } catch (err) {
            alert("There was an issue with the request.", err)
        }
    }

    useEffect(() => {
      getList();
    })

    return (
      <View>
        <Header 
          centerComponent={{ text: "Tyler's Task App", style: {fontSize: 30} }}
        />
        <Spacer />
        <TaskTitleBar />
        <ScrollView>
          {tasks.length > 0 ? (
            <TaskList tskList={tasks} />
          ) : null}
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: 15,
    },
    listTitle: {
        fontSize: 25,
        textAlign: 'center',
        margin: 15,
    }
});

export default HomeScreen;


