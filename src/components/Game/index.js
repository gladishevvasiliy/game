import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Kruk from '../Kruk';
import exercises from '../../res/exercises';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
        exercise: exercises.exercises_names[this.getRandomInt(0,3)],
        score: 0,
    };
  }

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;  

  onChecked = (result) => {
      console.log(result);
      if(result) {
          this.setState({
            exercise: exercises.exercises_names[this.getRandomInt(0,3)],
            score: this.state.score + 1
          })
      } else {
        this.setState({
            exercise: exercises.exercises_names[this.getRandomInt(0,3)],
          })
      }

  }

  render() {
    return (
        <View>   
            <View>
                <Text>{this.state.score}</Text>
            </View>
            <View>
            <Kruk
                exercise={this.state.exercise}
                onChecked={this.onChecked}
                />
            </View>
        </View>        
    );
  }
}
