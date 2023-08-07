import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Footer() {
  return (
    <View style={styles.Footer}>
        <Text style={styles.tilte}>develop by Bashar Subh</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    Footer: {
        height: 80,
        backgroundColor: 'coral',
        alignItems: 'center',
        justifyContent: 'center'
    }, tilte: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    }
})