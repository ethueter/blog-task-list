import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';





const TaskList = ({ tskList }) => {

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









