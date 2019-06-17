import React, { Component } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { isNil } from 'lodash'
import ViewKruk from '../ViewKruk'
import { getRandomInt, shuffleArray } from '../../res/utils'
import exercises from '../../res/exercises'

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
    flex: 4,
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
  state = {
    variants: [],
  }

  componentDidMount = () => {
    const currentVariants = []
    const { variants } = this.props
    console.log(variants)
    let i = 0
    while (i < 3) {
      const randomNumber = getRandomInt(0, variants.length)
      currentVariants.push(variants[randomNumber])
      variants.splice(randomNumber, 1)
      i += 1
    }
    console.log(currentVariants)
    this.setState({ variants: currentVariants })
  }

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
    const { variants } = this.state
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
          {shuffleArray([...variants, exercise.trueAnswer]).map((answer, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button key={index} title={answer} onPress={event => this.buttonHandler(event, answer)} color="#78909C" />
          ))}
        </View>
      </React.Fragment>
    )
  }
}
