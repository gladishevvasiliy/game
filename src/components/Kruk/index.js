import React, { Component } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { isNil } from 'lodash'

import ViewKruk from '../ViewKruk'
// из случайного массива заданий случайным образом получается крюк. Передается в компонент Крюк.
// Нажатие на вариант ответа вызывает функцию, которая подсвечивает правильный вариант ответа,
// и вызывает функцию из Game, которая учитывает результат в рейтинге, и открывает следующий крюк.
// или если крюк последний, то выводит экран с результатом

const styles = StyleSheet.create({
  view: {
    flex: 5,
  },
  exercise: {
    flex: 1,
  },
  buttons: {
    flex: 3,
    justifyContent: 'space-around',
    padding: 10,
  },
  questionBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
  },
})

export default class Kruk extends Component {
  buttonHandler = (e, title) => {
    const {
      exercise: { trueAnswer },
      onChecked,
    } = this.props
    if (trueAnswer === title) {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        trueAnswerButtonColor: 'green',
      })
      onChecked(true)
    } else {
      onChecked(false)
    }
  }

  render() {
    const { exercise, question } = this.props
    if (isNil(exercise.view)) return null
    return (
      <React.Fragment>
        <View style={styles.view}>
          <ViewKruk view={exercise.view} />
        </View>
        <View style={styles.questionBlock}>
          <Text style={styles.questionText}>{question}</Text>
        </View>
        <View style={styles.buttons}>
          {exercise.answers.map((answer, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button key={index} title={answer} onPress={event => this.buttonHandler(event, answer)} color="#841584" />
          ))}
        </View>
      </React.Fragment>
    )
  }
}
