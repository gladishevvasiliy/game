import React from 'react'
import { StyleSheet, View } from 'react-native'
import Game from './components/Game'
import Menu from './components/Menu'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class App extends React.Component {
  state = {
    startGame: false,
    numberOfExercises: 10,
    typeOfExercise: 0,
  }

  returnToMenu = () => {
    this.setState({ startGame: false })
  }

  startGame = typeOfExercise => {
    console.log('HRREEEEEEEEEEEEEEEEEEE')
    console.log(typeOfExercise)
    this.setState({ startGame: true, typeOfExercise })
  }

  render() {
    const { startGame, numberOfExercises, typeOfExercise } = this.state
    return (
      <View style={styles.container}>
        {startGame ? (
          <Game
            returnToMenu={this.returnToMenu}
            numberOfExercises={numberOfExercises}
            typeOfExerсise={typeOfExercise}
          />
        ) : (
          <Menu startGame={this.startGame} />
        )}
      </View>
    )
  }
}
