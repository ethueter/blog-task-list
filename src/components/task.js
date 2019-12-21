import React from 'react';
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native';



Parse.initialize('TASK_LIST_PROJECT', 'TASK_ADMIN');
Parse.serverURL = 'http://localhost:1337/parse/classes/Tasks';
Parse.setAsyncStorage(AsyncStorage);

const Task = Parse.Object.extend('Task');


const newTask = (txt) => {
    const task = new Task();
    task.set('task', txt);
    task.set('completed', false);

    task.save()
    .then((task) => {
        console.log('New Task Added', task)
    }, (error) => {
        console.log('this task was not saved',task, error)
    });
};

const getTasks = async () => {
    const query = new Parse.Query(Task);
    const res = await query.find();
    return res;
};

export default newTask;
