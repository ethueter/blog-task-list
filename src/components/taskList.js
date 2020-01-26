import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { completeTask, deleteTask } from './task';


const TaskList = ({ tskList }) => {
  

    return (
      <View>
        {tskList.map(tsk => (
          <ListItem
            key={tsk.id}
            title={tsk.get("task")}
            leftIcon={
              <Icon
                name="check-circle"
                type="Feather"
                onPress={() => completeTask(tsk)}
              />
            }
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

export default TaskList;









