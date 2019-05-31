import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Kruk from "../Kruk";
import exercises from "../../res/exercises";

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    padding: 3,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    width: '100%',
  },
  header: {
    height: 50,
    backgroundColor: 'black',
    color: '#fff',
    width: '100%',
  },
  score: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  exercise: {
    flex: 8,
  }
});

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: exercises.exercises_names[this.getRandomInt(0, 3)],
      score: 0
    };
  }

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  onChecked = result => {
    console.log(result);
    if (result) {
      this.setState({
        exercise: exercises.exercises_names[this.getRandomInt(0, 3)],
        score: this.state.score + 1
      });
    } else {
      this.setState({
        exercise: exercises.exercises_names[this.getRandomInt(0, 3)]
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Угадай название знамени</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.scoreText}>Счет: {this.state.score}</Text>
        </View>
        <View style={styles.exercise}>
          <Kruk exercise={this.state.exercise} onChecked={this.onChecked} />
        </View>
      </View>
    );
  }
}
