import styles from './styles';
import React, { Component }  from 'react';
import { Text,
		View } from 'react-native';

class AboutScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>About</Text>
			</View>
		);
	}
}

export default AboutScreen;