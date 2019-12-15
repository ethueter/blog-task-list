import React from 'react';
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native';


Parse.setAsyncStorage(AsyncStorage);
const Task = Parse.Object.extend('Task');


const newTask = (txt) => {
    const task = new Task();
    task.set('name', txt);

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

export default {newTask, getTasks};
