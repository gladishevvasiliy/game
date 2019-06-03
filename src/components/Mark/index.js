import React from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import RESULT from '../../res/constants'

const styles = StyleSheet.create({
  mark: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
})

export default class Mark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),
      colorAnim: new Animated.Value(0),
    }
  }

  componentDidUpdate = () => {
    this.changeColor()
  }

  changeColor = () => {
    const { colorAnim } = this.state
    const { result } = this.props
    if (result === RESULT.ANSWER_TRUE) {
      Animated.timing(colorAnim, {
        toValue: 0,
      }).start(() => this.fadeIn())
    }
    if (result === RESULT.ANSWER_FALSE) {
      Animated.timing(colorAnim, {
        toValue: 1,
      }).start(() => this.fadeIn())
    }
  }

  fadeIn = () => {
    const { fadeAnim } = this.state
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1,
    }).start(() => this.fadeOut())
  }

  fadeOut = () => {
    const { fadeAnim } = this.state
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
    }).start()
  }

  render() {
    const { fadeAnim, colorAnim } = this.state
    const { result } = this.props
    const color = colorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['#1eb533', '#ff0000'],
    })
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View
          style={{
            ...styles.mark,
            opacity: fadeAnim,
          }}
        >
          <Animated.Text style={[styles.text, { color }]}>{result}</Animated.Text>
        </Animated.View>
      </View>
    )
  }
}
