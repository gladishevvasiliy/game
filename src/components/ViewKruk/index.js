import React, { Component } from 'react'
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native'
import { Font } from 'expo'

const styles = StyleSheet.create({
  kruk: {
    fontSize: 150,
    fontFamily: 'Kruk',
  },
  pometa: {
    fontSize: 100,
    fontFamily: 'Kruk',
    color: 'red',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const showNode = (node, i) => {
  if (node.color === 'red') {
    return (
      <View key={i}>
        <Text style={styles.pometa}>{node.symbols}</Text>
      </View>
    )
  }
  return (
    <View key={i}>
      <Text style={styles.kruk}>{node.symbols}</Text>
    </View>
  )
}

export default class ViewKruk extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Kruk: require('../../res/Kruk-Kalashn-edit-VG.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    const { view } = this.props
    const { fontLoaded } = this.state
    return (
      <View style={styles.container}>
        {fontLoaded ? (
          <View style={styles.view}>{view.map((node, i) => showNode(node, i))}</View>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    )
  }
}
