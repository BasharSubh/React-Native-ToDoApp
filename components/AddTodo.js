import React, { useState } from 'react'
import { StyleSheet, Button, Text, View , TextInput} from 'react-native'

function AddTodo({submitHandler}) {

    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }

  return (

        <View>
            <TextInput 
            style={styles.input}
            placeholder='new todos'
            onChangeText={changeHandler}
            value={text}
            />
            <Button onPress={() => {
                submitHandler(text);
                setText('')
                }} title='add todos' color='coral' />
        </View>

  )
}

export default AddTodo


const styles = StyleSheet.create({
    input : {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#aa3'
    }
})