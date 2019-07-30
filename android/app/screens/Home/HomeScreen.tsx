import styles from './styles';
import React, { Component }  from 'react';
import { StyleSheet, 
		TouchableOpacity, 
		Text,
		View,
		Image,
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
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Play')}>
					<Image 
					source={require('../../../../assets/pictures/bubble.png')}
					style={style.button}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('How')}>
					<Image 
					source={require('../../../../assets/pictures/bubble.png')}
					style={style.button}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
					<Image 
					source={require('../../../../assets/pictures/bubble.png')}
					style={style.button}
					/>
				</TouchableOpacity>
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

const style = StyleSheet.create({
	button: {
		marginBottom: 20
	}
});

 export default class App  extends Component {
 	render() {
 		return <AppContainer />;
 	}
 }