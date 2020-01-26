import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { deleteTask } from './task';


const CompletedTaskList = ({ compTaskList }) => {

    return (
        <View>
            {compTaskList.map(tsk => (
                <ListItem
                    key={tsk.id}
                    title={tsk.get("task")}
                    rightIcon={
                        <Icon
                            name="delete"
                            type="Feather"
                            onPress={() => {
                                deleteTask(tsk);

                            }}
                        />
                    }
                    bottomDivider
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({});

export default CompletedTaskList;