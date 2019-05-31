import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 28,
    padding: 3,
  },
  header: {
    height: 76,
    backgroundColor: 'black',
    justifyContent: 'center',
    color: '#fff',
    width: '100%',
    paddingLeft: 22,
    paddingTop: 31,
  },
})

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default Header
