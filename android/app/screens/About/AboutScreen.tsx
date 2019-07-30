import styles from './styles';
import React, { Component }  from 'react';
import { Image,
		Linking,
		StyleSheet,
		Text,
		View } from 'react-native';

class AboutScreen extends Component {
	render() {
		return(
			<View style={[styles.container, style.content]}>
				<Image 
					source={require("../../../../assets/pictures/bg.jpg")}
					style={style.bg}
				/>
				<Text style={style.title}>Art by</Text>
				<Text style={style.text}>Aiibee</Text>
				<Text style={style.title}>Code by</Text>
				<Text style={style.text}>Howlster</Text>
				<Text style={style.title}>Design by</Text>
				<Text style={style.text}>Aiibee && Howlster</Text>
				<Text style={style.title}>Contact Us</Text>
				<Text  
				style={style.link}
				onPress={() => Linking.openURL('mailto:staraiibee@gmail.com')}>Aiibee</Text>
				<Text  
				style={style.link}
				onPress={() => Linking.openURL('mailto:lykamacaraig@gmail.com')}>Howlster</Text>
			</View>
		);
	}
}

const style = StyleSheet.create({
	bg: {
		position:'absolute'
	},
	content: {
		backgroundColor: '#fdf6e4',
		color: '#50335b'
	},
	title: {
		fontFamily: 'pixelpoiiz',
		color: '#50335b'
	},
	text: {
		fontSize: 25,
		fontFamily: 'Perfect',
		marginBottom: 30,
		color: '#50335b'
	},
	link: {
		fontSize: 25,
		fontFamily: 'Perfect',
		textDecorationLine: 'underline',
		color: '#50335b'
	}

});

export default AboutScreen;