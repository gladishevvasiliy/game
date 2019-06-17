import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    marginTop: 70,
    alignContent: 'center',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBlock: {
    flex: 6,
    paddingTop: 300,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#78909C',
  },
  buttonText: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
  },
})

export default class Menu extends Component {
  startGame = typeOfGame => {
    console.log('THERE')
    console.log(typeOfGame)
    const { startGame } = this.props
    startGame(typeOfGame)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Меню</Text>
          </View>
          <View style={styles.menuBlock}>
            <TouchableWithoutFeedback onPress={() => this.startGame(0)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Угадай знамя</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.startGame(1)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Угадай помету</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.startGame(2)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Угадай соли</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }
}
