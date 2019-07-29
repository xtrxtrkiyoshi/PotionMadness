import styles from './styles';
import React, { Component }  from 'react';
import { StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image } from 'react-native';
import ReactTimeout from 'react-timeout';
import Overlay from 'react-native-modal-overlay';
import CardStack, { Card } from 'react-native-card-stack-swiper';

class PlayScreen extends Component {
  /*
    Odd ingredients are odd, even ingredients are correct
    current is for current ingredients in the cards
    index is counter for ingredients
    threshold is the one for leveling up
    counter is for threshold
  */

  state = {
    score: 0,
    ingredients: [
      "toe of frog", "garlic cloves",
      "foot of bear", "hawk's heart",
      "tongue of dog", "newt eyeball"
    ],
    current: [],
    start: false,
    visible: false,
    timer: 4,
    lives: 3,
    index: 1,
    counter: 0, 
    threshold: 10,
    reaction: "normal"    
  };


  gameStart() {
    if(this.state.start === true) {
      this.clock = setTimeout(() => {this.setState( {timer: this.state.timer - 1 }), this.gameStart()}, 1000);
    }
    if(this.state.timer === 0) {
      this.wrong();
    }
  }

  returnToNormal = () => setTimeout(() => this.setState({reaction: "normal"}), 2000);

  gameOver() {
    this.setState({ start: false,
            visible: true });
  }



  start() {
    this.setState({
      score: 0,
      current: [],
      start: false,
      visible: false,
      timer: 4,
      lives: 3,
      index: 1,
      counter: 0, 
      threshold: 10,
      reaction: "normal"    
    });
  }

  wrong() {
    if(this.state.start === false) {
      this.setState({ start: true });
      this.gameStart();
    }
    this.setState({ reaction: "wrong",
            lives: this.state.lives - 1,
            timer: 4 });
    
    if(this.state.lives === 0) {
      this.gameOver();
    }
    this.returnToNormal();
  }

  correct() {
    if(this.state.start === false) {
      this.setState({ start: true });
      this.gameStart();
    }
    this.setState({score: this.state.score + 1, 
              reaction: "correct",
              timer: 4 });
    this.returnToNormal();
  }



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
           {/* so increasing in score will not affect the flex, 
              contain it */}
           <View style={style.content}>
            <View style={style.content}>
              <Text style={style.score}>{this.state.score}</Text>
            </View>
            <Text style={style.text}>SCORE</Text>
           </View>
          {/*
            BG image for transition purposes
          */}
           <Image
            source={require("../../../../assets/pictures/gif.png")}
            style={[{position: 'absolute', right: -17, top: 3}]}
           />
           {  
            /*
              Changing gifs if the user gets it right or wrong
            */
            this.state.reaction==="normal"? 
            <Image
              source={require("../../../../assets/pictures/normal.gif")}
              style={style.gif}
            />
            :
            this.state.reaction==="correct"?
            <Image
              source={require("../../../../assets/pictures/correct.gif")}
              style={style.gif}
            />
            :
            <Image
              source={require("../../../../assets/pictures/wrong.gif")}
              style={style.gif}
             />
           }
          
          
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

              <Card style={[style.card]} onSwipedLeft={() => this.correct()}>
                <Image
            source={require("../../../../assets/pictures/card.png")}
             />

              </Card>

            </CardStack>
          </View>
          
          <Overlay visible={this.state.visible}>
            <Text>Game Over</Text>
          </Overlay>        
        
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
    flex: 0,
    right: 70,
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
    flex: 0,
    fontFamily: 'pixelpoiiz',
    top: '23%',
    left: -200

  }
});

export default PlayScreen;