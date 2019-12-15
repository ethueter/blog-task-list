import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

const TaskList = ({list}) => {
    return (
        <View>
            {
                list.map((item, i) => {
                    <ListItem 
                      key={i}
                      title={item.name}
                    />
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskList;