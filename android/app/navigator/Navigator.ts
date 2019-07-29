import AboutScreen from '../screens/About';
import HowScreen from '../screens/How';
import LoadingScreen from '../screens/Loading';
import PlayScreen from '../screens/Play';

import { createStackNavigator, 
		createSwitchNavigator,
		createAppContainer } from 'react-navigation';

const HomeStack = createStackNavigator({
				Play: {
					screen: PlayScreen
				}, 
				How: {
					screen: HowScreen
				},
				About: {
					screen: AboutScreen
				}},
 				{
 					initialRouteName: "Home"
 				});

 const RootSwitch = createSwitchNavigator({ LoadingScreen, HomeStack });

 const App =  createAppContainer(RootSwitch);

 export default App;