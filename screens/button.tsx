import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = ({title = 'Submit'}) => {
    return (
        <TouchableOpacity 
            style = {[style.button]}
        >
            <Text
                style={[style.title]}
            >   {title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        height: 45,
        borderRadius: 9999,
        backgroundColor: '#638C6D',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default ButtonComponent;