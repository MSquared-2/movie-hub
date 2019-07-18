import React, { Component } from 'react';
import { View, Text, Alert, Button, TextInput, TouchableOpcacity } from 'react-native';

export default class App extends Component {
    state = {
        username: '',
        password: '',
        auth_token: ''
    }

    render() { 
        return (
        <View>
            <TextInput
                placeholder="Enter Username"
                onChangeText={TextInputValue =>
                    this.setState({ username: TextInputValue })}
                    underlineColorAndroid='transparent'
                    style={styles.textInput}
            />
            <TextInput
                placeholder="Enter Password"
                onChangeText={TextInputValue =>
                    this.setState({ password: TextInputValue })}
                    underlineColorAndroid='transparent'
                    style={styles.textInput}
            />
            <TouchableOpcacity>
                <View style={styles.Touchable}>
                    <Text style={{ fontSize: 20, color: '#FFFFFF', }}>Signup</Text>
                </View>
            </TouchableOpcacity>
            <TouchableOpcacity>
                <View style={styles.Touchable}>
                    <Text style={{ fontSize: 20, color: '#FFFFFF', }}>Login</Text>
                </View>
            </TouchableOpcacity>
                
        </View>
        );
    }
}

const styles = {
    textInput: {
        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderRadius: 5,
        fontSize: 20,
    },

    Touchable: {
        height: 50,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

