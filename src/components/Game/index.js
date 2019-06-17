import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { isEmpty, isNil, clone } from 'lodash'
import Kruk from '../Kruk'
import Header from '../Header'
import Mark from '../Mark'
import GameOver from '../GameOver'
import RESULT from '../../res/constants'
import { getExersisesList, getQuestion, getRandomInt, getVariants } from '../../res/utils'

const styles = StyleSheet.create({
  title: {
    color: 'white',
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
    padding: 10,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  exercise: {
    flex: 8,
  },
})

export default class Game extends Component {
  constructor(props) {
    super(props)
    const { numberOfExercises, typeOfExerсise } = this.props
    // console.log('typeOfExerсise')
    // console.log(typeOfExerсise)
    this.state = {
      currentExercises: getExersisesList(typeOfExerсise, numberOfExercises),
      currentQuestion: getQuestion(typeOfExerсise),
      currentVariants: getVariants(typeOfExerсise),
      score: 0,
      currentResult: '',
      currentExercise: {},
    }
  }

  componentDidMount = () => {
    console.log('componentDidMount')
    this.getRandomExercise()
  }

  getRandomExercise = () => {
    this.setNewExercise()
  }

  setExerciseDataToState = (currentExercises, result, initialScore, initialResult) => {
    const { score, currentResult } = this.state
    const randomNum = getRandomInt(0, currentExercises.length)
    const newCurrentExercises = clone(currentExercises)
    newCurrentExercises.splice(randomNum, 1)
    this.setState({
      currentExercise: currentExercises[randomNum],
      currentExercises: newCurrentExercises,
      score: !isNil(initialScore) ? initialScore : result ? score + 1 : score,
      currentResult: !isNil(initialResult)
        ? initialResult
        : isNil(result)
        ? currentResult // eslint-disable-line
        : result // eslint-disable-line
        ? RESULT.ANSWER_TRUE // eslint-disable-line
        : RESULT.ANSWER_FALSE, // eslint-disable-line
    })
  }

  setNewExercise = (isNewGame, result) => {
    const { typeOfExerсise, numberOfExercises } = this.props
    if (isNewGame) {
      this.setExerciseDataToState(getExersisesList(typeOfExerсise, numberOfExercises), null, 0, '')
      return
    }
    const { currentExercises } = this.state
    if (result) {
      this.setExerciseDataToState(currentExercises, result)
    } else {
      this.setExerciseDataToState(currentExercises, result)
    }
  }

  onChecked = result => {
    const { score } = this.state
    this.setNewExercise(false, result, score)
  }

  startNewGame = () => {
    this.setNewExercise(true)
  }

  render() {
    const { score, currentExercise, currentResult, currentQuestion, currentVariants } = this.state
    const { returnToMenu } = this.props
    return (
      <View style={styles.container}>
        <Header title="Угадай знамя" />
        {isEmpty(currentExercise) ? (
          <GameOver score={score} startNewGame={this.startNewGame} returnToMenu={returnToMenu} />
        ) : (
          <React.Fragment>
            <View style={styles.score}>
              <Text style={styles.scoreText}>Счет: {score}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Mark result={currentResult} />
            </View>
            <View style={styles.exercise}>
              <Kruk
                exercise={currentExercise}
                question={currentQuestion}
                variants={currentVariants}
                onChecked={this.onChecked}
              />
            </View>
          </React.Fragment>
        )}
      </View>
    )
  }
}
