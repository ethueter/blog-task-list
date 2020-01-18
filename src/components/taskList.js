import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import SingleTask from './singleTask';




const TaskList = ({ tskList }) => {

    console.log("this is the list",tskList[0])
    return (
        <View>
            {
                tskList.map((tsk, i) => (
                    <ListItem 
                        key={i}
                        title={tsk.task}
                        bottomDivider
                    />
                ))
            }
            <SingleTask listing={tskList}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskList;









