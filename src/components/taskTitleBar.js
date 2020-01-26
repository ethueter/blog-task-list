import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation'; 


const TaskTitleBar = ({ navigation }) => {

    return (
      <View
        style={{
          flexDirection: "row",
          height: 45,
          justifyContent: "flex-end"
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
    marginRight: 75,
    fontSize: 25,
    fontWeight: "bold"
  },
  iconRight: {
    marginTop: 5,
    marginRight: 10
  }
});

export default withNavigation(TaskTitleBar);