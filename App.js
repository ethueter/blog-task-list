import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';


const AppNavigator = createStackNavigator({
  Home: HomeScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Task List Project'
  }
}
);


export default createAppContainer(AppNavigator);
