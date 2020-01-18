import Parse from 'parse/react-native';

const Task = Parse.Object.extend('Task');


const newTask = (txt) => {
    const task = new Task();
    task.set('task', txt);
    task.set('completed', false);

    task.save()
    .then((task) => {
        console.log(task);
    }, (error) => {
        console.log('this task was not saved',task, error)
    });
};

const getTasks = async () => {
    const query = new Parse.Query(Task);
    const res = await query.find();
    console.log(res);
    return res;
};


export  {newTask, getTasks };









