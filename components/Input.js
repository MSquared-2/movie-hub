import React, { Component } from 'react';
import { Image, Text, TextInput, View, StyleSheet, Dimensions } from 'react-native';

import logo from '../images/clapperboard.png';
import Submit from './Submit.js';

export default class Input extends React.Component {
    state = { username: '', password: '' }

    loginClick = () => {
        //const { username, password } = this.state;
    }
    render() {
        return ( 
            <View>
                <View style={{ alignItems: 'center', marginTop: 50, opacity: 1, top: 50 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={logo} style={styles.logo} />
                            <Text style={styles.text}>Movie Hub</Text>
                        </View>
                        <View style={{ marginTop: 50 }}>
                            <TextInput
                                placeholder="Enter Username"
                                placeholderTextColor='rgba(255,255,255,0.25)'
                                onChangeText={TextInputValue =>
                                    this.setState({ username: TextInputValue })}
                                    underlineColorAndroid='transparent'
                                    style={styles.textInput}
                            />
                            <TextInput
                                placeholder="Enter Password"
                                placeholderTextColor='rgba(255,255,255,0.25)'
                                onChangeText={TextInputValue =>
                                    this.setState({ password: TextInputValue })}
                                    underlineColorAndroid='transparent'
                                    style={styles.textInput}
                            />
                        </View>
                    </View>
                    <Submit onPress={this.loginClick()} />
                </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 120
    },

    text: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'forma',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 50,
    },

    textInput: {
        textAlign: 'center',
        width: DEVICE_WIDTH - 45,
        marginBottom: 7,
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        marginHorizontal: 20,
        height: 40,
        borderRadius: 5,
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.35)',
        color: 'rgba(255,255,255,0.7)'
    },
});
