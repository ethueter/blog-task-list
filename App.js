
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import Parse from 'parse/react-native';
import { AsyncStorage } from 'react-native';

Parse.setAsyncStorage(AsyncStorage);
// Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY", "YOUR_MASTERKEY")
Parse.initialize('taskList', 'taskMaster', 'taskJSKey');
Parse.serverURL = 'http://192.168.1.130:1337/parse';



const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  AddTask: AddTaskScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Task List Project',
  }
}
);


export default createAppContainer(AppNavigator);





