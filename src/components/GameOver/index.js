import React, { Component } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
  },
  score: {
    textAlign: 'center',
    fontSize: 60,
  },
  scoreBlock: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export default class GameOver extends Component {
  render() {
    const { score, startNewGame, returnToMenu } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.scoreBlock}>
          <Text style={styles.text}> Ваш результат: </Text>
          <Text style={styles.score}>{score}</Text>
        </View>
        <View style={styles.buttons}>
          <Button title="Начать заново" color="#78909C" onPress={startNewGame} />
          <Button title="В главное меню" color="#78909C" onPress={returnToMenu} />
        </View>
      </View>
    )
  }
}
