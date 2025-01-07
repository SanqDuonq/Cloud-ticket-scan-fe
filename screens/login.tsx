import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InputComponent from '@/components/input'
import ButtonComponent from './button'

const LoginScreen = () => {
    return (
        <View
            style={[style.container]}
        >
            <Text
                style={[style.header]}
            >
                Cloud Ticket Scan
            </Text>
            <Text
                style={[style.headerSub]}
            >
                Sign in
            </Text>
            <InputComponent
                style={style}
                placeholder='Email'
                label='Your email address'
            />
            <InputComponent
                style={style}
                label='Choose a password'
                placeholder='Password'
            />
            <ButtonComponent/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 300,
        textAlign: 'center',
        color: '#000000'
    },
    headerSub: {
        fontSize: 20,
        fontWeight: 300,
        textAlign: 'center',
        color: '#638C6D'
    }
})

export default LoginScreen