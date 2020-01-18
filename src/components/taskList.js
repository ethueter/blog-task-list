import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import SingleTask from './singleTask';




const TaskList = ({ tskList }) => {

    console.log("this is the list",tskList[0])
    return (
        <View>
            {
                tskList.map(tsk => (
                    <ListItem 
                        key={tsk.id}
                        title={tsk.get("task")}
                        bottomDivider
                    />
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskList;









