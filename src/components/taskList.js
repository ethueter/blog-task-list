import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import SingleTask from './singleTask';



const TaskList = ({ tskList }) => {
    return (
        <View>
            {
                tskList.map(tsk => (
                    <ListItem 
                        key={tsk.id}
                        title={tsk.task}
                    />
                ))
            }
            <SingleTask listing={tskList}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskList;









