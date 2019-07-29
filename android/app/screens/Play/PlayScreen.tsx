import styles from './styles';
import React, { Component }  from 'react';
import { StyleSheet,
	  Text,
	  View,
	  TouchableOpacity,
	  Image } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

class PlayScreen extends Component {
	render() {
		return(
			<View >
				
				<View>
					<Image
						source={require("../../../../assets/pictures/bg.jpg")}
						style={style.bg}
					 />
				</View>

				<View style={[style.content, {flex: 1, bottom: 0}]}>
					<Image
						source={require("../../../../assets/pictures/bubble.png")}
						style={style.bubble}
					 />
					<Image
						source={require("../../../../assets/pictures/normal.gif")}
						style={style.gif}
					 />
					
				</View>
				
				<View style={[style.content, 
						{flex: 1, 
						top: 0,
					  	bottom: 0,
					  	right: 0,
					  	left: 0}]}>
					<CardStack
				      ref={swiper => {
				        this.swiper = swiper
				      }}
				      verticalSwipe="false"
				    >

				      <Card style={[style.card]}>
				      	<Image
						source={require("../../../../assets/pictures/card.png")}
						 />
				      </Card>

				    </CardStack>
			    </View>
			    
			    
				
			</View>
		);
	}
}

const style = StyleSheet.create({
  bg: {
  	position: 'absolute',
  	top: 0,
  	bottom: 0,
  	right: 0,
  	left: 0
  },
  bubble: {
  	left: 43,
  	top: '25%'
  },
  content:{
  	flexDirection: 'row',
  	width: '100%' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
  	top: 0,
  	bottom: 0,
  	right: 50,
  	left: 0,
  	resizeMode: 'contain',
    justifyContent: "center",
    resizeMode: "contain",
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  gif: {
  	right: 17,
  	top: '25%'
  }
});

export default PlayScreen;