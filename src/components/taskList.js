import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { deleteTask } from './task';

const TaskList = ({ tskList, refresh }) => {

    return (
        <View>
            {
                tskList.map(tsk => (
                    <ListItem 
                        key={tsk.id}
                        title={tsk.get("task")}
                        rightIcon={
                            <Icon
                              name='delete-forever'
                              type='Materiallcons'
                              onPress={() => {
                                  deleteTask(tsk);
                                  refresh();
                                }}
                            />
                        }
                        bottomDivider
                    />
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskList;









