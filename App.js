
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';


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
