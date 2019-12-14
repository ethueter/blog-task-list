import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View>
            <Text style={styles.title}>Home Screen</Text>
            <Button 
              title="Add Task" 
              onPress={()=> navigation.navigate('AddTask')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
    }
});

export default HomeScreen;