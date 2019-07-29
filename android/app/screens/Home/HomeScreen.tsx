import styles from './styles';
import React, { Component }  from 'react';
import { Text,
		View,
		Button } from 'react-native';
import AboutScreen from '../About';
import HowScreen from '../How';
import LoadingScreen from '../Loading';
import PlayScreen from '../Play';
import { createStackNavigator, 
		createSwitchNavigator,
		createAppContainer } from 'react-navigation';

class HomeScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Button 
				title="Play"
				onPress={() => this.props.navigation.navigate('Play')}/>
				<Button 
				title="How to Play"
				onPress={() => this.props.navigation.navigate('How')}/>
				<Button 
				title="About"
				onPress={() => this.props.navigation.navigate('About')}/>
			</View>
		);
	}
}

const HomeStack = createStackNavigator({
				Home: {
					screen: HomeScreen
				},
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
				  headerMode: 'none',
				  navigationOptions: {
				    headerVisible: false,
				  }
				 },
 				{
 					initialRouteName: "Home"
 				});

 const AppContainer =  createAppContainer(HomeStack);

 export default class App  extends Component {
 	render() {
 		return <AppContainer />;
 	}
 }