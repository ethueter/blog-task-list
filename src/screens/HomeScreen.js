import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import TaskList from '../components/taskList';
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

    return (
      <View>
        <Text style={styles.title}>Tyler's Task App</Text>
        <Button
          title="Add Task"
          onPress={() => navigation.navigate("AddTask")}
        />
        <Button title="Show Tasks" onPress={() => getList()} />
        <Text style={styles.listTitle}>Upcoming Tasks</Text>
        <ScrollView>
          {tasks.length > 0 ? (
            <TaskList tskList={tasks} refresh={() => getList()} />
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


