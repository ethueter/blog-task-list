import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation'; 


const TaskTitleBar = ({ navigation }) => {

    return (
      <View
        style={{
          flexDirection: "row",
          height: 45,
          justifyContent: "space-evenly"
        }}
      >
        <Text style={styles.title}>Upcoming Tasks</Text>
        <View style={styles.iconRight}>
            <Icon 
            name="md-add-circle"
            type="ionicon" 
            onPress={() => navigation.navigate("AddTask")}
            />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    iconRight: {
        marginTop: 5,
        
    }

});

export default withNavigation(TaskTitleBar);