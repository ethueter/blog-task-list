
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import Parse from 'parse/react-native';
import { AsyncStorage } from 'react-native';

Parse.initialize('TASK_LIST_PROJECT', 'TASK_ADMIN');
Parse.serverURL = 'http://192.168.86.47:1337/parse';
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
