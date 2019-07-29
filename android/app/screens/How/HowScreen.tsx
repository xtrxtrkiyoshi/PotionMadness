import styles from './styles';
import React, { Component }  from 'react';
import { Text,
		View } from 'react-native';

class HowScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>How</Text>
			</View>
		);
	}
}

export default HowScreen;