import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';


export default class Stage1 extends Component<{}> {
  render() {
    return (
      <View style={{flex:1}}>


        <CardStack
          style={styles.content}

          ref={swiper => {
            this.swiper = swiper
          }}

          onSwiped={() => console.log('onSwiped')}
          onSwipedLeft={() => console.log('onSwipedLeft')}
        >
          <Card style={[styles.card, styles.card1]} verticalSwipe="false"><Text style={styles.label}>A</Text></Card>
          <Card style={[styles.card, styles.card2]} onSwipedLeft={() => alert('onSwipedLeft')}><Text style={styles.label}>B</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
          <Card style={[styles.card, styles.card2]}><Text style={styles.label}>D</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>E</Text></Card>

        </CardStack>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  }
});