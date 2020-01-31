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
    try {
        const query = new Parse.Query(Task);
        // query.equalTo("completed", false)
        const res = await query.find();
        return res;
    } catch (err) {
        alert("There was an error with your request", err)
    }
};

const getCompTasks = async () => {
    try {
        const query = new Parse.Query(Task);
        query.equalTo("completed", true)
        const res = await query.find();
        return res;
    } catch (err) {
        alert("There was an error with your request", err)
    }
};

const completeTask = (obj) => {
    obj.set("completed", true);
    try {
        obj.save();
        alert("Good Job!")
    } catch (err) {
        alert("Sorry couldn't complete that task. Please try again", err)
    }
}

const deleteTask = (obj) => {
    try {
        obj.destroy();
    } catch (err) {
        alert("This task was not deleted.", err)
    }
}


export  { newTask, getTasks, getCompTasks, deleteTask, completeTask };









