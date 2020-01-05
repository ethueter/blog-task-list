
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import Parse from 'parse/react-native';
import { AsyncStorage } from 'react-native';

Parse.initialize('taskList', 'taskMaster', 'taskJSKey');
Parse.serverURL = 'http://192.168.1.130:1337/parse';
Parse.setAsyncStorage(AsyncStorage);


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  AddTask: AddTaskScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Task List Project'
  }
}
);


export default createAppContainer(AppNavigator);
