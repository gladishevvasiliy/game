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
  }

  returnToMenu = () => {
    this.setState({ startGame: false })
  }

  startGame = () => {
    this.setState({ startGame: true })
  }

  render() {
    const { startGame } = this.state
    return (
      <View style={styles.container}>
        {startGame ? <Game returnToMenu={this.returnToMenu} /> : <Menu startGame={this.startGame} />}
      </View>
    )
  }
}
