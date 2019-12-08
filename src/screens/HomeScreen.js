import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Add Task" onPress={()=> navigation.navigate('AddTask')}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreen;