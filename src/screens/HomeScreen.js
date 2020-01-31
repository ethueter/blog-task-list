import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import TaskTitleBar from '../components/taskTitleBar';
import TaskList from '../components/taskList';
import Spacer from '../components/Spacer';
import CompletedTaskList from '../components/CompletedTaskList'
import  { getTasks, getCompTasks }  from '../components/task';


const HomeScreen = () => {
    const [tasks, setTasks] = useState([]);
    const [compTasks, setCompTasks] = useState([]);
    let todo = tasks.filter(tsk => tsk.get("completed") === false);
    let done = tasks.filter(tsk => tsk.get("completed") === true);

    const getList = async () => {
        try {
            const list = await getTasks();
            setTasks(list);
            // setCompTasks(done);     
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
          centerComponent={{
            text: "Tyler's Task App",
            style: { fontSize: 30 }
          }}
        />
        <Spacer />
        <TaskTitleBar />
        <ScrollView>
          {tasks.length > 0 ? <TaskList tskList={todo} /> : null}
        </ScrollView>
        <Text style={styles.title}>Completed Tasks</Text>
        <ScrollView>
          {done.length > 0 ? <CompletedTaskList compTaskList={done} /> : null }
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: 'center',
  }
});

export default HomeScreen;


