import styles from './styles';
import React, { Component }  from 'react';
import { StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

class PlayScreen extends Component {
  state = {
    score: 0
  };

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

           <Text style={style.score}>{this.state.score}</Text>
           <Text style={style.text}>SCORE</Text>
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
              style={style.stack}
            >

              <Card style={[style.card]} onSwipedLeft={() => this.setState({score: 1000})}>
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
    width: '100%'
  },
  bubble: {
    position: 'absolute',
    left: 8,
    top: 25
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
    right: -80,
    top: '25%'
  },
  score: {
    fontFamily: 'Perfect',
    fontSize: 20,
    top: '23%',
    left: 90
  },
  stack: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    top: 390,
    right: 0,
    left: 0,
    bottom: 0
  },
  text: {
    fontFamily: 'pixelpoiiz',
    top: '23%',
    left: -30

  }
});

export default PlayScreen;