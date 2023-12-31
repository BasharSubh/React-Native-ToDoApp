import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.tilte}>React Native Todo Mobile App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 28,
        backgroundColor: 'coral',
    }, tilte: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    }
})